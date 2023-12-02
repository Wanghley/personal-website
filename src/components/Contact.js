import React from 'react'
import './css/Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact_text'>
                <h1 className='title'>Let's dive into something <span>EPIC</span> together:<br/></h1>
                <h2 className='subtitle'>connect and let's conquer the <span>Awesome</span>!</h2>
                <ul className='contact_list'>
                    <li className='contact_item'>
                        <FontAwesomeIcon icon={faEnvelope} className='contact__icon' />
                        <a href='mailto:me@wanghley.com' className='contact__link'>me@wanghley.com</a>
                    </li>
                    <li className='contact__item active'>
                        <FontAwesomeIcon icon={faPhone} className='contact__icon' />
                        <a href='https://wa.me/19843120046' className='contact__link'>+1 984 312 0046</a>
                    </li>
                    <li className='contact__item'>
                        <FontAwesomeIcon icon={faLocationDot} className='contact__icon' />
                        <a href='https://wa.me/19843120046' className='contact__link'>All over the world, but living in Durham, NC, USA now</a>
                    </li>
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
                <form action='https://formspree.io/f/mrgoqzjv' method='POST'>
                    <input type='text' name='name' placeholder='Your name' className='contact__input' />
                    <input type='email' name='email' placeholder='Your e-mail' className='contact__input' />
                    <textarea name='message' placeholder='Your message' className='contact__input contact__input--textarea'></textarea>
                    <div className='contact_button'>
                        <FontAwesomeIcon icon={faPaperPlane} className='contact__icon' />
                        <input type='submit' value='Send' className='contact__input contact__input--submit' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact