import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { userEventsApi } from '~/components/ApiUrl';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './UserEvents.module.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function UserEvents() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryName, setCategoryName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(12);
    const [totalEvents, setTotalEvents] = useState(0);
    const [pages, setPages] = useState([]);
    const navigate = useNavigate();
    const { userId } = useParams();

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${userEventsApi}/${userId}?category_name=${categoryName}&page=${currentPage}&per_page=${eventsPerPage}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
                setEvents(response.data.events.data);
                setTotalEvents(response.data.events.total);
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
    }, [currentPage, eventsPerPage, totalEvents, categoryName, userId]);

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
    return (
        <div className={cx('container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>Your Events</div>
                </div>
                <div className={cx('img-overlay')}></div>
                <img
                    src="https://images.unsplash.com/photo-1483136781463-b71cca943b51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80"
                    alt=""
                />
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
                    <p>Loading...</p>
                ) : events.length > 0 ? (
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
                ) : (
                    <div className={cx('no-items')}>
                        You do not have event! <FontAwesomeIcon icon={faArrowRightLong} className={cx('icon')} />
                        <Link to={'/contact-us'}>Contact us now!</Link>
                    </div>
                )}
                <div className={cx('pagination')}>
                    {pages.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => paginate(pageNumber)}
                            className={currentPage === pageNumber ? cx('active') : ''}
                        >
                            {pageNumber}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserEvents;
