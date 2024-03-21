import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n} defaultNS='translations'>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>
);
