import React from 'react'

import Map from './Map'
import ContactForm from './ContactForm'

import './css/ContactUs.css'

const Intro = () => (
    <div className="intro-container">
        <h2 className="intro-h2">Our Mission</h2>

        <p className="intro-p">
            To enable aspiring entrepreneurs towards success in a dynamic food industry

        </p>
    </div>
)

const styles = {
    container: {
        position: 'relative',
        minHeight: '400px', // Adding minHeight to ensure container has height
    },
    intro: {
        zIndex: 1,
    },
    contactForm: {
        position: 'absolute',
        top: '20%', // Adjust this value to move the ContactForm up or down
        left: '50%',
        transform: 'translate(-50%, -50%)', // Centering horizontally and vertically
        zIndex: 2,
    },
}


const location = {
    address: '7500A Beach Road #05-319 The Plaza',
    lat: 1.302030,
    lng: 103.862991,
}
const ContactUs = () => (
    <div style={styles.container}>
        <Intro style={styles.intro} />
        <ContactForm style={styles.contactForm} />
        <h4 style={{ textAlign: "center", color: "black", marginBottom: "20px" }}>COME VISIT OUR RESTARUANT</h4>

        <Map location={location} zoomLevel={17} />
    </div >
)

export default ContactUs