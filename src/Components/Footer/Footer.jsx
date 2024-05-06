import React from 'react'
import './Footer.css'

import footer_logo from '../Assets/logo_1.jpg'
import instagram_icon from '../Assets/instagram.png'
import pintester_icon from '../Assets/pinterest.png'
import whatsapp_icon from '../Assets/whatsapp.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img className='footer_icons' src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img className='footer_icons' src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img className='footer_icons' src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img className='footer_icons' src={whatsapp_icon} alt="" />
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    )
}
