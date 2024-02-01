import React, { useState, useEffect } from 'react'
import './css/ImageSlider.css' // Make sure to adjust the CSS import based on your project structure
import Slideshow_1 from './images/trademark.jpeg'
import Slideshow_2 from './images/Slideshow_1.jpeg'
import Slideshow_3 from './images/Slideshow_2.jpeg'
import Slideshow_4 from './images/Slideshow_3.jpeg'
import news_1 from './images/news1.jpeg'
import news_2 from './images/news2.jpeg'
import news_3 from './images/news3.jpeg'

const ImageSlider = () => {
    const [counter, setCounter] = useState(1)

    let intervalId

    const changeImage = (newCounter) => {
        clearInterval(intervalId) // Clear existing interval
        setCounter(() => newCounter) // Set the new counter value
    }

    useEffect(() => {
        intervalId = setInterval(() => {
            document.getElementById('radio' + counter).checked = true
            setCounter((prevCounter) => (prevCounter % 4) + 1)
        }, 6000)

        return () => {
            clearInterval(intervalId)
        }
    }, [counter])

    return (
        <div className="slider">
            <div className="slides">
                {/* radio button start */}
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />
                {/* radio button end */}
                {/* slide image start */}
                <div className="slide first">
                    <img src={news_1} alt="" />
                </div>
                <div className="slide">
                    <img src={news_2} alt="" />
                </div>
                <div className="slide">
                    <img src={news_3} alt="" />
                </div>
                <div className="slide">
                    <img src={Slideshow_4} alt="" />
                </div>
                {/* slide image end */}
                {/* automatic navigation start */}
                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                </div>
                {/* automatic navigation end */}
            </div>
            {/* manual navigation start */}
            <div className="navigation-manual">
                <label htmlFor="radio1" className="manual-btn" onClick={() => changeImage(1)} ></label>
                <label htmlFor="radio2" className="manual-btn" onClick={() => changeImage(2)}></label>
                <label htmlFor="radio3" className="manual-btn" onClick={() => changeImage(3)}></label>
                <label htmlFor="radio4" className="manual-btn" onClick={() => changeImage(4)}></label>
            </div>
            {/* manual navigation end */}
        </div >


    )
}

export default ImageSlider
