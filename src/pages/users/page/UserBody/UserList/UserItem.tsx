import styled from 'styled-components';

import { colors, media, noDrag } from '../../../../../utils';
import { dto } from '../../../application/dto';

interface IUserItem {
  user: dto.IUser;
  onDelete: (username: string) => void;
}

function UserItem({ user, onDelete }: IUserItem) {

  return (
    <Item>
      <Wrapper>
        <Name>{user.username}</Name>
      </Wrapper>
      <Delete type="button" onClick={() => onDelete(user.username)}>Delete</Delete>
    </Item>
  )
}

export default UserItem;

const Item = styled.li`
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
