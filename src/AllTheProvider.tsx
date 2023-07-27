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

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    }
  }
});

function AllTheProvider({ children }: IAllTheProvider) {
  console.log('AllTheProvider')
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
