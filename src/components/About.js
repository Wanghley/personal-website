import React from 'react'
import about_photo from '../assets/about.jpg'
import './css/About.css'

const About = () => {
    return(
            <div className='about'>
                <div className='about-text'>
                    <h1 className='about-title'>About Me</h1>
                    <h2 className='about-subtitle'>A very curious, problem-driven, and inventive guy solving real-world problems and discovering the world through multi-faceted lens.</h2>
                    <img src={about_photo} alt='Wanghley' className='about-photo-mobile'/>
                    <p className='about-paragraph'>An engineering student at Duke University in the Pratt School of Engineering in the class of 2026, Wanghley, a native of Brasília, DF, Brazil, is passionate about the union of computer science, electrical/biomedical engineering and quantum computing for the development of health tech solutions.</p>
                    <p className='about-paragraph'>Wanghley is a computer technician graduated from the Federal Institute of Education, Science, and Technology of Brasilia; a social entrepreneur from the Watson Institute Semester Accelerator Fall 2021 in Boulder, Colorado, USA; a data scientist and analyst; and a developer of expert systems. He developed a frequency system using computer vision and, mainly, an end-to-end system for the diagnosis and prognosis of neurodegenerative diseases. Working mainly in artificial intelligence and wearable technologies aimed at the health area.</p>
                    <p className='about-paragraph'>Multi-award winner and present in several Brazilian and international science and engineering events/competitions. Selected also as one of the 4 young inventors by the Brazilian Ministry of Science, Technology, and Innovation in the international cooperation BRICS YSF in Bangaluru, India in 2021, besides presence in the National Youth Science Camp and Regeneron ISEF.</p>
                    <button className='secondary-button about-button'>Know me more</button>
                </div>
                <div className='about-image'>
                    <img src={about_photo} alt='Wanghley'/>
                </div>
            </div>
    )
}

export default About