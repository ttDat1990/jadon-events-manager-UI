import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { pressReviewApi } from '~/components/ApiUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import useDebounce from '~/hooks';
import styles from './AdminPressReviewList.module.scss';

const cx = classNames.bind(styles);

function AdminPressReviewList() {
    const [pressReviews, setPressReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pressName, setPressName] = useState('');
    const [author, setAuthor] = useState('');
    const [noResults, setNoResults] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pressPerPage] = useState(6);
    const [pages, setPages] = useState([]);
    const [totalPress, setTotalPress] = useState(0);
    const navigate = useNavigate();

    const debouncedName = useDebounce(pressName, 500);
    const debouncedAuthor = useDebounce(author, 500);

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

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `${pressReviewApi}?name=${debouncedName}&author=${debouncedAuthor}&page=${currentPage}&per_page=${pressPerPage}`,
            );
            setPressReviews(response.data.data);
            setNoResults(response.data.data.length === 0);
            setIsLoading(false);
            setTotalPress(response.data.total);
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
    }, [currentPage, pressPerPage, debouncedName, debouncedAuthor, totalPress]);

    useEffect(() => {
        // Initial data fetch when the component mounts
        fetchData();
    }, [fetchData]);

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

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        const totalPages = Math.ceil(totalPress / pressPerPage);
        setCurrentPage(totalPages);
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
                    fetchData();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    return (
        <div className={cx('container')}>
            <h1>Press Review List</h1>
            <div className={cx('filter-bar')}>
                <input type="text" placeholder="Search by Title" value={pressName} onChange={handlePressNameChange} />
                <input type="text" placeholder="Search by Author" value={author} onChange={handleAuthorChange} />
            </div>
            {isLoading ? (
                <div className={cx('loading-container')}>
                    <div className={cx('loading')}></div>
                </div>
            ) : (
                <div>
                    {noResults ? (
                        <p>No results found.</p>
                    ) : (
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
                        </table>
                    )}
                </div>
            )}
            {pressReviews.length > 0 && !isLoading && (
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
    );
}

export default AdminPressReviewList;
