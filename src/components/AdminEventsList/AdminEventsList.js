import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { eventApi } from '~/components/ApiUrl';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AdminEventsList.module.scss';

const cx = classNames.bind(styles);

const AdminEventsList = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [userName, setUserName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(5);
    const [totalEvents, setTotalEvents] = useState(0);
    const [pages, setPages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${eventApi}?event_name=${search}&category_name=${categoryName}&user_name=${userName}&page=${currentPage}&per_page=${eventsPerPage}`,
                );
                setEvents(response.data.data);
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
        };

        fetchData();
    }, [search, currentPage, eventsPerPage, totalEvents, categoryName, userName]);

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
                    const updatedEvents = events.filter((event) => event.id !== eventId);
                    setEvents(updatedEvents);
                })
                .catch((error) => {
                    console.error('Error deleting event:', error);
                });
        }
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
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
                <p>Loading...</p>
            ) : (
                <div>
                    <table className={cx('event-table')}>
                        <thead>
                            <tr>
                                <th>Event Name</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Category</th>
                                <th>Images</th>
                                <th>Add-ons</th>
                                <th className={cx('column-action')}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event) => (
                                <tr key={event.id}>
                                    <td>{event.name}</td>
                                    <td>{event.user.name}</td>
                                    <td>{event.user.email}</td>
                                    <td>{event.start_date}</td>
                                    <td>{event.end_date}</td>
                                    <td>{event.category.name}</td>
                                    <td>{`${event.images?.length || 0}`}</td>
                                    <td>{`${event.add_ons?.length || 0}`}</td>
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
            )}
        </div>
    );
};

export default AdminEventsList;
