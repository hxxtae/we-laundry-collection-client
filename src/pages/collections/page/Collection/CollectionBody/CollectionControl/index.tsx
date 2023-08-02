import { memo } from 'react';

import * as S from './style';

interface ICollectionControl {
  total: number;
  checkCount: number;
  onReset: () => void;
}

function CollectionControl({ total, checkCount, onReset }: ICollectionControl) {
  console.log("CollectionControl");

  return (
    <S.Contain>
      <S.Title>
        Collections
        <S.Count>{ `Total: ${total}` }</S.Count>
      </S.Title>
      <S.Control>
        <S.Reset type="button" onClick={onReset}>Reset</S.Reset>
        <S.Deletes type="submit" chk={ checkCount }>
          <img src="./assets/svg/trash-can-solid.svg" alt="delete all button of collection" />
          <S.CheckNum>{ checkCount }</S.CheckNum>
        </S.Deletes>
      </S.Control>
    </S.Contain>
  )
}

export default memo(CollectionControl);
