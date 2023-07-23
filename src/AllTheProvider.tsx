import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

import { GlobalStyled } from "./styles/reset";
import { Suspense } from 'react';
import { MainLoading } from './components';

interface IAllTheProvider {
  children: React.ReactElement;
}

const client = new QueryClient();

function AllTheProvider({ children }: IAllTheProvider) {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RecoilRoot>
        <ToastContainer />
        <GlobalStyled />
        <Suspense fallback={<MainLoading />}>
          {children}
        </Suspense>
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default AllTheProvider;
