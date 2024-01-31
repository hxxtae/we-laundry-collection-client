import ReactDOM from 'react-dom/client';

import AllTheProvider from './AllTheProvider';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <AllTheProvider>
    <App />
  </AllTheProvider>
);

console.log(
  "Website by %c https://heetae.dev ",
  "font-size: 14px; line-height: 44px; color: #e7e7e7; background-color: black"
);
