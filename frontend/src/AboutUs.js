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

                    The fire hissed and cracked as the wood burned in an old brick stove, brewing a large soot covered pot as an old lady toiled in perspiration.  The morning was still in darkness as she filled 2 straw baskets with her fare and began her slow track from the beaten path of Potong Pasir to downtown.
                    <br /><br />

                    It was 1953, just 7 years after the Japanese occupation of Singapore had ended but still fresh in the minds of the people as they struggled to recover.
                    <br /><br />

                    By the time she reached the wharves of the Singapore river to find her spot to peddle her prawn noodles, it was already bright and sunny. Coolies carrying gunny sacks of goods were unloading the Tongkangs as the opium dens fumed and children were plunging into the river to bathe and play.
                    <br /><br />

                    Life got better and by the time she was no longer able to bear the daily routine, she had many regular customers and was fondly referred to as the ‘Main road prawn noodles’ or Tua Lor Hei Mee in Hokien dialect, which the main thoroughfare above the steps from the river was called.
                    <br /><br />

                    The recipe was subsequently handed down to her son in law who sold the same prawn noodles in the  now demolished Jalan Bahagia Market for another 20 odd years.
                    <br /><br />

                    This recipe was then handed over to his nephew in 2002, who set up Talu Prawn Noodles in a small shop in Telok Kurau for 2 years and later relocated to Far East Square in Pekin Street for another 5 years, before it was sold to one of the sibling of Hougang Porridge.
                    <br /><br />

                    By that time, each lunch saw servings of more than 800 bowls a day and a survey recorded more than 300,000 regulars in the CBD Downtown area alone.
                    <br /><br />

                    Now after nearly 2 decades, this recipe is being resurrected by the family for the new food & beverage group, DOWNTOWN.
                    <br /><br />
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
