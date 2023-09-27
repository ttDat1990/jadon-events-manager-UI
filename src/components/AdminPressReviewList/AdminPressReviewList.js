import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { pressReviewApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './AdminPressReviewList.module.scss';

const cx = classNames.bind(styles);

function AdminPressReviewList() {
    const [pressReviews, setPressReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(pressReviewApi)
            .then((response) => {
                setPressReviews(response.data);
            })
            .catch((error) => {
                console.error('Lỗi:', error);
            });
    }, []);

    const handleUpdate = (id) => {
        navigate(`/admin/updatePressReview/${id}`);
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure you wan to delete this Press?');

        if (confirmDelete) {
            axios
                .delete(`${pressReviewApi}/${id}`)
                .then((response) => {
                    setPressReviews((prevReviews) => prevReviews.filter((pressReview) => pressReview.id !== id));
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    return (
        <div className={cx('container')}>
            <h1>Press Review List</h1>
            <table className={cx('event-table')}>
                <thead>
                    <tr>
                        <th className={cx('column-1')}>Title</th>
                        <th className={cx('column-2')}>Author</th>
                        <th className={cx('column-3')}>Image</th>
                        <th className={cx('column-4')}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pressReviews.map((pressReview) => (
                        <tr key={pressReview.id}>
                            <td>{pressReview.title}</td>
                            <td>{pressReview.author}</td>
                            <td>
                                {pressReview.img_url && (
                                    <img
                                        src={pressReview.img_url}
                                        alt={pressReview.title}
                                        style={{ maxWidth: '100px' }}
                                    />
                                )}
                            </td>
                            <td>
                                <button onClick={() => handleUpdate(pressReview.id)} className={cx('detail-button')}>
                                    Update
                                </button>
                                <button onClick={() => handleDelete(pressReview.id)} className={cx('delete-button')}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPressReviewList;
