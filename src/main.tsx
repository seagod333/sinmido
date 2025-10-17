import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routers } from './routers.tsx';
import { Provider } from './provider/index.tsx';
import './assets/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <Routers />
    </Provider>
  </React.StrictMode>,
)