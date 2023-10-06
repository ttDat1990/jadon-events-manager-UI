import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { eventApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './EventsGallery.module.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function EventsGallery() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryName, setCategoryName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(6);
    const [totalEvents, setTotalEvents] = useState(0);
    const [pages, setPages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${eventApi}?category_name=${categoryName}&page=${currentPage}&per_page=${eventsPerPage}`,
                );
                setEvents(response.data.data);
                setTotalEvents(response.data.total);
                setIsLoading(false);

                const totalPages = Math.ceil(totalEvents / eventsPerPage);
                const pagesArray = [];
                for (let i = 1; i <= totalPages; i++) {
                    pagesArray.push(i);
                }
                setPages(pagesArray);
            } catch (error) {
                console.error('Error fetching events:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [currentPage, eventsPerPage, totalEvents, categoryName]);

    const handleUpdate = (id) => {
        navigate(`/event-details/${id}`);
    };

    const handleCategoryChange = (category) => {
        setCategoryName(category);
        setCurrentPage(1);
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        const totalPages = Math.ceil(totalEvents / eventsPerPage);
        setCurrentPage(totalPages);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>Events - Gallery</div>
                </div>
                <div className={cx('img-overlay')}></div>
                <img src="https://takeheartevents.com/wp-content/uploads/2019/01/WWMansion-13-of-123.jpg" alt="" />
            </div>
            <div className={cx('content-container')}>
                <div className={cx('filter-bar')}>
                    <div>Sort events:</div>
                    <button
                        onClick={() => handleCategoryChange('')}
                        className={categoryName === '' ? cx('active1') : ''}
                    >
                        All
                    </button>
                    <button
                        onClick={() => handleCategoryChange('CORPORATE')}
                        className={categoryName === 'CORPORATE' ? cx('active1') : ''}
                    >
                        Corporate
                    </button>
                    <button
                        onClick={() => handleCategoryChange('NON-PROFIT')}
                        className={categoryName === 'NON-PROFIT' ? cx('active1') : ''}
                    >
                        Non-Profit
                    </button>
                    <button
                        onClick={() => handleCategoryChange('SOCIAL')}
                        className={categoryName === 'SOCIAL' ? cx('active1') : ''}
                    >
                        Social
                    </button>
                    <button
                        onClick={() => handleCategoryChange('WEDDING')}
                        className={categoryName === 'WEDDING' ? cx('active1') : ''}
                    >
                        Weddings
                    </button>
                </div>

                {isLoading ? (
                    <div className={cx('loading-container')}>
                        <div className={cx('loading')}></div>
                    </div>
                ) : (
                    <div className={cx('items-container')}>
                        {events.map((event, image) => (
                            <div key={event.id} className={cx('item-detail')}>
                                <div className={cx('item-image')}>
                                    <img src={event.images[0].image_url} alt="" />
                                    <div className={cx('overlay')}></div>
                                </div>
                                <div className={cx('item-button')}>
                                    <button onClick={() => handleUpdate(event.id)}>More Details</button>
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
                {!isLoading && (
                    <div>
                        <div className={cx('pagination')}>
                            <button onClick={goToFirstPage}>
                                <FontAwesomeIcon icon={faAnglesLeft} />
                            </button>
                            {pages.map(
                                (pageNumber) =>
                                    (pageNumber === currentPage ||
                                        pageNumber === currentPage - 1 ||
                                        pageNumber === currentPage + 1) && (
                                        <button
                                            key={pageNumber}
                                            onClick={() => paginate(pageNumber)}
                                            className={currentPage === pageNumber ? cx('active') : ''}
                                        >
                                            {pageNumber}
                                        </button>
                                    ),
                            )}
                            <button onClick={goToLastPage}>
                                <FontAwesomeIcon icon={faAnglesRight} />
                            </button>
                        </div>
                        <div className={cx('page-count')}>
                            Page {currentPage} of {pages.length}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EventsGallery;
