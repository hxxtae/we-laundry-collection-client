import styled from 'styled-components';
import { memo } from 'react';

import { colors, thisIdExcept, media, noDrag, scroll } from '../../../../../utils';
import { dto } from '../../../application/dto';
import InputCheck from './InputCheck';

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
            <li key={item.name}>
              {thisIdExcept(item.name) ?
                <NotCheck /> :
                <InputCheck thisName={item.name} />}
              <Wrapper>
                <Name>{item.name}</Name>
                <Type>{item.type}</Type>
              </Wrapper>
              {thisIdExcept(item.name) ||
                <Delete type="button" onClick={() => onDelete(item.name)}>Delete</Delete>}
            </li>  
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
  
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid ${colors.bgColor};
    padding: 20px 0;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    ${noDrag()}
  }

  @media ${media.tablet_s} {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Loading = styled.div`
  text-align: center;
  font-size: 20px;
  color: ${colors.light};
  padding: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 0;
`;

const Type = styled.span`
  font-size: 16px;
  color: ${colors.secondary};
`;

const Delete = styled.button`
  font-size: 16px;
  color: ${colors.light};
  background-color: ${colors.red};
  border-radius: 5px;
  padding: 5px;
  margin-left: auto;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;

  &:active {
    opacity: .4;
  }

  @media ${media.tablet_s} {
    &:hover {
    opacity: .4;
  }
}
`;

const NotCheck = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${colors.red};
  border-radius: 50%;
  margin: 10px;
  align-self: flex-start;
`;