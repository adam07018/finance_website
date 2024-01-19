import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
const NavigationBar = () => {
    const [tabValue, setTabValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
    }

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Your Website Name
                </Typography>

                {isMobile ? (
                    <>
                        <button onClick={handleMenuOpen}>Menu</button>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                            <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                                Home
                            </MenuItem>
                            <MenuItem component={Link} to="/tab1" onClick={handleMenuClose}>
                                Tab 1
                            </MenuItem>
                            <MenuItem component={Link} to="/tab2" onClick={handleMenuClose}>
                                Tab 2
                            </MenuItem>
                            <MenuItem component={Link} to="/tab3" onClick={handleMenuClose}>
                                Tab 3
                            </MenuItem>
                            <MenuItem component={Link} to="/tab4" onClick={handleMenuClose}>
                                Tab 4
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Tabs value={tabValue} onChange={handleTabChange} aria-label="navigation tabs">
                        <Tab label="Home" component={Link} to="/" />
                        <Tab label="Tab 1" component={Link} to="/tab1" />
                        <Tab label="Tab 2" component={Link} to="/tab2" />
                        <Tab label="Tab 3" component={Link} to="/tab3" />
                        <Tab label="Tab 4" component={Link} to="/tab4" />
                    </Tabs>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar
