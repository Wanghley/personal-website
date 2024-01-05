import React, { useState, useEffect } from 'react'
import about_photo from '../assets/about.jpg'
import fetchTimeline from '../api/timeline'
import { Timeline} from 'rsuite';
import './css/About.css'

const About = () => {
    const [timeline, setTimeline] = useState(null);
    const getTimeline = async () => {
        try {
            const data = await fetchTimeline();
            setTimeline(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error as needed
        }
    };
    useEffect(() => {
        getTimeline();
    }, []);
    
    return(
            <div className='about'>
                <div className='about-text'>
                    <h1 className='about-title'>About Me</h1>
                    <h2 className='about-subtitle'>🎼 A Maestro of Curiosity 🚀 Crafting Tomorrow's Tech Marvels 🌟 One Ingenious Solution at a Time ⚙️ Shaping the Future, and Beyond! 🚀🔮</h2>
                    <img src={about_photo} alt='Wanghley' className='about-photo-mobile lazyload'/>

                    <p className='about-paragraph'>Wanghley is a relentless <strong>tech wizard</strong> rooted in the heart of Brasília, Brazil, and with an unconventional childhood spent on a pig farm 🐷. Now a dynamic aspirant <u>electrical and computer engineer</u> at Duke University, Wanghley is a <strong>curious problem-solver</strong> weaving his journey through computer science, electrical/biomedical engineering, and quantum computing.</p>

                    <p className='about-paragraph'>A <strong>Karsh Scholar @ Duke</strong> and a <strong>Líder Estudar Fellow @ Fundação Estudar</strong>, is not defined by accolades but by a mission. His toolbox? a blend of technical, management, soft skills – a symphony of skills cultivated in the pig farm and refined in the world of <u>science, engineering, and technology</u>.</p>

                    <p className='about-paragraph'>Beyond algorithms and circuits, he's a <strong>social entrepreneur</strong> with a flair for data science, a knack for innovation, and a passion for health tech. His projects include a frequency system with computer vision and a groundbreaking end-to-end solution for neurodegenerative diseases. These aren't just innovations; they're the echoes of a journey from pigsty to tech excellence.</p>

                    <p className='about-paragraph'>Wanghley's narrative is a fusion of relentless ambition, a commitment to societal impact, and the magic of a pig farm childhood. Each breakthrough is not just a tech triumph; it's a promise of a future where his roots and wings coalesce into a story of <b>passion, problem-solving, and profound innovation</b>.</p>


                    <button className='secondary-button about-button'>Know me more</button>
                </div>
                <div className='about-image'>
                    <img src={about_photo} className='lazyload' alt='Wanghley'/>
                </div>
            </div>
    )
}

export default About