import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ModalSlideShow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ModalSlideShow = ({ imagePaths, children, buttonClassName }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1));
    };

    const modalClasses = cx({
        modal: true,
        visible: modalIsOpen,
    });

    const overlayClasses = cx({
        overlay: true,
        visible: modalIsOpen,
    });

    return (
        <div className={buttonClassName}>
            {children && <div onClick={openModal}>{children}</div>}
            <div className={overlayClasses} onClick={closeModal}></div>

            <div className={modalClasses}>
                <button onClick={closeModal} className={cx('closeButton')}>
                    Close
                </button>
                <button onClick={goToPrevious} className={cx('prevButton')}>
                    <FontAwesomeIcon icon={faChevronLeft} /> Previous
                </button>
                <img src={imagePaths[currentIndex].image_url} alt={`Slide ${currentIndex + 1}`} />
                <button onClick={goToNext} className={cx('nextButton')}>
                    Next <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};

export default ModalSlideShow;
