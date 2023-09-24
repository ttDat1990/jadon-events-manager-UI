import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './NavigationBar.module.scss';
import { Link, useLocation } from 'react-router-dom';
const cx = classNames.bind(styles);
function NavigationBar() {
    const [isStickyStyle, setIsStickyStyle] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsStickyStyle(true);
            } else {
                setIsStickyStyle(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const isLinkActive = (path) => {
        return location.pathname === path;
    };

    const navbarClasses = cx('main-nav-container', {
        fadeIn: isStickyStyle,
        fadeOut: !isStickyStyle,
    });

    const navLink = (path) =>
        cx({
            'nav-link-sticky': isStickyStyle,
            'nav-link': !isStickyStyle,
            'nav-link-active': !isStickyStyle && isLinkActive(path),
            'nav-link-sticky-active': isStickyStyle && isLinkActive(path),
        });

    const name = cx({
        name: !isStickyStyle,
        'name-sticky': isStickyStyle,
    });

    const name1 = cx({
        'name-1': !isStickyStyle,
        'name-1-sticky': isStickyStyle,
    });

    const dropdownClasses = cx('dropdown-menu', {
        visible: isDropdownVisible,
    });

    return (
        <div className={navbarClasses}>
            <nav className={cx('navbar', 'grid')}>
                <ul className={cx('navbar-nav')}>
                    <li className={cx('nav-item')}>
                        <Link to="/" className={navLink('/')}>
                            HOME
                        </Link>
                    </li>

                    <li className={cx('nav-item')}>
                        <Link to={'/about'} className={navLink('/about')}>
                            ABOUT
                        </Link>
                    </li>

                    <li className={cx('nav-item')}>
                        <Link to={'/contact-us'} className={navLink('/contact-us')}>
                            CONTACT US
                        </Link>
                    </li>

                    <li className={cx('nav-item')}>
                        <Link to={'/feedback'} className={navLink('/feedback')}>
                            FEEDBACK
                        </Link>
                    </li>
                </ul>
                <Link to="/" className={cx('logo')}>
                    <div>
                        <div className={name}>JADON</div>
                        <div className={name1}>events</div>
                    </div>
                </Link>
                <ul className={cx('navbar-nav')}>
                    <li className={cx('nav-item')}>
                        <Link to={'/social'} className={navLink('/social')}>
                            SOCIAL
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={'/weddings'} className={navLink('/weddings')}>
                            WEDDINGS
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={'/non-profit'} className={navLink('/non-profit')}>
                            NON-PROFIT
                        </Link>
                    </li>
                    <li className={cx('nav-item', 'dropdown')}>
                        <Link
                            to={'/portfolio'}
                            className={navLink('/portfolio')}
                            onMouseEnter={toggleDropdown}
                            onMouseLeave={toggleDropdown}
                        >
                            PORTFOLIO
                        </Link>
                        <ul className={dropdownClasses}>
                            <li>
                                <Link className={cx('dropdown-item')} to={'/events-gallery'}>
                                    EVENT GALLERY
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('dropdown-item')} to={'/press'}>
                                    PRESS
                                </Link>
                            </li>
                            <li>
                                <a className={cx('dropdown-item')} href="/">
                                    POSTS
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationBar;
