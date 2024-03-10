import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
// import axios
import {fetchProjects} from '../api/projects';
import ProjectCard from '../components/projects/projectCard';
 
const Projects = (props) => {
    const [data, setData] = useState(null);
    const [showMore, setShowMore] = useState(false);

    // get all projects from the api cms.wanghley.com/projects from strapi using axios
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchProjects();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
                // TODO: Handle the error as needed
            }   
        };
        fetchData();
    }, []);

    return (
        <>
        <h1>Projects</h1>
        <p>Here are some of the projects I have worked on</p>
        {data
        ? (
            <Container>
                <Row>
                    {data.map((project) => (
                        <ProjectCard />
                    ))}
                </Row>
                <Button onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Show More'}</Button>
            </Container>
        ) : ( <p>Loading...</p> )}
        </>
    );
};

export default Projects;

// https://github.com/mayankagarwal09/dev-portfolio/blob/master/src/components/Projects.jsx