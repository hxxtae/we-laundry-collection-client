import { FormProvider, useForm } from 'react-hook-form';
import { useCallback } from 'react';

import { thisIdExcept } from '../../../../../utils';
import { useCollectionFetch, useCollectionDel, useCollectionsDel } from '../../../../../hooks/querys/collections';
import * as S from './style';
import * as dto from '../../../../../types/collections';
import CollectionList from './CollectionList';
import CollectionControl from './CollectionControl';

function CollectionBody() {
  const { isCollectLoading, isCollectFetching, collectData, collectLength } = useCollectionFetch();
  const { delMutating, delData } = useCollectionDel();
  const { delsMutating, delDatas } = useCollectionsDel();
  const isLoading = isCollectLoading || isCollectFetching;
  const method = useForm<dto.CollectionNamesDTO>({defaultValues: { names: [] }});
  const checkCount = method.watch().names?.length || 0;

  const onDelete = useCallback((name: string) => {
    const exceptName = thisIdExcept(name);
    if (exceptName) {
      alert(`It cannot be done. [ ${exceptName} ]`);
      return;
    }
    const check = window.confirm(`Delete the [ ${name} ] collection?`);
    if (!check) return;

    delMutating || delData(name, {
      onSuccess: () => method.reset(),
    });
  }, [delMutating, delData, method]);

  const onDeletes = ({ names }: dto.CollectionNamesDTO) => {
    if (!names?.length) return;

    const exceptName = names.find((name) => thisIdExcept(name));
    if (exceptName) {
      alert(`It cannot be done. [ ${exceptName} ]`);
      return;
    }
    const check = window.confirm(`Delete the [ ${names.length} ] collections?`);
    if (!check) return;

    delsMutating || delDatas(names, {
      onSuccess: () => method.reset(),
    });
  }

  const onReset = useCallback(() => {
    method.reset();
  }, [method]);

  return (
    <S.Section>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onDeletes)}>
          <CollectionControl totalCount={collectLength} checkCount={checkCount} onReset={onReset} />
          <CollectionList isLoading={isLoading} collections={collectData} onDelete={onDelete} />
        </form>
      </FormProvider>
    </S.Section>
  )
}

export default CollectionBody;
