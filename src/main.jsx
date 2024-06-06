import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//import BrowserRouter dari react router
import { BrowserRouter } from 'react-router-dom';

//import RecoilRoot dari Recoil
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
)