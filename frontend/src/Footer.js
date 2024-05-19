import React from 'react'
import { ReactDOM } from 'react'
import './css/Footer.css'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <footer className="footer" >
            <div className="footer-top">
                <a href="/legal">Terms & Conditions</a> |
                {/* <a href="/terms">Privacy Policy</a> |
                <a href="/privacy">Fair Dealing Commitment</a> |
                <a href="/cookies">Compliance with Tax Requirements</a> | */}
                <SocialIcon url="https://www.facebook.com/downtownfnbgroup/" className="social-icon" style={{ width: "2rem", height: "2rem" }} />
                <SocialIcon url="https://www.instagram.com/downtownfnbgroup/" className="social-icon instagram" style={{ width: "2rem", height: "2rem" }} />
                <SocialIcon url="https://www.tiktok.com/@downtownfnbgroup" className="social-icon tiktok" style={{ width: "2rem", height: "2rem" }} />
                <SocialIcon network='telegram' url="https://t.me/downtownfnbgroup" style={{ width: "2rem", height: "2rem" }} />
                <SocialIcon url="https://www.youtube.com/channel/UCRENbo8rdOha44DpGirT_CA" className="social-icon youtube" style={{ width: "2rem", height: "2rem" }} />
                <SocialIcon url="https://www.linkedin.com/company/downtownfnbgroup/" className="social-icon linkedin" style={{ width: "2rem", height: "2rem" }} />
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024 Downtown F&B Group. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
