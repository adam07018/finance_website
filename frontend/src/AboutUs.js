import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import './css/AboutUs.css'
import { textAlign } from '@mui/system'

function AboutUs () {
    return (
        <section id="about">
            <div className="about-1">
                <h1 style={{ textAlign: "center", fontSize: "60px", fontWeight: "bold" }}>About Us</h1>
                <p>It all started with the love of food!<br /><br />

                    In the year 1942, the founder of Downtown, a charismatic young man, was approached with an opportunity to learn the art of cooking prawn noodle soup. Without hesitation, he embraced the chance!<br /><br />

                    In just a month, he honed his skills under the guidance of his favorite uncle, who generously shared all his expertise in prawn noodle soup. The young man, already gifted in the culinary arts, quickly mastered the craft.<br /><br />

                    Soon, his prawn noodle soup stall, situated at Far East (where Dinbulah is now), became renowned for serving the most delicious prawn noodles. The stall drew crowds daily, with hundreds of people lining up to savor the famous dish. During the busiest lunch hours, the stall achieved a remarkable feat by serving up to 800 bowls!<br /><br />

                    He came from a humble background. That’s why he knows what it takes to start a business.  He wants to assist aspiring entrepreneurs in achieving greatness too in this food industry.<br /><br />
                </p>
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
                                    <h3>Motto</h3>
                                    <p>At Downtown we celebrate food! </p>
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
