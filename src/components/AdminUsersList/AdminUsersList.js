import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { userApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './AdminUsersList.module.scss';

const cx = classNames.bind(styles);

const AdminUsersList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchByName, setSearchByName] = useState('');
    const [searchByEmail, setSearchByEmail] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(6);
    const [totalUsers, setTotalUsers] = useState(0);
    const [pages, setPages] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [updatedUser, setUpdatedUser] = useState({});
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${userApi}?page=${currentPage}&per_page=${usersPerPage}&name=${searchByName}&email=${searchByEmail}`,
                );
                setUsers(response.data.users.data);
                setTotalUsers(response.data.users.total);
                setIsLoading(false);
                setNoResults(response.data.users.data.length === 0);

                const totalPages = Math.ceil(totalUsers / usersPerPage);
                const pagesArray = [];
                for (let i = 1; i <= totalPages; i++) {
                    pagesArray.push(i);
                }
                setPages(pagesArray);
            } catch (error) {
                console.error('Error fetching users:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [searchByName, searchByEmail, currentPage, usersPerPage, totalUsers]);

    const handleSearchByNameChange = (e) => {
        setSearchByName(e.target.value);
        setCurrentPage(1);
    };

    const handleSearchByEmailChange = (e) => {
        setSearchByEmail(e.target.value);
        setCurrentPage(1);
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this User?');

        if (confirmDelete) {
            axios
                .delete(`${userApi}/${id}`)
                .then((response) => {
                    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    const handleUpdate = (user) => {
        setEditingUser(user);
        setUpdatedUser({ ...user });
    };

    const handleEditInputChange = (field, value) => {
        setUpdatedUser((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleSave = (user) => {
        axios
            .post(`${userApi}/${user.id}`, updatedUser)
            .then((response) => {
                const updatedUsers = users.map((u) => (u.id === user.id ? { ...u, ...updatedUser } : u));

                if (response.status === 200) {
                    setFormErrors('');
                    setUsers(updatedUsers);
                    setEditingUser(null);
                } else {
                    const errorResponse = response.data;
                    if (errorResponse.errors) {
                        setFormErrors(errorResponse.errors);
                    } else {
                        throw new Error('Error.');
                    }
                }
            })
            .catch((err) => {
                if (err.response && err.response.data && err.response.data.errors) {
                    const errorMessages = err.response.data.errors;
                    setFormErrors(errorMessages);
                } else {
                    setFormErrors({ general: 'Errors!' });
                }
            });
    };

    const handleCancelEdit = () => {
        setEditingUser(null);
        setFormErrors('');
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={cx('container')}>
            <h1>User List</h1>
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
            {formErrors.general && <div className={cx('error-message')}>{formErrors.general}</div>}
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
                                    <th>Email</th>
                                    <th className={cx('column-action')}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>
                                            {editingUser && editingUser.id === user.id ? (
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="names"
                                                        id="names"
                                                        value={updatedUser.name}
                                                        onChange={(e) => handleEditInputChange('name', e.target.value)}
                                                        className={cx('input')}
                                                    />
                                                    {formErrors.name && (
                                                        <div className={cx('error-message')}>{formErrors.name}</div>
                                                    )}
                                                    {!formErrors.name && <div className={cx('error-message')}></div>}
                                                </div>
                                            ) : (
                                                user.name
                                            )}
                                        </td>
                                        <td>
                                            {editingUser && editingUser.id === user.id ? (
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="emails"
                                                        id="emails"
                                                        value={updatedUser.email}
                                                        onChange={(e) => handleEditInputChange('email', e.target.value)}
                                                        className={cx('input')}
                                                        autoComplete="email"
                                                    />
                                                    {formErrors.email && (
                                                        <div className={cx('error-message')}>{formErrors.email}</div>
                                                    )}
                                                    {!formErrors.email && <div className={cx('error-message')}></div>}
                                                </div>
                                            ) : (
                                                user.email
                                            )}
                                        </td>
                                        <td className={cx('action')}>
                                            <div>
                                                {editingUser && editingUser.id === user.id ? (
                                                    <>
                                                        <button
                                                            onClick={() => handleSave(user)}
                                                            className={cx('save-button')}
                                                        >
                                                            Save
                                                        </button>
                                                        <button
                                                            onClick={() => handleCancelEdit()}
                                                            className={cx('cancel-button')}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => handleUpdate(user)}
                                                            className={cx('edit-button')}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(user.id)}
                                                            className={cx('delete-button')}
                                                        >
                                                            Delete
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    <div className={cx('pagination')}>
                        {pages.map((pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => paginate(pageNumber)}
                                disabled={currentPage === pageNumber}
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

export default AdminUsersList;
