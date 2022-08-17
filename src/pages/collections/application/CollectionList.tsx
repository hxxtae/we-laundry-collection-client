import { useCollectionFetch } from '../custom_hooks/useCollectionFetch';

function CollectionList() {
  const { isLoading, fetchData } = useCollectionFetch();

  return (
    <div>
      {
        isLoading ?
        <div>
          <h2>Loading...</h2>
        </div> : 
        <ul>
          {fetchData.map((item) => (
            <li key={item.name}>
              <sup>{item.name} / </sup>
              <sup>{item.type}</sup>
            </li>  
          ))}
        </ul>
      }
    </div>
  )
}

export default CollectionList;
