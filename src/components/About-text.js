import fetchAbout from '../api/about'
import {useState, useEffect} from 'react'
import { BlocksRenderer} from '@strapi/blocks-react-renderer';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import './css/About.css'
import style from './css/markdown-styles.module.css'

const AboutText = () => {
    const [about, setAbout] = useState(null);

    const getAbout = async () => {
        try {
            const data = await fetchAbout();
            setAbout(data.data.attributes.about);
            console.log(data.data.attributes.about);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error as needed
        }
    }

    useEffect(() => {
        getAbout();
    }, []);

    return (
            // https://www.copycat.dev/blog/react-markdown/
            <ReactMarkdown
            remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
            className={style.ReactMarkdown}


            >{about}</ReactMarkdown>
    );
}

export default AboutText;