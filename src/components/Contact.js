import React from 'react'
import './css/Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faPaperPlane, faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        alert("Your message has been sent!");
        console.log(process.env.REACT_APP_emailjs_service_id);
        emailjs.sendForm(process.env.REACT_APP_emailjs_service_id, process.env.REACT_APP_emailjs_template_id, e.target, process.env.REACT_APP_emailjs_public_key);
    }

    return (
        <div className='contact' id="contactme">
            <div className='contact_text'>
                <h1 className='title'>Let's dive into something <span>EPIC</span> together:<br/></h1>
                <h2 className='subtitle'>connect and let's conquer the<span> Awesome</span>!</h2>
                <ul className='contact_list'>
                <a href='mailto:me@wanghley.com' className='contact__link'><li className='contact_item'>
                        <FontAwesomeIcon icon={faEnvelope} className='contact__icon' />
                        <span>me@wanghley.com</span>
                    </li></a>
                    <a href='https://wa.me/19843120046' className='contact__link'><li className='contact__item active'>
                        <FontAwesomeIcon icon={faPhone} className='contact__icon' />
                        <span>+1 984 312 0046</span>
                    </li></a>
                    <a href='https://cal.com/wanghley' rel="noreferrer" target='_blank' className='contact__link'><li className='contact__item'>
                        <FontAwesomeIcon icon={faHandshakeSimple} className='contact__icon' />
                        <span>Schedule a call now!</span>
                    </li></a>
                    <a><li className='contact__item'>
                        <FontAwesomeIcon icon={faLocationDot} className='contact__icon' />
                        <span>All over the world, but living in Durham, NC, USA now</span>
                    </li></a>
                </ul>
                <ul className='social_media'>
                    <li className='social_item'>
                        <a href='https://www.linkedin.com/in/wanghley/' className='social__link'><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>   
                    <li className='social__item'>
                        <a href='https://www.instagram.com/wanghley/' className='social__link'><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                    <li className='social__item'>
                        <a href='https://github.com/wanghley'><FontAwesomeIcon icon={faGithub}/></a>
                    </li>
                </ul>
            </div>
            <div className='contact_form'>
                <form onSubmit={sendEmail}>
                    <input type='text' name='from_name' placeholder='Your name' className='contact__input' />
                    <input type='email' name='email_from' placeholder='Your e-mail' className='contact__input' />
                    <textarea name='message' placeholder='Your message' className='contact__input contact__input--textarea'></textarea>
                    <button type='submit' className='contact_button'><FontAwesomeIcon icon={faPaperPlane} className='contact__icon' />Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact