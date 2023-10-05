import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { eventApi, pressReviewApi } from '~/components/ApiUrl';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HomeComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMartiniGlass, faPeopleGroup, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HomeComponent() {
    const [events, setEvents] = useState([]);
    const [presses, setPresses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${eventApi}?event_name=&category_name=&user_name=&page=${1}&per_page=${4}`,
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

    const handleToPress = () => {
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
        <div className={cx('home_container')}>
            <div className={cx('home_message')}>
                <div className={cx('home_preface')}>
                    <h1>Our Services</h1>
                    <h3>
                        Planning an event but no idea where to start? Jadon!{' '}
                        <i>
                            <FontAwesomeIcon icon={faHeart} />
                        </i>
                    </h3>
                    <p>
                        We have you covered. Jadon Events partners with local vendors to create fun, unique and
                        innovative events tailored just for you or your organization. We have a variety of event
                        planning experience; including weddings, social, corporate and non-profit events.
                    </p>
                </div>
                <div className={cx('home_values_container')}>
                    <div className={cx('home_values')}>
                        <div className={cx('home_values_icon')}>
                            <i>
                                <FontAwesomeIcon icon={faPeopleGroup} />
                            </i>
                        </div>
                        <h4>Corporate Events</h4>
                        <div className={cx('home_values_word')}>
                            <div>
                                <i className={cx('ti-minus')}></i>Product Launches
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Conferences
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Sale Events
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Trade Shows
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Customer Appreciation Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Team Building Workshops
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>More!
                            </div>
                        </div>
                    </div>
                    <div className={cx('home_values')}>
                        <div className={cx('home_values_icon')}>
                            <i>
                                <FontAwesomeIcon icon={faHeart} />
                            </i>
                        </div>
                        <h4>Non-Profit Events</h4>
                        <div className={cx('home_values_word')}>
                            <div>
                                <i className={cx('ti-minus')}></i>Galas
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Luncheons
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Award Dinners
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Walks & Runs
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Unique Fundraisers
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Fairs, Festivals & Expos
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>More!
                            </div>
                        </div>
                    </div>
                    <div className={cx('home_values')}>
                        <div className={cx('home_values_icon')}>
                            <i>
                                <FontAwesomeIcon icon={faMartiniGlass} />
                            </i>
                        </div>
                        <h4>Social Events</h4>
                        <div className={cx('home_values_word')}>
                            <div>
                                <i className={cx('ti-minus')}></i>Birthday Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Seasonal Celebrations
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Anniversary Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Going Away Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Girls / Guys Night Out
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Retirement Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>More!
                            </div>
                        </div>
                    </div>
                    <div className={cx('home_values')}>
                        <div className={cx('home_values_icon')}>
                            <i>
                                <FontAwesomeIcon icon={faGem} />
                            </i>
                        </div>
                        <h4>Weddings</h4>
                        <div className={cx('home_values_word')}>
                            <div>
                                <i className={cx('ti-minus')}></i>Ceremonies
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Receptions
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Engagement Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Bridal Showers
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Rehearsal Dinners
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Bachelor/ Bachelorette Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>More!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('home_portfolio_gallery')}>
                <div className={cx('home_portfolio_gallery_section')}>
                    <h1>Our Event Portfolio</h1>
                    <span onClick={() => handleToGallery()}>View Entire Gallery</span>
                </div>
                <div className={cx('content-container')}>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className={cx('items-container')}>
                            {events.map((event) => (
                                <div
                                    key={event.id}
                                    className={cx('item-detail')}
                                    onClick={() => handleEventDetail(event.id)}
                                >
                                    <div className={cx('item-image')}>
                                        <img src={event.images[0].image_url} alt="" />
                                        <div className={cx('overlay')}></div>
                                    </div>
                                    <div className={cx('item-name')}>
                                        <div>{event.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className={cx('home_review')}>
                <div className={cx('home_review_icon')}>
                    <i>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                    </i>
                </div>
                <div className={cx('home_review_slide')}>
                    <div className={cx('home_review_slide_cmt')}>
                        <p>
                            I served on the event committee for a nonprofit fundraiser, and we hired Chelsea's company
                            for event planning. It was a large, complicated event, and we are a demanding group. She
                            listened well, was patient and calm, and executed beautifully. I highly recommend her
                            company.
                        </p>
                        <h5>Shelly</h5>
                    </div>
                </div>
                <div className={cx('home_review_btn')}>
                    <h4>How did we do? Leave us a review!</h4>
                    <a href="/">
                        <span>REVIEW US</span>
                        <i className={cx('fa-regular', 'fa-thumbs-up')}></i>
                    </a>
                </div>
            </div>
            <div className={cx('content-container1')}>
                <h1 onClick={() => handleToPress()}>Recent Events & Press</h1>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className={cx('items-container1')}>
                        {presses.map((press) => (
                            <div
                                key={press.id}
                                className={cx('item-detail')}
                                onClick={() => handlePressDetail(press.id)}
                            >
                                <div className={cx('item-image')}>
                                    <img src={press.img_url} alt={press.title} />
                                    <div className={cx('overlay')}></div>
                                </div>

                                <div className={cx('item-name1')}>
                                    <div>{press.title}</div>
                                    <div>By {press.author}</div>
                                    <div dangerouslySetInnerHTML={{ __html: press.content }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomeComponent;
