import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { contactApi } from '~/components/ApiUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import useDebounce from '~/hooks';
import styles from './AdminContactsPage.module.scss';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const AdminContactsPage = () => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchByName, setSearchByName] = useState('');
    const [searchByEmail, setSearchByEmail] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage] = useState(10);
    const [totalContacts, setTotalContacts] = useState(0);
    const [pages, setPages] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const debouncedName = useDebounce(searchByName, 500);
    const debouncedEmail = useDebounce(searchByEmail, 500);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                `${contactApi}?page=${currentPage}&per_page=${contactsPerPage}&name=${debouncedName}&email=${debouncedEmail}`,
            );
            setContacts(response.data.data);
            setTotalContacts(response.data.total);
            setIsLoading(false);
            setNoResults(response.data.length === 0);

            const totalPages = Math.ceil(totalContacts / contactsPerPage);
            const pagesArray = [];
            for (let i = 1; i <= totalPages; i++) {
                pagesArray.push(i);
            }
            setPages(pagesArray);
        } catch (error) {
            console.error('Error fetching contacts:', error);
            setIsLoading(false);
        }
    }, [debouncedName, debouncedEmail, currentPage, contactsPerPage, totalContacts]);

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
        const confirmDelete = window.confirm('Are you sure you want to delete this Contact?');

        if (confirmDelete) {
            axios
                .delete(`${contactApi}/${id}`)
                .then((response) => {
                    fetchData();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    const updateContactChecked = (contactId, isChecked) => {
        setContacts((prevContacts) =>
            prevContacts.map((contact) => (contact.id === contactId ? { ...contact, isChecked } : contact)),
        );
    };

    const handleCheck = (id) => {
        axios
            .get(`${contactApi}/${id}`)
            .then((response) => {
                setSelectedContact(response.data.contact);
                setIsModalOpen(true);
                updateContactChecked(id, true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        const totalPages = Math.ceil(totalContacts / contactsPerPage);
        setCurrentPage(totalPages);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('content-container')}>
                <div className={cx('table-container')}>
                    <h2>Contacts List</h2>
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
                                        {contacts.map((contact) => (
                                            <tr
                                                key={contact.id}
                                                className={cx('list-content')}
                                                onClick={() => handleCheck(contact.id)}
                                            >
                                                <td>{contact.name}</td>
                                                {contact.isChecked ? (
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
                                                        onClick={() => handleDelete(contact.id)}
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
                            {contacts.length > 0 && (
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
                        <h2>Contact Details</h2>
                        <div>Name: {selectedContact?.name}</div>
                        <div>Email: {selectedContact?.email}</div>
                        <div>Phone: {selectedContact?.phone}</div>
                        <div>Company Name: {selectedContact?.company_name}</div>
                        <div>Event type: {selectedContact?.event_type}</div>
                        <div>Date Start: {selectedContact?.date_start}</div>
                        <div>Content: {selectedContact?.content}</div>
                    </div>
                ) : (
                    <div className={cx('modal-overlay')}>
                        <h2>Contact Details</h2>
                        <div>Name: {selectedContact?.name}</div>
                        <div>Email: {selectedContact?.email}</div>
                        <div>Phone: {selectedContact?.phone}</div>
                        <div>Company Name: {selectedContact?.company_name}</div>
                        <div>Event type: {selectedContact?.event_type}</div>
                        <div>Date Start: {selectedContact?.date_start}</div>
                        <div>
                            Content: <div>{selectedContact?.content}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminContactsPage;
