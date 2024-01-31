import { memo } from 'react';

import * as S from './style';

interface ICollectionControl {
  totalCount: number;
  checkCount: number;
  onReset: () => void;
}

function CollectionControl({ totalCount, checkCount, onReset }: ICollectionControl) {
  console.log("CollectionControl");

  return (
    <S.Contain>
      <S.Title>
        Collections
        <S.Count>{ `Total: ${totalCount}` }</S.Count>
      </S.Title>
      <S.Control>
        <S.Reset type="button" onClick={onReset}>Reset</S.Reset>
        <S.Deletes type="submit" chk={ checkCount }>
          <img src="./assets/svg/trash-can-solid.svg" alt="delete all button of collections" />
          <S.CheckNum>{ checkCount }</S.CheckNum>
        </S.Deletes>
      </S.Control>
    </S.Contain>
  )
}

export default memo(CollectionControl);
