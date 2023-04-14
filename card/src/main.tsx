import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App'
import Page02 from './pages/page02';

import "./styles/global.css";
import Page03 from './pages/page03';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Page02 />
    <Page03 />
  </React.StrictMode>,
)
