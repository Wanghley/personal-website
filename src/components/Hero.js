import React from 'react'
import { useRef } from 'react'
import './css/Hero.css'

const Hero = () => {
    function onClickHeaderItem(sectionId){
        // make smooth scroll to the section
        document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="hero">
            <div className='spacer'><span></span></div>
            <div className='text'>
                <h1 className="hero-title">I’M WANGHLEY</h1>
                <h2 className="hero-subtitle">ASPIRANT ENGINEER. ENTREPRENEUR. SCIENTIST. DEVELOPER.</h2>
                <p className='hero-paragraph'>Problem-solver. Computer Technician. Young Scientist. Fullstack Developer. Data Scientist. Data Analyst. Artificial Intelligence Developer. Quantum Computing Developer. DevOps. Social Entrepreneur. Speaker. Mentor.</p>
                <div className='hero-buttons'>
                    <button className='hero-button' onClick={() => onClickHeaderItem('contactme')}>HIRE ME!</button>
                    <button className='hero-button secondary'>Download CV</button>
                <div/>
            </div>
        </div>
        </div>
    )
}

export default Hero