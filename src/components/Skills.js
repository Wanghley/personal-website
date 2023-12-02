import React from "react";
import SkillsRadarChart from "./SkillsRadarChart";
import "./css/Skills.css";

const Skills = () => {
    return (
        <div>
            <div className="skills">
                <h1>Skills</h1>
                <div className="graph">
                    <SkillsRadarChart />
                </div>
                <div className="skills-list">
                    </div>
            </div>
        </div>
    )
};

export default Skills;