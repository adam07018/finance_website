import React from 'react'
import ReactDOM from 'react-dom/client'
import DowntownTitle from './DowntownTitle'
import MainTab from './MainTab'
import './css/app-container.css'
import trademark from './images/trademark.jpeg'
import ImageSlider from './ImageSlider'
import Footer from './Footer'
import TimelineComponent from './TimelineComponent'
import logo from './images/logo.jpeg'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className='background'>
    <div className="app-container">
      <img src={logo} alt='logo' style={{ width: "1200px", height: "auto" }}/*style={{ width: "20%", height: "auto" }}*/ />
      <MainTab />
      <Footer />
    </div>
  </div>
);

