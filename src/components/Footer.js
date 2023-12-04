import React from "react";
import logo from "../assets/logo-colorful.png"
import "./css/Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer_text">
            <img src={logo} alt="logo" className="footer_text_logo"/>
            <p className="footer__text--p">
            &copy; {new Date().getFullYear()} Wanghley Soares Martins. All rights reserved.
            </p>
        </div>
        </footer>
    );
}

export default Footer;