import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { eventApi } from '~/components/ApiUrl';
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
    const [eventsPerPage] = useState(10);
    const [totalEvents, setTotalEvents] = useState(0);
    const [pages, setPages] = useState([]);

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
                                <th>Actions</th>
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
                                    <td>{`${event.images?.length || 0} Images`}</td>
                                    <td>{`${event.add_on?.length || 0} Add On`}</td>
                                    <td>
                                        <div>
                                            <button className={cx('detail-button')}>Detail</button>
                                            <button className={cx('delete-button')}>Delete</button>
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
