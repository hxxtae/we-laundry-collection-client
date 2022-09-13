import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useCallback } from 'react';

import { thisIdExcept } from '../../../../utils';
import { useCollectionFetch, useCollectionDel, useCollectionsDel } from '../../application/custom_hooks';
import { dto } from '../../application/dto';
import { CollectionList } from './CollectionList';
import CollectionControl from './CollectionControl';

function CollectionBody() {
  console.log('collectionBody');
  const { isCollectLoading, isCollectFetching, collectData, collectLength } = useCollectionFetch();
  const { delMutating, delData } = useCollectionDel();
  const { delsMutating, delDatas } = useCollectionsDel();
  const isLoading = isCollectLoading || isCollectFetching;
  const method = useForm<dto.CollectionNamesDTO>();
  const checkCount = method.watch().names ? method.watch().names.length : 0;

  const onDelete = useCallback((name: string) => {
    const data = name;
    if (thisIdExcept(data)) {
      alert('It cannot be done.');
      return;
    }
    const check = window.confirm(`Delete the [ ${data} ] collection?`);
    if (!check) return;

    delMutating || delData(data, {
      onSuccess: () => method.reset(),
    });
  }, [collectData]);

  const onDeletes = ({ names }: dto.CollectionNamesDTO) => {
    const datas = names;
    if (!datas || !datas.length) {
      return;
    }
    const check = window.confirm(`Delete the [ ${datas.length} ] collections?`);
    if (!check) return;

    delsMutating || delDatas(datas, {
      onSuccess: () => method.reset(),
    });
  }

  const onReset = useCallback(() => {
    method.reset();
  }, []);

  return (
    <Section>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onDeletes)}>
          <CollectionControl total={collectLength} checkCount={checkCount} onReset={onReset} />
          <CollectionList isLoading={isLoading} collections={collectData} onDelete={onDelete} />
        </form>
      </FormProvider>
    </Section>
  )
}

export default CollectionBody;

const Section = styled.section`
  padding: 20px 0;
`;


