import { FormProvider, useForm } from 'react-hook-form';
import 'styled-components';
import styled from 'styled-components';

import Loadings from '../../../components/Loadings';
import { thisIdExcept } from '../../../utils/config';
import { colors } from '../../../utils/config';
import { media, noDrag, scroll } from '../../../utils/mixins';
import { useCollectionDel } from '../custom_hooks/useCollectionDel';
import { useCollectionFetch } from '../custom_hooks/useCollectionFetch';
import { useCollectionsDel } from '../custom_hooks/useCollectionsDel';
import { CollectionNamesDTO } from '../dto/dto';
import InputCheck from './InputCheck';

function CollectionList() {
  const { isCollectLoading, isCollectFetching, collectData, collectLength } = useCollectionFetch();
  const { delLoading, delData } = useCollectionDel();
  const { delsLoading, delDatas } = useCollectionsDel();
  const isLoading = isCollectLoading || isCollectFetching;
  const isFetcing = delLoading || delsLoading;
  const method = useForm<CollectionNamesDTO>();
  const checkCount = method.watch().names ? method.watch().names.length : 0;

  const onClick = (name: string) => {
    const data = name;
    if (thisIdExcept(data)) {
      alert('It cannot be done.');
      return;
    }
    const check = window.confirm(`Delete the [ ${data} ] collection?`);
    if (check) {
      delData(data, {
        onSuccess: () => method.reset()
      });
    }
  }

  const onSubmit = ({ names }: CollectionNamesDTO) => {
    const datas = names;
    if (!datas || !datas.length) {
      return;
    }
    const check = window.confirm(`Delete the [ ${datas.length} ] collections?`);
    if (check) {
      delDatas(datas, {
        onSuccess: () => method.reset()
      });
    }
  }

  const onReset = () => {
    method.reset();
  }

  return (
    <>
      <Section>
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(onSubmit)}>
            <Head>
              <Title>
                Collections
                <Count>{ `Total: ${collectLength}` }</Count>
              </Title>
              <Control>
                <Reset type="button" onClick={onReset}>Reset</Reset>
                <Deletes type="submit" chk={ checkCount }>
                  <img src="./assets/svg/trash-can-solid.svg" alt="delete all" />
                  <CheckNum>{ checkCount }</CheckNum>
                </Deletes>
              </Control>
            </Head>
            <Contain>
              {
                isLoading ?
                  <Loading>Loading...</Loading> :
                  collectData.map((item) => (
                    <li key={item.name}>
                      {thisIdExcept(item.name) ?
                        <NotCheck /> :
                        <InputCheck thisName={item.name} />}
                      <Wrapper>
                        <Name>{item.name}</Name>
                        <Type>{item.type}</Type>
                      </Wrapper>
                      {thisIdExcept(item.name) ||
                        <Delete type="button" onClick={() => onClick(item.name)}>Delete</Delete>}
                    </li>  
                ))
              }
            </Contain>
          </form>
        </FormProvider>
      </Section>

      {isFetcing && <Loadings />}
    </>
  )
}

export default CollectionList;

const Section = styled.section`
  padding: 20px 0;
`;

const Head = styled.div`
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


