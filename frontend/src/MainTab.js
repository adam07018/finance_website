import React, { useState } from 'react'
import { Tabs, Tab, Button, Dialog, DialogContent, TextField, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import './MainTab.css' // Import the custom CSS file

const MainTab = () => {
    const [value, setValue] = useState(0)
    const [showContactForm, setShowContactForm] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleShowContactForm = () => {
        setShowContactForm(true)
    }

    const handleCloseContactForm = () => {
        setShowContactForm(false)
    }

    const handleShowFormForPartnership = () => {
        // Show the contact form for Partnership & Collaboration
        setValue(1) // Set the value to the index of the "Partnership & Collaboration" tab
        setShowContactForm(true)
    }

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example"
                className="custom-tabs-container"
            >
                <Tab icon={<HomeIcon />} label="HomePage" className="custom-tab" />
                <Tab
                    icon={<PersonAddIcon />}
                    label="Partnership & Collaboration"
                    className="custom-tab"
                    onClick={handleShowFormForPartnership} // Add onClick handler for this tab
                />
                <Tab icon={<HelpCenterIcon />} label="Q&A" className="custom-tab" />
                <Tab icon={<PersonPinIcon />} label="About Us" className="custom-tab" />
            </Tabs>


            {/* Render ContactForm in a Dialog if showContactForm is true */}
            <Dialog open={showContactForm} onClose={handleCloseContactForm}>
                <DialogContent>
                    <ContactForm onClose={handleCloseContactForm} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

function ContactForm ({ onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', number: '' })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}, Number: ${formData.number}`)
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
                name="name"
                value={formData.name}
                onChange={handleChange}
            />

            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
            />

            <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                id="phoneNumber"
                name="phoneNumber"
                type="tel"  // Set the type to "tel" for phone numbers
                value={formData.phoneNumber}
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
                name="message"
                value={formData.message}
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
