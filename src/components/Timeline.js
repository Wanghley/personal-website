import React, { useState, useEffect } from 'react'
import fetchTimeline from '../api/timeline'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'; // import the renderer
import { Timeline} from 'rsuite';
import './css/Timeline.css'


const TimeLine = () => {
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
        <div className='Timeline'>
        <h1 className='Timeline-title'>Professional and personal career</h1>
        <h2>In the reality of my journey, I've faced pitfalls and stumbled through shadows, yet it's within those very struggles that the authenticity of my resilience emerges, painting a canvas of true strength.</h2>
        <div className='Timeline-container'>
            <Timeline endless>
                {/* insert all elements names from timeline data to Timeline.Item object */}
                
                    {timeline && timeline.map((element) => {
                        console.log(element.attributes.Name)
                        return(
                            <Timeline.Item className='timeline-item'>{element.attributes.Year} <BlocksRenderer content={element.attributes.Name} /></Timeline.Item>
                        )    
                    })}
            </Timeline>
        </div>
    </div>
    )
}

export default TimeLine