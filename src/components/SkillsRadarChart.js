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

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const SKillRadarChart = () => {
    const [chart, setChart] = useState([]);
    var baseURL = 'https://cms.wanghley.com/api/skills'
    useEffect(() => {
        const getSkills = async () => {
            await fetch(baseURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    
                }
            }).then((response) => {
                // Code to handle response
                response.json().then((json) => {
                    // console.log(json.data);
                    setChart(json.data);
                    // console.log(chart);
                });
            }).catch((error) => {
                console.log(error);
            });
        }
        getSkills();
    }, [baseURL,]);

const typeCounts = {};

// Iterate over the array
chart.forEach(item => {
  const type = item.attributes.Type;

  // Check if the type is already in the counts object
  if (typeCounts[type]) {
    // Increment the count if it exists
    typeCounts[type]++;
  } else {
    // Initialize the count to 1 if it doesn't exist
    typeCounts[type] = 1;
  }
});

// sum of numerical values in the typeCounts
const sum = Object.values(typeCounts).reduce((a, b) => a + b);
// calculate the percentage of each type
const percentages = Object.values(typeCounts).map(count => count / sum * 100);

var data = {
    labels: [...new Set(chart.map(item => item.attributes.Type))],
    datasets: [{
        data: percentages,
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