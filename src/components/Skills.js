import React, { useState, useEffect } from "react";
import SkillsRadarChart from "./SkillsRadarChart";
import "./css/Skills.css";
import { Tabs, Tab, Paper } from '@mui/material';
import {getUniqueElements} from "../api/skills";

const Skills = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [uniqueElements, setUniqueElements] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const data = await getUniqueElements();
        setUniqueElements(data);
        } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error as needed
        }   
    };
    fetchData();
    }, []);

    // console.log(uniqueElements)

    const handleTabChange = (e, val) => {
        setActiveTab(val);
    };
    return (
        <div>
            <div className="skills">
                <h1>Skills</h1>
                <div className="skills_container">
                    <div className="graph">
                        <SkillsRadarChart />
                    </div>
                    <div className="skills-list">
                        {/* Use Material UI https://mui.com/material-ui/getting-started/installation/ */}
                        {/* https://medium.com/front-end-weekly/react-user-experience-tactics-placeholder-loading-content-fb734da0f9ae */}
                        <Paper className="panel">
                            <Tabs
                                value={activeTab}
                                onChange={handleTabChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab label="Management" />
                                <Tab label="Technical" />
                                <Tab label="Problem-Solving" />
                                <Tab label="Soft" />
                                <Tab label="Others" />
                            </Tabs>
                            <div className="skills-list-container">
                                {activeTab === 0 && (
                                    <div className="skills-list-content">
                                        
                                            <ul id="proficient-list">
                                            <span>Proficient</span>
                                            {
                                                uniqueElements && Object.values(uniqueElements).filter(({Type, Expertise}) => Type === "Management" && Expertise === "Proficient").map(({Name}) => <li>{Name}</li>)     
                                            }
                                            </ul>
                                            <ul id="advanced-list">
                                            <span>Advanced</span>
                                            {
                                                uniqueElements && Object.values(uniqueElements).filter(({Type, Expertise}) => Type === "Management" && Expertise === "Advanced").map(({Name}) => <li>{Name}</li>)     
                                            }
                                            </ul>
                                            <ul id="intermediate-list">
                                            <span>Intermediate</span>
                                            {
                                                uniqueElements && Object.values(uniqueElements).filter(({Type, Expertise}) => Type === "Management" && Expertise === "Intermediate").map(({Name}) => <li>{Name}</li>)     
                                            }
                                            </ul>
                                            <ul id="basic-list">
                                            <span>Basic</span>
                                            {
                                                // filter ONLY 5 random elements from the array on the basic Expertise
                                                uniqueElements && Object.values(uniqueElements).filter(({Type, Expertise}) => Type === "Management" && Expertise === "Basic").map(({Name}) => <li>{Name}</li>) 
                                            }
                                            </ul>
                                    </div>
                                )}
                                {activeTab === 1 && (
                                    <div className="skills-list-content">
                                        <ul>
                                            {
                                                uniqueElements && Object.values(uniqueElements).filter(({Type}) => Type === "Techinical").map(({Name}) => <li>{Name}</li>)
                                                
                                            }
                                        </ul>
                                    </div>
                                )}
                                {activeTab === 2 && (
                                    <div className="skills-list-content">
                                        <ul>
                                            {
                                                uniqueElements && Object.values(uniqueElements).filter(({Type}) => Type === "Problem-solving").map(({Name}) => <li>{Name}</li>)
                                            }
                                        </ul>
                                    </div>
                                )}
                                {activeTab === 3 && (
                                    <div className="skills-list-content">
                                        <ul>
                                            {
                                                uniqueElements && Object.values(uniqueElements).filter(({Type}) => Type === "Soft").map(({Name}) => <li>{Name}</li>)
                                            
                                            }
                                        </ul>
                                    </div>
                                )}
                                {activeTab === 4 && (
                                    <div className="skills-list-content">
                                        <ul>
                                            {
                                                uniqueElements && Object.values(uniqueElements).filter(({Type}) => Type === "Other").map(({Name}) => <li>{Name}</li>)
                                            
                                            }
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <button className="skills-button">View All</button>
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;