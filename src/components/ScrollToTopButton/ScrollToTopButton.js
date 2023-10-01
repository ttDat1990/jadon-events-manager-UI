import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';
import classNames from 'classnames/bind';
import styles from './ScrollToTopButton.module.scss';

const cx = classNames.bind(styles);

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
        });
    };

    useEffect(() => {
        const checkScrollPosition = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', checkScrollPosition);
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    return (
        <button className={cx('scroll-to-top-button', { visible: isVisible })} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
    );
}

export default ScrollToTopButton;
