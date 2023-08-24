import * as S from './style';
import * as dto from '../../../../../../../types/collections';
import InputCheck from './InputCheck';

interface ICollectionItem {
  collection: dto.CollectionDTO;
  onDelete: (name: string) => void;
}

function CollectionItem({ collection, onDelete }: ICollectionItem) {
  console.log('CollectionItem');

  return (
    <S.Item key={collection.name}>
      <InputCheck thisName={collection.name} />
      <S.Wrapper>
        <S.Name>{collection.name}</S.Name>
        <S.Type>{collection.type}</S.Type>
      </S.Wrapper>
      <S.Delete type="button" onClick={() => onDelete(collection.name)}>Delete</S.Delete>
    </S.Item>
  )
}

export default CollectionItem;
