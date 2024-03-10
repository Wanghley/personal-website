import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import axios from "axios";

const WhyMe = () => {
    const baseURL = process.env.REACT_APP_testimonials_api_url;
    const [data, setData] = useState(null);
    const [nextPage, setNextPage] = useState(1);

    const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, paritialVisibilityGutter: 60 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, paritialVisibilityGutter: 50 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, paritialVisibilityGutter: 30 }
    };

    useEffect(() => {
    const fetchData = async () => {
        if (nextPage) {
        try {
            const url = `${baseURL}?pagination[page]=${nextPage}`;
            const response = await axios.get(url);
            setData(prevData => ({
            ...response.data,
            data: prevData ? [...prevData.data, ...response.data.data] : response.data.data
            }));
            setNextPage(response.data.meta.pagination.pageCount <= nextPage ? null : nextPage + 1);
        } catch (e) {
            console.error(e);
        }
        }
    };
    fetchData();
    }, [nextPage, baseURL]);

    if (!data) return null;

    const uniqueElements = data.data.reduce((acc, { id, attributes }) => {
    acc[id] = attributes;
    return acc;
    }, {});
    console.log(uniqueElements);

    const carouselData = Object.values(uniqueElements).map(({ name, position, text }) => `${name}, ${position}, ${text}`);

    return (
        <div>
            <h1>WHY ME?</h1>
            <Carousel
                ssr
                responsive={responsive} 
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
            >   
                
            </Carousel>
        </div>
    );
};

export default WhyMe;