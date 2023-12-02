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
    const baseURL = 'https://cms.wanghley.com/api/skills'
    const [chart, setChart] = useState(null);
    const [nextPage, setNextPage] = useState(1);

    useEffect(() => {
        const fetch = async () => {
            if(nextPage){
                try {
                var url = baseURL + '?pagination[page]=' + nextPage
                const response = await axios.get(url);
                // Combine the data from the current page with the existing chart data
                setChart(prevChart => {
                    if(!prevChart) return response.data;
                    return {
                        ...response.data,
                        data: [
                            ...prevChart.data,
                            ...response.data.data,
                        ]
                    }
                })
                if (response.data.meta.pagination.pageCount <= nextPage) {
                    setNextPage(null);
                  } else {
                    setNextPage(nextPage + 1);
                  }
                } catch (e) {
                    console.log(e);
                }
            }
        };
        fetch();
    }, [nextPage,]);

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

        const averageProficiency = total!=0?sumProficiencyValues / total:0;
        // normalize the average proficiency to a scale of 0 to 100
        const normalizedAverageProficiency = Math.round(averageProficiency * 100 / 4);

        proficiencyPercentagesByType[type] = normalizedAverageProficiency;
    });

    // console.log(proficiencyPercentagesByType)

    var data = {
        labels: Object.keys(proficiencyPercentagesByType),
        datasets: [{
            data: Object.values(proficiencyPercentagesByType),
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