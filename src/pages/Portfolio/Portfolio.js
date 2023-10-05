import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { eventApi, pressReviewApi } from '~/components/ApiUrl';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './Portfolio.module.scss';

const cx = classNames.bind(styles);

function Portfolio() {
    const [events, setEvents] = useState([]);
    const [presses, setPresses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${eventApi}?event_name=&category_name=&user_name=&page=${1}&per_page=${3}`,
                );
                setEvents(response.data.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching events:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleEventDetail = (id) => {
        navigate(`/event-details/${id}`);
    };

    const handlePressDetail = (id) => {
        navigate(`/press-details/${id}`);
    };

    const handleToGallery = () => {
        navigate(`/events-gallery`);
    };

    const handleToPress = (id) => {
        navigate(`/press-review`);
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${pressReviewApi}?page=${1}&per_page=${3}`);
                setPresses(response.data.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching events:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={cx('container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>Portfolio</div>
                </div>
                <div className={cx('img-overlay')}></div>
                <img src="https://takeheartevents.com/wp-content/uploads/2019/01/WWMansion-13-of-123.jpg" alt="" />
            </div>
            <div className={cx('content-container')}>
                <div className={cx('title')}>
                    <div>Event Gallery</div>
                    <span onClick={() => handleToGallery()}>View Entire Gallery</span>
                </div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className={cx('items-container')}>
                        {events.map((event) => (
                            <div key={event.id} className={cx('item-detail')}>
                                <div className={cx('item-image')}>
                                    <img src={event.images[0].image_url} alt="" />
                                    <div className={cx('overlay')}></div>
                                </div>
                                <div className={cx('item-button')}>
                                    <button onClick={() => handleEventDetail(event.id)}>More Details</button>
                                </div>
                                <div className={cx('item-name')}>
                                    <div>{event.name}</div>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className={cx('content-container')}>
                <div className={cx('title')}>
                    <div>Press Review</div>
                    <span onClick={() => handleToPress()}>View Entire Press</span>
                </div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className={cx('items-container')}>
                        {presses.map((press) => (
                            <div key={press.id} className={cx('item-detail')}>
                                <div className={cx('item-image')}>
                                    <img src={press.img_url} alt={press.title} />
                                    <div className={cx('overlay')}></div>
                                </div>
                                <div className={cx('item-button')}>
                                    <button onClick={() => handlePressDetail(press.id)}>More Details</button>
                                </div>
                                <div className={cx('item-name1')}>
                                    <div>{press.title}</div>
                                    <div>By {press.author}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Portfolio;
