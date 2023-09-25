import React, { useEffect, useState, useCallback } from 'react';
import { slidesApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SlideShow() {
    const [slides, setSlides] = useState([]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const nextSlide = useCallback(() => {
        if (currentSlideIndex < slides.length - 1) {
            setCurrentSlideIndex(currentSlideIndex + 1);
        } else {
            setCurrentSlideIndex(0);
        }
    }, [currentSlideIndex, slides]);

    const prevSlide = useCallback(() => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(currentSlideIndex - 1);
        } else {
            setCurrentSlideIndex(slides.length - 1);
        }
    }, [currentSlideIndex, slides]);

    useEffect(() => {
        fetch(slidesApi)
            .then((response) => response.json())
            .then((data) => {
                setSlides(data);
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    if (slides.length === 0) {
        return (
            <div className={cx('slide-show')}>
                <div className={cx('slide-loading')}>
                    <img
                        src="https://takeheartevents.com/wp-content/uploads/2020/09/JC-935.jpg"
                        alt="Loading Slide Show"
                    />
                </div>
            </div>
        );
    }

    const currentSlide = slides[currentSlideIndex];
    const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
    const nextSlideItem = slides[nextSlideIndex];

    return (
        <div className={cx('slide-show')}>
            <div className={cx('slide', 'active')}>
                <img src={currentSlide.image_url} alt={currentSlide.title} />
                <div className={cx('overlay')}>
                    <h2>{currentSlide.title}</h2>
                    <p>{currentSlide.content}</p>
                    <div>
                        <Link to={'/contact-us'} className={cx('get-planning-button')}>
                            Get Planning
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx('slide')}>
                <img src={nextSlideItem.image_url} alt={nextSlideItem.title} />
                <div className={cx('overlay')}>
                    <h2>{nextSlideItem.title}</h2>
                    <p>{nextSlideItem.content}</p>
                    <div>
                        <Link to={'/contact-us'} className={cx('get-planning-button')}>
                            Get Planning
                        </Link>
                    </div>
                </div>
            </div>
            <button onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

export default SlideShow;
