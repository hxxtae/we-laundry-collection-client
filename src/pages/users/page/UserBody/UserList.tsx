import styled from 'styled-components';

import { colors, media, noDrag, scroll } from '../../../../utils';
import { dto } from '../../application/dto';

interface IUserList {
  isLoading: boolean;
  users: dto.IUser[] | [] | undefined;
}

function UserList({ isLoading, users }: IUserList) {
  return (
    <Contain>
      {
        isLoading ?
          <Loading>Loading...</Loading> : 
          users?.map((user) => (
            <li key={user.id}>
              <Wrapper>
                <Name>{user.username}</Name>
              </Wrapper>
            </li>
          ))
      }
    </Contain>
  )
}

export default UserList;

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

