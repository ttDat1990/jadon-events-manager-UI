import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { eventApi } from '~/components/ApiUrl';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import useDebounce from '~/hooks';
import styles from './AdminEventsList.module.scss';

const cx = classNames.bind(styles);

const AdminEventsList = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [userName, setUserName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [noResults, setNoResults] = useState(false);
    const [eventsPerPage] = useState(5);
    const [totalEvents, setTotalEvents] = useState(0);
    const [pages, setPages] = useState([]);
    const navigate = useNavigate();

    const debouncedEvent = useDebounce(search, 500);
    const debouncedCategory = useDebounce(categoryName, 500);
    const debouncedUser = useDebounce(userName, 500);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `${eventApi}?event_name=${debouncedEvent}&category_name=${debouncedCategory}&user_name=${debouncedUser}&page=${currentPage}&per_page=${eventsPerPage}`,
            );
            setEvents(response.data.data);
            setNoResults(response.data.data.length === 0);
            setTotalEvents(response.data.total);
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
    }, [debouncedEvent, currentPage, eventsPerPage, totalEvents, debouncedCategory, debouncedUser]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    const handleCategoryNameChange = (e) => {
        setCategoryName(e.target.value);
        setCurrentPage(1);
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
        setCurrentPage(1);
    };

    const handleDetail = (id) => {
        navigate(`/admin/detailEvent/${id}`);
    };

    const handleDeleteEvent = async (eventId) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this event?');

        if (isConfirmed) {
            axios
                .delete(`${eventApi}/${eventId}`)
                .then(() => {
                    fetchData();
                })
                .catch((error) => {
                    console.error('Error deleting event:', error);
                });
        }
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        const totalPages = Math.ceil(totalEvents / eventsPerPage);
        setCurrentPage(totalPages);
    };

    return (
        <div className={cx('container')}>
            <h1>Event List</h1>
            <div className={cx('search-box')}>
                <input type="text" placeholder="Search by Event Name" value={search} onChange={handleSearchChange} />
                <input
                    type="text"
                    placeholder="Search by Category Name"
                    value={categoryName}
                    onChange={handleCategoryNameChange}
                />
                <input type="text" placeholder="Search by User Name" value={userName} onChange={handleUserNameChange} />
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
                                    <th className={cx('name-colum')}>Event Name</th>
                                    <th>User Name</th>
                                    <th className={cx('email-colum')}>User Email</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Category</th>
                                    <th>Img</th>
                                    <th>Add</th>
                                    <th className={cx('column-action')}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event) => (
                                    <tr key={event.id}>
                                        <td>{event.name}</td>
                                        <td>{event.user ? event.user.name : 'N/A'}</td>
                                        <td>{event.user ? event.user.email : 'N/A'}</td>
                                        <td>{event.start_date}</td>
                                        <td>{event.end_date}</td>
                                        <td>{event.category.name}</td>
                                        <td>{`${event.images?.length || 0} img`}</td>
                                        <td>{`${event.add_ons?.length || 0} add`}</td>
                                        <td>
                                            <div className={cx('button-container')}>
                                                <button
                                                    className={cx('detail-button')}
                                                    onClick={() => handleDetail(event.id)}
                                                >
                                                    Detail
                                                </button>
                                                <button
                                                    className={cx('delete-button')}
                                                    onClick={() => handleDeleteEvent(event.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    {events.length > 0 && (
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

export default AdminEventsList;
