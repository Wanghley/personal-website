import React from 'react'
import './css/Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact__text'>
                <h1 className='title'>Let's Dive into Something EPIC Together:<br/>Connect and Conquer the <span>Awesome</span>!</h1>
                <ul className='contact__list'>
                    <li className='contact__item'>
                        <FontAwesomeIcon icon={faEnvelope} className='contact__icon' />
                        <a href='mailto:me@wanghley.com' className='contact__link'>me@wanghley.com</a>
                    </li>
                    <li className='contact__item'>
                        <FontAwesomeIcon icon={faPhone} className='contact__icon' />
                        <a href='https://wa.me/19843120046' className='contact__link'>+1 984 312 0046</a>
                    </li>
                    <li className='contact__item'>
                        <FontAwesomeIcon icon={faLocationDot} className='contact__icon' />
                        <a href='https://wa.me/19843120046' className='contact__link'>All over the world, but living in Durham, NC, USA now</a>
                    </li>
                </ul>
            </div>
            <div className='contact__form'>
                <form action='https://formspree.io/f/mrgoqzjv' method='POST'>
                    <input type='text' name='name' placeholder='Name' className='contact__input' />
                    <input type='email' name='email' placeholder='Email' className='contact__input' />
                    <textarea name='message' placeholder='Message' className='contact__input contact__input--textarea'></textarea>
                    <input type='submit' value='Send' className='contact__input contact__input--submit' />
                </form>
            </div>
        </div>
    )
}

export default Contact