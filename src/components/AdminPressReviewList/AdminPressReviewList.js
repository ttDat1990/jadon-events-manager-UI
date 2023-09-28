import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { pressReviewApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './AdminPressReviewList.module.scss';

const cx = classNames.bind(styles);

function AdminPressReviewList() {
    const [pressReviews, setPressReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pressName, setPressName] = useState('');
    const [author, setAuthor] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pressPerPage] = useState(6);
    const [totalPress, setTotalPress] = useState(0);
    const [pages, setPages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(pressReviewApi)
            .then((response) => {
                setPressReviews(response.data.data);
            })
            .catch((error) => {
                console.error('Lỗi:', error);
            });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${pressReviewApi}?name=${pressName}&author=${author}&page=${currentPage}&per_page=${pressPerPage}`,
                );
                setPressReviews(response.data.data);
                setTotalPress(response.data.total);
                setIsLoading(false);

                const totalPages = Math.ceil(totalPress / pressPerPage);
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
    }, [currentPage, pressPerPage, totalPress, pressName, author]);

    const handlePressNameChange = (e) => {
        setPressName(e.target.value);
        setCurrentPage(1);
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
        setCurrentPage(1);
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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

    console.log(pressReviews);

    return (
        <div className={cx('container')}>
            <h1>Press Review List</h1>
            <div className={cx('filter-bar')}>
                <input type="text" placeholder="Search by Title" value={pressName} onChange={handlePressNameChange} />
                <input type="text" placeholder="Search by Author" value={author} onChange={handleAuthorChange} />
            </div>
            <table className={cx('event-table')}>
                <thead>
                    <tr>
                        <th className={cx('column-1')}>Title</th>
                        <th className={cx('column-2')}>Author</th>
                        <th className={cx('column-3')}>Image</th>
                        <th className={cx('column-4')}>Action</th>
                    </tr>
                </thead>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
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
                                    <button
                                        onClick={() => handleUpdate(pressReview.id)}
                                        className={cx('detail-button')}
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(pressReview.id)}
                                        className={cx('delete-button')}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
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
    );
}

export default AdminPressReviewList;
