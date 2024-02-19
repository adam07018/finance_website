import React, { useState } from 'react'
import { Tabs, Tab, Button, Dialog, DialogContent, TextField, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import './MainTab.css'
import ImageSlider from './ImageSlider'
import TimelineComponent from './TimelineComponent'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

const MainTab = () => {
    const [value, setValue] = useState(0)
    const [showContactForm, setShowContactForm] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleShowContactForm = () => {
        setShowContactForm(true)
        setValue(value)
    }

    const handleCloseContactForm = () => {
        setShowContactForm(false)
    }


    function AboutusNavbar () {
        return (
            <div className="navbar">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <div className="dropdown">
                    <button className="dropbtn">
                        Dropdown <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                style={{ marginTop: "-44px", }}
                aria-label="icon label tabs example"
                className="custom-tabs-container"
            >
                <Tab label="Home" style={{ fontSize: '16px', fontWeight: 'bold' }} className="custom-tab" onClick={() => handleChange(null, 0)} />
                <Tab label="About Us" style={{ fontSize: '16px', fontWeight: 'bold' }} className="custom-tab" onClick={() => handleChange(null, 1)} />
                <Tab label="Be Our Partner" style={{ fontSize: '16px', fontWeight: 'bold' }} className="custom-tab" onClick={() => handleChange(null, 2)} />
                <Tab label="Directory" style={{ fontSize: '16px', fontWeight: 'bold' }} className="custom-tab" />
                <Tab label="Media Centre" style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: "19%" }} className="custom-tab-MediaCentre" />
                <Tab label="Contact Us" style={{ fontSize: '16px', fontWeight: 'bold' }} className="custom-tab" />
                <Tab label="FAQ" style={{ fontSize: '16px', fontWeight: 'bold' }} className="custom-tab" />
                {/* <Tab
                    label="Contact Us"
                    className="custom-tab"
                    style={{ fontSize: '16px', fontWeight: 'bold' }}
                    onClick={handleShowContactForm} // Add onClick handler for this tab
                />          */}
            </Tabs>

            {/* Render ContactForm in a Dialog if showContactForm is true */}
            <Dialog open={showContactForm} onClose={handleCloseContactForm}>
                <DialogContent>
                    <ContactForm onClose={handleCloseContactForm} />
                </DialogContent>
            </Dialog>

            {/* Conditionally render ImageSlider and TimelineComponent */}
            {value === 0 /* "Home" tab */ && (
                <div>
                    <ImageSlider />
                    <TimelineComponent />
                </div>
            )}

            {value === 1 /* "About Us" tab */ && (
                <div>
                    <AboutUs />
                </div>
            )}

            {value == 5 /* "Contact Us" tab */ && (
                <div>
                    <ContactUs />
                </div>
            )}


        </div>
    )
}

function ContactForm ({ onClose }) {
    const [formData, setFormData] = useState({ Name: '', Email: '', Message: '', Number: '' })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('http://localhost:8000/api/users', {
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
                onClose() // Close the modal after submission
            } else {
                console.error('Failed to submit user data:', response.statusText)
                alert('Failed to submit user data. Please try again.')
            }
        } catch (error) {
            console.error('Error submitting user data:', error.message)
            alert('Error submitting user data. Please try again.')
        }
        onClose() // Close the modal after submission
    }

    const handleCancel = () => {
        onClose() // Close the modal without submitting
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                id="name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
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
                InputProps={{
                    inputMode: 'numeric',
                    pattern: '[0-9]*', // Allow only numeric input
                    step: 1, // Set the step to 1 to prevent decimal input
                }}
            />

            <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                id="message"
                name="Message"
                value={formData.Message}
                onChange={handleChange}
            />

            <Box display="flex" justifyContent="space-between">
                <Button variant="outlined" color="secondary" onClick={handleCancel}>
                    Cancel
                </Button>

                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </form>
    )
}

export default MainTab
