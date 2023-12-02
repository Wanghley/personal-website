import React, { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const SKillRadarChart = () => {
    const [chart, setChart] = useState(null);
    var baseURL = 'https://cms.wanghley.com/api/skills'

    useEffect(() => {
        axios.get(baseURL)
            .then(function (response) {
                // console.log(response.data)
                setChart(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [baseURL,]);

    if (!chart) return null;

    // Map proficiency levels to numerical values
    const proficiencyMapping = {
        "Basic": 1,
        "Intermediate": 2,
        "Advanced": 3,
        "Proeficient": 4,  // Note: Correct the typo in the dataset
    };
    
    // count by type
    // Initialize an object to store counts by type
    const countsByType = {};
    // Iterate over the chart data
    const countsByTypeAndProficiency = {};
    // Iterate over the chart data
    // console.log(chart)

    // iterate over each element on the chart
    console.log(chart)
    chart.data.forEach(element => {
        const type = element.attributes.Type;
        const proficiency = element.attributes.Expertise;
        const proficiencyValue = proficiencyMapping[proficiency];

        if(!countsByTypeAndProficiency[type]) {
            countsByTypeAndProficiency[type] = {};
        }
        if(countsByTypeAndProficiency[type][proficiency] === undefined) {
            countsByTypeAndProficiency[type][proficiency] = 1;
        }else{
            countsByTypeAndProficiency[type][proficiency] += 1;
        }
    });

    console.log(countsByTypeAndProficiency)

    // Count by type and proficiency level
    // Initialize an object to store counts by type and proficiency level
    

    


    var data = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: 'rgba(58, 175, 241, 0.3)',
            borderColor: 'rgba(58, 175, 241, 1)',
            borderWidth: 1.5,
            pointRadius: 2,
            pointBackgroundColor: 'rgba(58, 175, 241, 1)',
        }]
    }

    var options = {
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 50,
                suggestedMax: 100
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    };

    return (
        <div>
            <Radar
                data={data}
                options={options}
            />
        </div>
    )
}

export default SKillRadarChart;