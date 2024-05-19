import React from 'react'
import {
    CCard,
    CCardBody,
    CCardImage,
    CCardText,
    CCardTitle,
    CCol,
    CRow
} from '@coreui/react'
import './css/MainPageCard.css'
import timeline1 from './images/timeline1.jpeg'
import timeline2 from './images/timeline2.jpeg'
import timeline3 from './images/timeline3.jpeg'
import timeline4 from './images/timeline4.jpeg'
import linebreak from './images/linebreak.jpeg'

const MainPageCard = () => {
    return (
        <div >
            <div className="d-flex justify-content-center">
                <CCard className="mb-3" style={{ maxWidth: '80%', marginBottom: '5vh' }}>
                    <CRow className="g-0">
                        <CCol md={4}>
                            <CCardImage src={timeline1} className="full-width-image" />
                        </CCol>
                        <CCol md={8}>
                            <CCardBody>
                                <CCardTitle>Be Our Partner</CCardTitle>
                                <CCardText>
                                    Join the Downtown F&B family and embark on an exciting journey as a franchise owner! As a leader in the food and beverage industry, we are proud to offer individuals the opportunity to own and operate their own Downtown restaurant franchise.
                                </CCardText>
                            </CCardBody>
                        </CCol>
                    </CRow>
                </CCard>
            </div>
            <img src={linebreak} alt="linebreak" style={{ width: "100%", height: '10vh' }} />
            <div className="d-flex justify-content-center">
                <CCard className="mb-3" style={{ maxWidth: '80%', marginBottom: '5vh' }}>
                    <CRow className="g-0">
                        <CCol md={8}>
                            <CCardBody>
                                <CCardTitle>Take a Tour of Our Outlet</CCardTitle>
                                <CCardText>
                                    Step inside the world of Downtown F&B and experience our inviting and vibrant cafe atmosphere firsthand. Take a virtual tour of our outlet to get a sneak peek at what awaits you when you visit one of our locations.
                                </CCardText>
                            </CCardBody>
                        </CCol>
                        <CCol md={4}>
                            <CCardImage src={timeline2} className="full-width-image" />
                        </CCol>
                    </CRow>
                </CCard>
            </div>
            <img src={linebreak} alt="linebreak" style={{ width: "100%", height: '10vh' }} />
            <div className="d-flex justify-content-center">
                <CCard className="mb-3" style={{ maxWidth: '80%', marginBottom: '5vh' }}>
                    <CRow className="g-0">
                        <CCol md={4}>
                            <CCardImage src={timeline3} className="full-width-image" />
                        </CCol>
                        <CCol md={8}>
                            <CCardBody>
                                <CCardTitle>Peek Inside Our Central Kitchen</CCardTitle>
                                <CCardText>
                                    Step into our kitchen and discover a world of fresh ingredients, innovative recipes, and expert techniques. Our team of talented chefs and culinary experts is dedicated to creating dishes that not only tantalize the taste buds but also nourish the soul.
                                </CCardText>
                            </CCardBody>
                        </CCol>
                    </CRow>
                </CCard>
            </div>
            <img src={linebreak} alt="linebreak" style={{ width: "100%", height: '10vh' }} />
            <div className="d-flex justify-content-center">
                <CCard className="mb-3" style={{ maxWidth: '80%', marginBottom: '5vh' }}>
                    <CRow className="g-0">
                        <CCol md={8}>
                            <CCardBody>
                                <CCardTitle>Research & Development</CCardTitle>
                                <CCardText>
                                    Our R&D team is adept at navigating the ever-changing food and beverage landscape, swiftly responding to evolving consumer tastes, emerging trends, and technological advancements.
                                </CCardText>
                            </CCardBody>
                        </CCol>
                        <CCol md={4}>
                            <CCardImage src={timeline4} className="full-width-image" />
                        </CCol>
                    </CRow>
                </CCard>
            </div>

        </div >
    )
}

export default MainPageCard
