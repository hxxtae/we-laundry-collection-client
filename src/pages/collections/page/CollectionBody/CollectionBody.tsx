import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { thisIdExcept } from '../../../../utils/config';
import { useCollectionFetch, useCollectionDel, useCollectionsDel } from '../../application/custom_hooks';
import { dto } from '../../application/dto';
import Loadings from '../../../../components/Loadings';
import { CollectionList } from './CollectionList';
import CollectionControl from './CollectionControl';

function CollectionBody() {
  const { isCollectLoading, isCollectFetching, collectData, collectLength } = useCollectionFetch();
  const { delLoading, delData } = useCollectionDel();
  const { delsLoading, delDatas } = useCollectionsDel();
  const isLoading = isCollectLoading || isCollectFetching;
  const isFetcing = delLoading || delsLoading;
  const method = useForm<dto.CollectionNamesDTO>();
  const checkCount = method.watch().names ? method.watch().names.length : 0;

  const onDelete = (name: string) => {
    const data = name;
    if (thisIdExcept(data)) {
      alert('It cannot be done.');
      return;
    }
    const check = window.confirm(`Delete the [ ${data} ] collection?`);
    if (check) {
      delLoading || delData(data, {
        onSuccess: () => method.reset(),
      });
    }
  }

  const onSubmit = ({ names }: dto.CollectionNamesDTO) => {
    const datas = names;
    if (!datas || !datas.length) {
      return;
    }
    const check = window.confirm(`Delete the [ ${datas.length} ] collections?`);
    if (check) {
      delsLoading || delDatas(datas, {
        onSuccess: () => method.reset(),
      });
    }
  }

  const onReset = () => {
    method.reset();
  }

  return (
    <>
      <Section>
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(onSubmit)}>
            <CollectionControl total={collectLength} checkCount={checkCount} onReset={onReset} />
            <CollectionList isLoading={isLoading} collections={collectData} onDelete={onDelete} />
          </form>
        </FormProvider>
      </Section>

      {isFetcing && <Loadings />}
    </>
  )
}

export default CollectionBody;

const Section = styled.section`
  padding: 20px 0;
`;


