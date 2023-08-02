import { memo } from 'react';

import { dto } from '../../../../application/dto';
import { thisIdExcept } from '../../../../../../utils';
import * as S from './style';
import CollectionItem from './CollectionItem';

interface ICollectionList {
  isLoading: boolean;
  collections: dto.CollectionDTO[] | [] | undefined;
  onDelete: (name: string) => void;
}

function CollectionList({ isLoading, collections, onDelete }: ICollectionList) {
  console.log("CollectionList");
  
  return (
    <S.Contain>
      {
        isLoading ?
          <S.Loading>Loading...</S.Loading> :
          collections?.map((item) => (
            thisIdExcept(item.name) || <CollectionItem key={item.name} collection={item} onDelete={onDelete} />
          ))
      }
    </S.Contain>
  )
}

export default memo(CollectionList);
