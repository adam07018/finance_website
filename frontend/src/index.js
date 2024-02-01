import React from 'react'
import ReactDOM from 'react-dom/client'
import DowntownTitle from './DowntownTitle'
import MainTab from './MainTab'
import './css/app-container.css'
import trademark from './images/trademark.jpeg'
import ImageSlider from './ImageSlider'
import Footer from './Footer'
import TimelineComponent
  from './TimelineComponent'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className="app-container">
    <img src={trademark} alt='logo' style={{ width: "20%", height: "auto" }} />
    <MainTab />
    <DowntownTitle />
    <ImageSlider />
    <TimelineComponent />
    <Footer />
  </div>
);

