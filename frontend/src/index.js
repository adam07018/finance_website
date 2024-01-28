import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import DowntownTitle from './DowntownTitle'
import MainTab from './MainTab'
import './css/app-container.css'
import trademark from './images/trademark.jpeg'
import ImageSlider from './ImageSlider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className="app-container">
    <img src={trademark} alt='logo' style={{ width: '200px', height: '100px' }} />
    <MainTab />
    <DowntownTitle />
    <ImageSlider />
  </div>
);

