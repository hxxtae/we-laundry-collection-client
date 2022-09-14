import styled from 'styled-components';
import { memo } from 'react';

import { colors, noDrag, scroll, thisIdExcept } from '../../../../../utils';
import { dto } from '../../../application/dto';
import CollectionItem from './CollectionItem';

interface ICollectionList {
  isLoading: boolean;
  collections: dto.CollectionDTO[] | [] | undefined;
  onDelete: (name: string) => void;
}

function CollectionList({ isLoading, collections, onDelete }: ICollectionList) {
  console.log("CollectionList");
  
  return (
    <Contain>
      {
        isLoading ?
          <Loading>Loading...</Loading> :
          collections?.map((item) => (
            thisIdExcept(item.name) || <CollectionItem key={item.name} collection={item} onDelete={onDelete} />
          ))
      }
    </Contain>
  )
}

export default memo(CollectionList);

const Contain = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${colors.boxColor};
  border-radius: 7px;
  padding: 30px 15px;
  margin-bottom: 20px;
  max-height: 80vh;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  ${scroll.bar(10)}
  ${scroll.track()}
  ${scroll.thumb(colors.secondary)}

  ${noDrag()}
`;

const Loading = styled.div`
  text-align: center;
  font-size: 20px;
  color: ${colors.light};
  padding: 50px;
`;
