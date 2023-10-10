import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminSidebar.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '~/components/AuthContext/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faHandshakeSimple,
    faHouse,
    faLayerGroup,
    faPanorama,
    faRectangleList,
    faRotate,
    faSignOutAlt,
    faSquarePlus,
} from '@fortawesome/free-solid-svg-icons';
import { faAddressBook, faMessage, faNewspaper } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const AdminSidebar = () => {
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const { logout } = useAuth();

    const toggleDropdown = (index) => {
        setOpenDropdownIndex(index === openDropdownIndex ? null : index);
    };

    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebar-item')}>
                <Link to={'/admin/home'} className={cx('item-title')}>
                    <FontAwesomeIcon icon={faHouse} />
                    <span> Home</span>
                </Link>
            </div>
            <div className={cx('sidebar-item')}>
                <div className={cx('item-title')} onClick={() => toggleDropdown(1)}>
                    <FontAwesomeIcon icon={faAddressBook} />
                    <span>Users</span>
                </div>
                {openDropdownIndex === 1 && (
                    <div className={cx('dropdown-content')}>
                        <Link to={'/admin/addUser'}>
                            <FontAwesomeIcon icon={faSquarePlus} />
                            <span>Add new User</span>
                        </Link>
                        <Link to={'/admin/listUsers'}>
                            <FontAwesomeIcon icon={faRectangleList} />
                            <span>List of Users</span>
                        </Link>
                    </div>
                )}
            </div>
            <div className={cx('sidebar-item')}>
                <div className={cx('item-title')} onClick={() => toggleDropdown(2)}>
                    <FontAwesomeIcon icon={faHandshakeSimple} />
                    <span>Events</span>
                </div>
                {openDropdownIndex === 2 && (
                    <div className={cx('dropdown-content')}>
                        <Link to={'/admin/addEvent'}>
                            <FontAwesomeIcon icon={faSquarePlus} />
                            <span>Add new Event</span>
                        </Link>
                        <Link to={'/admin/listEvents'}>
                            <FontAwesomeIcon icon={faRectangleList} />
                            <span>List of Events</span>
                        </Link>
                    </div>
                )}
            </div>
            <div className={cx('sidebar-item')}>
                <div className={cx('item-title')} onClick={() => toggleDropdown(3)}>
                    <FontAwesomeIcon icon={faNewspaper} />
                    <span>Press-reviews</span>
                </div>
                {openDropdownIndex === 3 && (
                    <div className={cx('dropdown-content')}>
                        <Link to={'/admin/addPressReview'}>
                            <FontAwesomeIcon icon={faSquarePlus} />
                            <span>Add new Press-Review</span>
                        </Link>
                        <Link to={'/admin/listPressReview'}>
                            <FontAwesomeIcon icon={faRectangleList} />
                            <span>List of Press-Review</span>
                        </Link>
                    </div>
                )}
            </div>
            <div className={cx('sidebar-item')}>
                <Link to={'/admin/listCategory'} className={cx('item-title')}>
                    <FontAwesomeIcon icon={faLayerGroup} />
                    <span>Categories</span>
                </Link>
            </div>
            <div className={cx('sidebar-item')}>
                <Link to={'/admin/listSlide'} className={cx('item-title')}>
                    <FontAwesomeIcon icon={faPanorama} />
                    <span>Slides</span>
                </Link>
            </div>
            <div className={cx('sidebar-item')}>
                <Link to={'/admin/adminContacts'} className={cx('item-title')}>
                    <FontAwesomeIcon icon={faAddressCard} />
                    <span>Contacts</span>
                </Link>
            </div>
            <div className={cx('sidebar-item')}>
                <Link to={'/admin/adminFeedback'} className={cx('item-title')}>
                    <FontAwesomeIcon icon={faRotate} />
                    <span>Feedback</span>
                </Link>
            </div>
            <div className={cx('sidebar-item')}>
                <Link to={'/admin/listComments'} className={cx('item-title')}>
                    <FontAwesomeIcon icon={faMessage} />
                    <span>Comments</span>
                </Link>
            </div>
            <div className={cx('sidebar-item')} onClick={logout}>
                <div className={cx('item-title')}>
                    <>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </>
                    <span>Log out</span>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;
