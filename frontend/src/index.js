import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import DowntownTitle from './DowntownTitle'
import MainTab from './MainTab'
import './css/app-container.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className="app-container">
      <MainTab />
      <DowntownTitle />
    </div>
  </React.StrictMode>
);

