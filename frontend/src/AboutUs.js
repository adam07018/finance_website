import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import './css/AboutUs.module.css'
import { textAlign } from '@mui/system'

function AboutUs () {
    return (
        <section id="about">
            <div className="about-1">
                <h1 style={{ textAlign: "center", fontSize: "60px", fontWeight: "bold" }}>About Us</h1>
                <p style={{ textAlign: "center", padding: "3px" }}>I am a software developer who is determined to teach as many people as possible how to code and learn general technological aspects of the current century. My approach towards it is that, I create a miniature version of already existing software that most people interact with in their daily lives. With these, am able to teach them how to make what they are already using. Your support is highly appreciated. Just modify this code to your preference</p>
            </div>
            <div className="about-2">
                <div className="content-box-large">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="about-item text-center">
                                    <i className="fa fa-book"></i>
                                    <h3>MISSION</h3>
                                    <p>To enable aspiring entrepreneurs towards success in a dynamic food industry </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about-item text-center">
                                    <i className="fa fa-globe"></i>
                                    <h3>VISION</h3>
                                    <p>To be the one stop hub in food franchise, that empowered aspiring entrepreneurs to build
                                        a successful F&B business, while offering fresh and tasty food with an exceptional experience.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about-item text-center">
                                    <i className="fa fa-book"></i>
                                    <h3>ACHIEVEMENTS</h3>
                                    <p>With these, am able to teach them how to make what they are already using. Your support is highly appreciated.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AboutUs
