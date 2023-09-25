import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AdminSidebar.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '~/components/AuthContext/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBox,
    faHouse,
    faRectangleList,
    faSignOutAlt,
    faSquarePlus,
    faTable,
} from '@fortawesome/free-solid-svg-icons';

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
                    <FontAwesomeIcon icon={faTable} />
                    <span>Users Manager</span>
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
                    <FontAwesomeIcon icon={faTable} />
                    <span>Events Manager</span>
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
                <Link to={'/admin/listCategory'} className={cx('item-title')}>
                    <FontAwesomeIcon icon={faBox} />
                    <span>Categories Manager</span>
                </Link>
            </div>
            <div className={cx('sidebar-item')}>
                <Link to={'/admin/listSlide'} className={cx('item-title')}>
                    <FontAwesomeIcon icon={faBox} />
                    <span>Slides Manager</span>
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
