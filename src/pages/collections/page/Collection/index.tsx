import React from 'react';

import { useQueriesMutating } from '../../../../hooks/querys/common';
import { Containers, Loadings } from '../../../../components';
import { mutateKey } from '../../../../constants';
import CollectionBody from './CollectionBody';
import CollectionHeader from './CollectionHeader';

function Collection() {
  const { isLoading: isMutating } = useQueriesMutating(mutateKey.collect.all);
  
  return (
    <>
      <Containers >
        <React.Fragment>
          <CollectionHeader />
          <CollectionBody />
        </React.Fragment>
      </Containers>

      {isMutating && <Loadings />}
    </>
  )
}

export default Collection;
