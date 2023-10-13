import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { reviewApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './AdminReviewsList.module.scss';

const cx = classNames.bind(styles);

const AdminReviewsList = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editReviewId, setEditReviewId] = useState(null);
    const [editedData, setEditedData] = useState({ name: '', content: '' });
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await axios.get(reviewApi);
                setReviews(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchSlides();
    }, []);

    const handleEditClick = (reviewId) => {
        setEditReviewId(reviewId);

        const reviewToEdit = reviews.find((review) => review.id === reviewId);
        if (reviewToEdit) {
            setEditedData({
                name: reviewToEdit.name,
                content: reviewToEdit.content,
            });
        }
    };

    const handleCancelEdit = (e) => {
        e.stopPropagation();
        setFormErrors('');
        setEditReviewId(null);
        setEditedData({ name: '', content: '' });
    };

    const handleEditChange = (field, value) => {
        setEditedData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSaveEdit = async (reviewId, updatedData) => {
        try {
            const formData = new FormData();
            formData.append('name', updatedData.name);
            formData.append('content', updatedData.content);

            const response = await axios.post(`${reviewApi}/${reviewId}`, formData);

            if (response.status === 200) {
                setFormErrors('');
                const response1 = await axios.get(reviewApi);
                setReviews(response1.data.reviews);
                setEditReviewId(null);
                setEditedData({ name: '', content: '' });
            } else {
                const errorResponse = response.data;
                if (errorResponse.errors) {
                    setFormErrors(errorResponse.errors);
                } else {
                    throw new Error('Error.');
                }
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.errors) {
                const errorMessages = err.response.data.errors;
                setFormErrors(errorMessages);
            } else {
                setFormErrors({ general: 'Errors!' });
            }
        }
    };

    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>List of Slides</h2>
            {formErrors.general && <div className={cx('error-message')}>{formErrors.general}</div>}
            {loading ? (
                <div>Loading...</div>
            ) : (
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review) => (
                            <tr
                                key={review.id}
                                onClick={() => handleEditClick(review.id)}
                                className={cx('list-content')}
                            >
                                <td className={cx('title-column')}>
                                    {editReviewId === review.id ? (
                                        <div>
                                            <input
                                                type="text"
                                                value={editedData.name}
                                                onChange={(e) => handleEditChange('name', e.target.value)}
                                            />
                                            {formErrors.name && (
                                                <div className={cx('error-message')}>{formErrors.name}</div>
                                            )}
                                            {!formErrors.name && <div className={cx('error-message')}></div>}
                                        </div>
                                    ) : (
                                        review.name
                                    )}
                                </td>
                                <td className={cx('name-column')}>
                                    {editReviewId === review.id ? (
                                        <div>
                                            <input
                                                type="text"
                                                value={editedData.content}
                                                onChange={(e) => handleEditChange('content', e.target.value)}
                                            />
                                            {formErrors.content && (
                                                <div className={cx('error-message')}>{formErrors.content}</div>
                                            )}
                                            {!formErrors.content && <div className={cx('error-message')}></div>}
                                        </div>
                                    ) : (
                                        review.content
                                    )}
                                </td>

                                {editReviewId === review.id && (
                                    <div className={cx('action-button1')}>
                                        <button
                                            onClick={() => handleSaveEdit(review.id, editedData)}
                                            className={cx('save-button')}
                                        >
                                            Save
                                        </button>
                                        <button onClick={(e) => handleCancelEdit(e)} className={cx('cancel-button')}>
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminReviewsList;
