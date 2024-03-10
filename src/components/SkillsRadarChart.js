import React, { useState, useEffect, useRef } from "react";
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
import {getUniqueElements} from "../api/skills";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const SKillRadarChart = () => {
    
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
  }, []); // Empty dependency array to trigger the effect only once
    console.log(uniqueElements)
    if (!uniqueElements) return null;

    // Convert the object back to an array
    const uniqueArray = Object.keys(uniqueElements).map(id => ({
        id: parseInt(id), // Ensure id is parsed as an integer
        attributes: uniqueElements[id]
    }));

    // Now uniqueArray contains only unique elements based on the "id" property
    // console.log(uniqueArray);


    // Map proficiency levels to numerical values
    const proficiencyMapping = {
        "Basic": 1,
        "Intermediate": 2,
        "Advanced": 3,
        "Proficient": 4,  // Note: Correct the typo in the dataset
    };

    // Iterate over the chart data
    const countsByTypeAndProficiency = {};
    // Iterate over the chart data
    // console.log(chart)

    // iterate over each element on the chart
    // console.log(chart)
    uniqueArray.forEach(element => {
        const type = element.attributes.Type;
        const proficiency = element.attributes.Expertise;

        if (!countsByTypeAndProficiency[type]) {
            countsByTypeAndProficiency[type] = {};
        }
        if (countsByTypeAndProficiency[type][proficiency] === undefined) {
            countsByTypeAndProficiency[type][proficiency] = 1;
        } else {
            countsByTypeAndProficiency[type][proficiency] += 1;
        }
    });

    const proficiencyPercentagesByType = {};
    Object.keys(countsByTypeAndProficiency).forEach(type => {
        const proficiencyCounts = countsByTypeAndProficiency[type];
        let total = 0;
        let sumProficiencyValues = 0;

        Object.keys(proficiencyCounts).forEach(proficiency => {
            const count = proficiencyCounts[proficiency];
            const proficiencyValue = proficiencyMapping[proficiency];
            total += count;
            sumProficiencyValues += count * proficiencyValue;
        });
        // console log the total and sumProficiencyValues and object key in the same line
        // console.log(total, sumProficiencyValues, type)
        const averageProficiency = total !== 0 ? sumProficiencyValues / total : 0;
        // normalize the average proficiency to a scale of 0 to 100
        const normalizedAverageProficiency = Math.round(averageProficiency * 100 / 4);

        proficiencyPercentagesByType[type] = normalizedAverageProficiency;
    });

    var data = {
        labels: Object.keys(proficiencyPercentagesByType),
        datasets: [{
            data: Object.values(proficiencyPercentagesByType),
            backgroundColor: 'rgba(58, 175, 241, 0.3)',
            borderColor: 'rgba(58, 175, 241, 1)',
            borderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(58, 175, 241, 1)',
        }]
    }

    var options = {
        plugins: {
            legend: {
                display: false,
            }
        },
        scale: {
            angleLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            pointLabels: {
              fontSize: 16,
              fontColor: '#666',
                fontStyle: 'bold'
            },
            ticks: {
              beginAtZero: false,
              stepSize: 25
            },
            circular: true // Set circular to true to make it a circular radar chart
          },
          responsive: true,
          maintainAspectRatio: true,
    };

    // change Radar chartjs canvas size
    // const canvasRef = useRef(null);
    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext("2d");
    //     ctx.canvas.width = 400;
    //     ctx.canvas.height = 400;
    // }, []);

    return (
        <div>
            <Radar
                style={{ width: '98%', margin: '0 auto' }}
                data={data}
                options={options}
                // use maximum width and height of the canvas to maintain aspect ratio
            />
        </div>
    )
}

export default SKillRadarChart;