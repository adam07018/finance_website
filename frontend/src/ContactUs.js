import React from 'react'

import Map from './Map'
import ContactForm from './ContactForm'

import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'

const Intro = () => (
    <div className="intro-container">
        <h2 className="intro-h2">Our Mission</h2>

        <p className="intro-p">
            Every single person who understands the impact of the web should be an
            advocate and strive for a better, more inclusive web for all.
        </p>
    </div>
)


const location = {
    address: '7500A Beach Road #05-319 The Plaza',
    lat: 1.302030,
    lng: 103.862991,
}
const ContactUs = () => (
    <div className="ContactUs">
        <Intro />
        <ContactForm />
        <Map location={location} zoomLevel={17} />
    </div>
)

export default ContactUs