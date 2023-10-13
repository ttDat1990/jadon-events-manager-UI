import React, { useEffect, useState, useCallback } from 'react';
import { reviewApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './SlideReviews.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SlideReviews() {
    const [reviews, setReviews] = useState([]);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    useEffect(() => {
        fetch(reviewApi)
            .then((response) => response.json())
            .then((data) => {
                setReviews(data);
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    const nextReview = useCallback(() => {
        if (currentReviewIndex < reviews.length - 1) {
            setCurrentReviewIndex(currentReviewIndex + 1);
        } else {
            setCurrentReviewIndex(0);
        }
    }, [currentReviewIndex, reviews]);

    const prevReview = useCallback(() => {
        if (currentReviewIndex > 0) {
            setCurrentReviewIndex(currentReviewIndex - 1);
        } else {
            setCurrentReviewIndex(reviews.reviews.length - 1);
        }
    }, [currentReviewIndex, reviews]);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextReview();
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [nextReview]);

    if (reviews.length === 0) {
        return (
            <div className={cx('loading-container')}>
                <div className={cx('loading')}></div>
            </div>
        );
    }

    const currentReview = reviews[currentReviewIndex];
    const nextReviewIndex = (currentReviewIndex + 1) % reviews.length;
    const nextReviewItem = reviews[nextReviewIndex];

    return (
        <div className={cx('container')}>
            <div className={cx('home_review_icon')}>
                <i>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                </i>
            </div>
            <div className={cx('home_review_slide', 'active')}>
                <div className={cx('home_review_slide_cmt')}>
                    {currentReview.content}
                    <h5>{currentReview.name}</h5>
                </div>
            </div>
            <div className={cx('home_review_slide')}>
                <div className={cx('home_review_slide_cmt')}>
                    {currentReview.content}
                    <h5>{currentReview.name}</h5>
                </div>
            </div>
        </div>
    );
}

export default SlideReviews;
