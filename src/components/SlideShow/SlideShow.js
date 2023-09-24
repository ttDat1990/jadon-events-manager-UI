import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { slidesApi } from '~/components/ApiUrl';

const SlideShow = () => {
    const [slides, setSlides] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, [slides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    }, [slides]);

    useEffect(() => {
        // Gọi API để lấy dữ liệu slides
        axios
            .get(slidesApi)
            .then((response) => {
                setSlides(response.data.slides);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, 5000);

        return () => {
            clearTimeout(timer); // Xóa timer nếu component unmount hoặc currentSlide thay đổi
        };
    }, [currentSlide, nextSlide]);

    if (slides.length === 0) {
        return <div>Loading...</div>;
    }

    const currentSlideData = slides[currentSlide];

    return (
        <div className="slideshow">
            <div className="slide">
                <img src={currentSlideData.image_url} alt={currentSlideData.title} />
                <h2>{currentSlideData.title}</h2>
                <p>{currentSlideData.content}</p>
            </div>
            <button onClick={prevSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default SlideShow;
