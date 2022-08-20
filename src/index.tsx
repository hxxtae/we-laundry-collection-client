import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { createGlobalStyle } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import { reset } from 'styled-reset';
import "react-toastify/dist/ReactToastify.css";

import App from './App';

const client = new QueryClient();

const GlobalStyled = createGlobalStyle`
  ${reset}
  
  * {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-content-zooming: none;
    -ms-touch-action: pan-x pan-y;
  }

  html {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12px;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12px;
    background-color: #121925;
    color: #ffffff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={client}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RecoilRoot>
      <ToastContainer />
      <GlobalStyled />
      <App />
    </RecoilRoot>
  </QueryClientProvider>
  // </React.StrictMode>
);

