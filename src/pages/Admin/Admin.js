import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { contactApi, commentApi, feedbackApi, eventApi, pressReviewApi, userApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Admin() {
    const [contacts, setContacts] = useState('');
    const [comments, setComments] = useState('');
    const [feedbacks, setFeedbacks] = useState('');
    const [events, setEvents] = useState([]);
    const [presses, setPresses] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [contactResponse, commentResponse, feedbackResponse, eventResponse, pressResponse, userResponse] =
                    await Promise.all([
                        axios.get(`${contactApi}/unchecked/count`),
                        axios.get(`${commentApi}/unchecked/count`),
                        axios.get(`${feedbackApi}/unchecked/count`),
                        axios.get(eventApi),
                        axios.get(pressReviewApi),
                        axios.get(userApi),
                    ]);

                setContacts(contactResponse.data.count);
                setComments(commentResponse.data.count);
                setFeedbacks(feedbackResponse.data.count);
                setEvents(eventResponse.data);
                setPresses(pressResponse.data);
                setUsers(userResponse.data.users);
            } catch (error) {
                if (error.response && error.response.status === 429) {
                    const retryAfter = error.response.headers['Retry-After'];
                    setTimeout(() => fetchData(), retryAfter * 1000);
                } else {
                    console.error('Error fetching data:', error);
                }
            }
        };
        fetchData();
    }, []);

    const bigNumberContactsClass = contacts > 0 ? 'big-number' : 'big-number-0';
    const textContactsClass = contacts > 0 ? 'text' : 'text-0';

    const bigNumberCommentsClass = comments > 0 ? 'big-number' : 'big-number-0';
    const textCommentsClass = comments > 0 ? 'text' : 'text-0';

    const bigNumberFeedbacksClass = feedbacks > 0 ? 'big-number' : 'big-number-0';
    const textFeedbacksClass = feedbacks > 0 ? 'text' : 'text-0';

    return (
        <div className={cx('container')}>
            <h1>Admin Dashboard</h1>
            <h2>Important items to check</h2>
            <div className={cx('warning-container')}>
                <Link to={'/admin/adminContacts'} className={cx('item-container')}>
                    <h3>Contacts</h3>
                    <div>
                        <span className={cx(bigNumberContactsClass)}>{contacts}</span>
                        <span className={cx(textContactsClass)}>unchecked Contacts</span>
                    </div>
                </Link>
                <Link to={'/admin/listComments'} className={cx('item-container')}>
                    <h3>Comments</h3>
                    <div>
                        <span className={cx(bigNumberCommentsClass)}>{comments}</span>
                        <span className={cx(textCommentsClass)}>unchecked Comments</span>
                    </div>
                </Link>
                <Link to={'/admin/adminFeedback'} className={cx('item-container')}>
                    <h3>Feedback</h3>
                    <div>
                        <span className={cx(bigNumberFeedbacksClass)}>{feedbacks}</span>
                        <span className={cx(textFeedbacksClass)}>unchecked Feedbacks</span>
                    </div>
                </Link>
            </div>

            <h2>Items infomations</h2>
            <div className={cx('warning-container')}>
                <Link to={'/admin/listEvents'} className={cx('item-container')}>
                    <h3>Total completed Events</h3>
                    <div>
                        <span className={cx('events-number')}>{events.total}</span>
                        <span className={cx('text-0')}>Events</span>
                    </div>
                </Link>
                <Link to={'/admin/listPressReview'} className={cx('item-container')}>
                    <h3>Total Presses</h3>
                    <div>
                        <span className={cx('press-number')}>{presses.total}</span>
                        <span className={cx('text-0')}>Presses</span>
                    </div>
                </Link>
                <Link to={'/admin/listUsers'} className={cx('item-container')}>
                    <h3>Total Users</h3>
                    <div>
                        <span className={cx('user-number')}>{users.total}</span>
                        <span className={cx('text-0')}>Users</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Admin;
