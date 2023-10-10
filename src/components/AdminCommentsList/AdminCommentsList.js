import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { commentApi } from '~/components/ApiUrl';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import useDebounce from '~/hooks';
import styles from './AdminCommentsList.module.scss';

const cx = classNames.bind(styles);

const AdminCommentsList = () => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchByEmail, setSearchByEmail] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(10);
    const [totalComments, setTotalComments] = useState(0);
    const [pages, setPages] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const debouncedEmail = useDebounce(searchByEmail, 500);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `${commentApi}?page=${currentPage}&per_page=${commentsPerPage}&email=${debouncedEmail}`,
            );
            setComments(response.data.data);
            setTotalComments(response.data.total);
            setIsLoading(false);
            setNoResults(response.data.length === 0);

            const totalPages = Math.ceil(totalComments / commentsPerPage);
            const pagesArray = [];
            for (let i = 1; i <= totalPages; i++) {
                pagesArray.push(i);
            }
            setPages(pagesArray);
        } catch (error) {
            console.error('Error fetching comments:', error);
            setIsLoading(false);
        }
    }, [debouncedEmail, currentPage, commentsPerPage, totalComments]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleSearchByEmailChange = (e) => {
        setSearchByEmail(e.target.value);
        setCurrentPage(1);
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        const totalPages = Math.ceil(totalComments / commentsPerPage);
        setCurrentPage(totalPages);
    };

    const updateContactChecked = (commentId, isChecked) => {
        setComments((prevComments) =>
            prevComments.map((comment) => (comment.id === commentId ? { ...comment, isChecked } : comment)),
        );
    };

    const handleCheck = (id) => {
        axios
            .get(`${commentApi}/check/${id}`)
            .then((response) => {
                updateContactChecked(id, true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleDelete = (id, e) => {
        e.stopPropagation();
        const confirmDelete = window.confirm('Are you sure you want to delete this Comment?');

        if (confirmDelete) {
            axios
                .delete(`${commentApi}/${id}`)
                .then((response) => {
                    fetchData();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    const handleCheckAll = () => {
        const commentsToSend = comments.filter((comment) => !comment.isChecked);

        if (commentsToSend.length === 0) {
            return;
        }

        const commentIdsToSend = commentsToSend.map((comment) => comment.id);

        axios
            .post(`${commentApi}/checks`, { comment_ids: commentIdsToSend })
            .then((response) => {
                fetchData();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className={cx('container')}>
            <h1>Comment List</h1>
            <div className={cx('search-box')}>
                <input
                    type="text"
                    placeholder="Search by Email"
                    value={searchByEmail}
                    onChange={handleSearchByEmailChange}
                    name="email"
                    id="email"
                    autoComplete="email"
                />
                <button className={cx('checkAll-button')} onClick={handleCheckAll}>
                    Check All
                </button>
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
                        <table className={cx('comment-table')}>
                            <thead>
                                <tr>
                                    <th className={cx('column-name')}>User email</th>
                                    <th>Content</th>
                                    <th className={cx('column-status')}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comments.map((comment) => (
                                    <tr
                                        key={comment.id}
                                        className={cx('list-content')}
                                        onClick={() => handleCheck(comment.id)}
                                    >
                                        <td>{comment.user.email}</td>
                                        <td>{comment.content}</td>
                                        {comment.isChecked ? (
                                            <td>
                                                <div className={cx('checked')}>Checked</div>
                                                <div className={cx('action-button')}>
                                                    <button
                                                        onClick={(e) => handleDelete(comment.id, e)}
                                                        className={cx('delete-button')}
                                                    >
                                                        <FontAwesomeIcon icon={faTrashCan} />
                                                    </button>
                                                </div>
                                            </td>
                                        ) : (
                                            <td>
                                                <div className={cx('uncheck')}>Uncheck</div>
                                                <div className={cx('action-button')}>
                                                    <button
                                                        onClick={(e) => handleDelete(comment.id, e)}
                                                        className={cx('delete-button')}
                                                    >
                                                        <FontAwesomeIcon icon={faTrashCan} />
                                                    </button>
                                                </div>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    {comments.length > 0 && (
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
    );
};

export default AdminCommentsList;
