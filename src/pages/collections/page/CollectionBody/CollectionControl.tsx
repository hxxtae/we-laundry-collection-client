import styled from 'styled-components';

import { colors } from '../../../../utils/config';
import { media } from '../../../../utils/mixins';

interface ICollectionControl {
  total: number;
  checkCount: number;
  onReset: () => void;
}

function CollectionControl({ total, checkCount, onReset }: ICollectionControl) {

  return (
    <Contain>
      <Title>
        Collections
        <Count>{ `Total: ${total}` }</Count>
      </Title>
      <Control>
        <Reset type="button" onClick={onReset}>Reset</Reset>
        <Deletes type="submit" chk={ checkCount }>
          <img src="./assets/svg/trash-can-solid.svg" alt="delete all" />
          <CheckNum>{ checkCount }</CheckNum>
        </Deletes>
      </Control>
    </Contain>
  )
}

export default CollectionControl;

const Contain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Count = styled.strong`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.secondary};
  padding: 0 20px;

  @media ${media.tablet_s} {
    font-size: 25px;
  }
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media ${media.tablet_s} {
    flex-direction: row;
  }
`;

const Reset = styled.button`
  font-size: 16px;
  color: ${colors.light};
  background-color: ${colors.green};
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;

  &:active {
    opacity: .4;
  }

  @media ${media.tablet_s} {
    margin: 0 20px;
    &:hover {
      opacity: .4;
    }
  }
`;

const Deletes = styled.button<{chk: number}>`
  position: relative;
  width: 30px;
  padding: 5px;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;
  opacity: ${({ chk }) => chk === 0 ? .4 : 1};

  &:active {
    opacity: .4;
  }

  @media ${media.tablet_s} {
    margin-right: 30px;
    &:hover {
      opacity: .4;
    }
  }
`;

const CheckNum = styled.sub`
  position: absolute;
  right: -22px;
  top: 2px;
  width: 25px;
  height: 30px;
  border-radius: 5px;
  color: ${colors.light};
  font-size: 20px;
  font-weight: 600;
`;
