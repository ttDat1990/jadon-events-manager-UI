import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { feedbackApi } from '~/components/ApiUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import useDebounce from '~/hooks';
import styles from './AdminFeedbackPage.module.scss';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const AdminFeedbackPage = () => {
    const [feedbacks, setFeedback] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchByName, setSearchByName] = useState('');
    const [searchByEmail, setSearchByEmail] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [feedbacksPerPage] = useState(10);
    const [totalFeedbacks, setTotalFeedback] = useState(0);
    const [pages, setPages] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [selectedFeedback, setSelectedFeedback] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const debouncedName = useDebounce(searchByName, 500);
    const debouncedEmail = useDebounce(searchByEmail, 500);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `${feedbackApi}?page=${currentPage}&per_page=${feedbacksPerPage}&name=${debouncedName}&email=${debouncedEmail}`,
            );
            setFeedback(response.data.data);
            setTotalFeedback(response.data.total);
            setIsLoading(false);
            setNoResults(response.data.length === 0);

            const totalPages = Math.ceil(totalFeedbacks / feedbacksPerPage);
            const pagesArray = [];
            for (let i = 1; i <= totalPages; i++) {
                pagesArray.push(i);
            }
            setPages(pagesArray);
        } catch (error) {
            console.error('Error fetching feedbacks:', error);
            setIsLoading(false);
        }
    }, [debouncedName, debouncedEmail, currentPage, feedbacksPerPage, totalFeedbacks]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleSearchByNameChange = (e) => {
        setSearchByName(e.target.value);
        setCurrentPage(1);
    };

    const handleSearchByEmailChange = (e) => {
        setSearchByEmail(e.target.value);
        setCurrentPage(1);
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this Feedback?');

        if (confirmDelete) {
            axios
                .delete(`${feedbackApi}/${id}`)
                .then((response) => {
                    fetchData();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    const updateFeedbackChecked = (feedbackId, isChecked) => {
        setFeedback((prevFeedbacks) =>
            prevFeedbacks.map((feedback) => (feedback.id === feedbackId ? { ...feedback, isChecked } : feedback)),
        );
    };

    const handleCheck = (id) => {
        axios
            .get(`${feedbackApi}/${id}`)
            .then((response) => {
                updateFeedbackChecked(id, true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleChoose = (index, id) => {
        setSelectedFeedback(feedbacks[index]);
        setIsModalOpen(true);
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        const totalPages = Math.ceil(totalFeedbacks / feedbacksPerPage);
        setCurrentPage(totalPages);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('content-container')}>
                <div className={cx('table-container')}>
                    <h2>Feedbacks List</h2>
                    <div className={cx('search-box')}>
                        <input
                            type="text"
                            placeholder="Search by Name"
                            value={searchByName}
                            onChange={handleSearchByNameChange}
                            autoComplete="name"
                            name="name"
                            id="name"
                        />
                        <input
                            type="text"
                            placeholder="Search by Email"
                            value={searchByEmail}
                            onChange={handleSearchByEmailChange}
                            name="email"
                            id="email"
                            autoComplete="email"
                        />
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
                                <table className={cx('user-table')}>
                                    <thead>
                                        <tr>
                                            <th className={cx('column-name')}>Name</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {feedbacks.map((feedback, index) => (
                                            <tr
                                                key={feedback.id}
                                                className={cx('list-content')}
                                                onClick={() => handleChoose(index)}
                                            >
                                                <td>{feedback.name}</td>
                                                {feedback.isChecked ? (
                                                    <td>
                                                        <div className={cx('checked')}>Checked</div>
                                                    </td>
                                                ) : (
                                                    <td>
                                                        <div className={cx('uncheck')}>Uncheck</div>
                                                    </td>
                                                )}
                                                <td className={cx('action')}>
                                                    <button
                                                        onClick={() => handleDelete(feedback.id)}
                                                        className={cx('delete-button')}
                                                    >
                                                        <FontAwesomeIcon icon={faTrashCan} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                            {feedbacks.length > 0 && (
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
                    )}
                </div>
                {isModalOpen ? (
                    <div className={cx('modal-overlay')}>
                        <h2>Feedback Details</h2>

                        <div>
                            Name: <div className={cx('content-details')}>{selectedFeedback?.name}</div>
                        </div>
                        <div>
                            Email: <div className={cx('content-details')}>{selectedFeedback?.email}</div>
                        </div>
                        <div>
                            Content: <div className={cx('content-details')}>{selectedFeedback?.content}</div>
                        </div>
                        {!selectedFeedback.isChecked && (
                            <button onClick={() => handleCheck(selectedFeedback.id)}>Marked as checked</button>
                        )}
                    </div>
                ) : (
                    <div className={cx('modal-overlay')}>
                        <h2>Feedback Details</h2>
                        <div>Choose 1 feedback for details</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminFeedbackPage;
