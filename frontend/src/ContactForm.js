import React, { useState } from 'react'
import { Tabs, Tab, Button, Dialog, DialogContent, TextField, Box } from '@mui/material'
import { IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import './css/ContactForm.css'

import { Icon, InlineIcon } from '@iconify/react'

import locationIcon from '@iconify/icons-mdi/map-marker-radius-outline'
import phoneIcon from '@iconify/icons-mdi/phone-outline'
import emailIcon from '@iconify/icons-mdi/email-multiple-outline'

import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'


function ContactForm () {
    const [formData, setFormData] = useState({ Name: '', Email: '', Message: '', Number: '' })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('https://www.downtownfnb.com/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                const result = await response.json()
                console.log('User data submitted successfully:', result)
                alert('User data submitted successfully')
            } else {
                console.error('Failed to submit user data:', response.statusText)
                console.log(response)
                alert('Failed to submit user data. Please try again.')
            }
        } catch (error) {
            console.error('Error submitting user data:', error.message)
            alert('Error submitting user data. Please try again.')
        }
    }

    const contactDetails = [
        {
            value: '7500A Beach Road #05-319 The Plaza Singapore 199591',
            icon: locationIcon,
        },
        { value: '+65 8198 7488', icon: phoneIcon },
        { value: 'ask@downtownfnb.com', icon: emailIcon },
    ]

    const renderContactDetails = () =>
        contactDetails.map(detail => (
            <p key={detail.value} className="info-detail">
                <InlineIcon icon={detail.icon} /> {detail.value}
            </p>
        ))

    const renderIcons = () =>
        [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
            <Icon icon={icon} key={key} className="info-icon" />
        ))


    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className="form-wrapper">
                <div className='leftcolumn'>
                    <h2 className="form-h2">Send us a message</h2>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        id="name"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        style={{ marginBottom: '20px', marginLeft: '10px' }}
                    />

                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        id="email"
                        name="Email"
                        type="email"
                        value={formData.Email}
                        onChange={handleChange}
                        style={{ marginBottom: '20px', marginLeft: '10px' }}
                    />

                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        id="phoneNumber"
                        name="Number"
                        type="tel"  // Set the type to "tel" for phone numbers
                        value={formData.Number}
                        onChange={handleChange}
                        style={{ marginBottom: '20px', marginLeft: '10px' }}
                        InputProps={{
                            inputMode: 'numeric',
                            pattern: '[0-9]*', // Allow only numeric input
                            step: 1, // Set the step to 1 to prevent decimal input
                        }}
                    />
                </div>

                <div className='middlecolumn'>
                    <TextField
                        label="Your Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={5}
                        margin="normal"
                        id="message"
                        name="Message"
                        value={formData.Message}
                        onChange={handleChange}
                        style={{ marginBottom: '50px', marginTop: "65px" }}
                    />

                    <Box display="flex" justifyContent="flex-end">
                        {/* <Icon className="form-submit" icon={sendCircle} onClick={handleSubmit} /> */}
                        <Button className="form-submit" sx={{ backgroundColor: '#ff914d', color: '#ffffff' }} variant="contained" endIcon={<SendIcon />} onClick={handleSubmit} >
                            Send
                        </Button>

                    </Box>
                </div>

                <div className='right-column'>

                    <section className="info">
                        <h2 className="info-h2">Contact information</h2>

                        <div className="info-details-container">{renderContactDetails()}</div>

                    </section>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
