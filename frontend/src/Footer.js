import React from 'react'
import { ReactDOM } from 'react'
import './css/Footer.css'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <a href="/legal">Legal</a> |
                <a href="/terms">Terms & Conditions</a> |
                <a href="/privacy">Privacy Policy</a> |
                <SocialIcon url="https://www.facebook.com/downtownfnbgroup/" className="social-icon facebook" />
                <SocialIcon url="https://www.instagram.com/downtownfnbgroup/" className="social-icon instagram" />
                <SocialIcon url="https://www.tiktok.com/@downtownfnbgroup" className="social-icon tiktok" />
                <SocialIcon network='telegram' url="https://t.me/downtownfnbgroup" />
                <SocialIcon url="https://www.youtube.com/channel/UCRENbo8rdOha44DpGirT_CA" className="social-icon youtube" />
                {/* <a href="/linkedin" className="social-icon linkedin"></a> */}
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024 Downtown F&B Group. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
