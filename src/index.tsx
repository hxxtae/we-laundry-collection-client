import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import App from './App';

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={client}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RecoilRoot>
      <ToastContainer />
      <App />
    </RecoilRoot>
  </QueryClientProvider>
  // </React.StrictMode>
);

