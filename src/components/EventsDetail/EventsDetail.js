import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { eventApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './EventsDetail.module.scss';
import ModalSlideShow from '~/components/ModalSlideShow';

const cx = classNames.bind(styles);

function EventDetail() {
    const [eventData, setEventData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams(); // Get the event ID from the URL params

    useEffect(() => {
        // Fetch event data for the specified event ID when the component mounts
        if (id) {
            axios
                .get(`${eventApi}/${id}`)
                .then((response) => {
                    setEventData(response.data); // Set the event data with the fetched event data
                })
                .catch((error) => {
                    console.error('Error fetching event data:', error);
                    setErrorMessage(error);
                });
        }
    }, [id]);
    if (eventData === null) {
        return (
            <div className={cx('container')}>
                <h2 className={cx('title')}>Loading Event Details...</h2>
            </div>
        );
    }
    return (
        <div className={cx('container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>Events - Detail</div>
                </div>
                <div className={cx('img-overlay')}></div>
                <img src="https://takeheartevents.com/wp-content/uploads/2019/01/WWMansion-13-of-123.jpg" alt="" />
            </div>
            <div className={cx('content-container')}>
                {errorMessage && <div className={cx('error-message')}>{errorMessage}</div>}
                <h2 className={cx('title')}>{eventData.name}</h2>
                <div className={cx('event-details')}>
                    <p>Start Date: {eventData.start_date}</p>
                    <p>End Date: {eventData.end_date}</p>
                    <p>Event type: {eventData.category.name}</p>
                    <p>User Name: {eventData.user ? eventData.user.name : 'N/A'}</p>

                    {eventData.add_ons &&
                        eventData.add_ons.map((addOn, index) => (
                            <div key={index} className={cx('add-on')}>
                                {addOn.department} : {addOn.responsible}
                            </div>
                        ))}

                    <div className={cx('selected-images')}>
                        {eventData.images &&
                            eventData.images.map((image, index) => (
                                <ModalSlideShow imagePaths={eventData.images} buttonClassName={cx('modal')} key={index}>
                                    <div className={cx('selected-image-container')}>
                                        <img
                                            src={image.image_url || URL.createObjectURL(image)}
                                            alt={`Selected img ${index}`}
                                        />
                                    </div>
                                </ModalSlideShow>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDetail;
