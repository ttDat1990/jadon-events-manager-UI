import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { pressReviewApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './PressReview.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function PressReview() {
    const [presses, setPresses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pressName, setPressName] = useState('');
    const [author, setAuthor] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pressPerPage] = useState(12);
    const [totalPress, setTotalPress] = useState(0);
    const [pages, setPages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${pressReviewApi}?name=${pressName}&author=${author}&page=${currentPage}&per_page=${pressPerPage}`,
                );
                setPresses(response.data.data);
                setTotalPress(response.data.total);
                setIsLoading(false);

                const totalPages = Math.ceil(totalPress / pressPerPage);
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
    }, [currentPage, pressPerPage, totalPress, pressName, author]);

    const handleDetail = (id) => {
        navigate(`/press-details/${id}`);
    };

    const handlePressNameChange = (e) => {
        setPressName(e.target.value);
        setCurrentPage(1);
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
        setCurrentPage(1);
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className={cx('container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>Press - Review</div>
                </div>
                <div className={cx('img-overlay')}></div>
                <img src="https://takeheartevents.com/wp-content/uploads/2019/01/WWMansion-13-of-123.jpg" alt="" />
            </div>
            <div className={cx('content-container')}>
                <div className={cx('filter-bar')}>
                    <input
                        type="text"
                        placeholder="Search by Title"
                        value={pressName}
                        onChange={handlePressNameChange}
                    />
                    <input type="text" placeholder="Search by Author" value={author} onChange={handleAuthorChange} />
                </div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className={cx('items-container')}>
                        {presses.map((press) => (
                            <div key={press.id} className={cx('item-detail')}>
                                <div className={cx('item-image')}>
                                    <img src={press.img_url} alt={press.title} />
                                    <div className={cx('overlay')}></div>
                                </div>
                                <div className={cx('item-button')}>
                                    <button onClick={() => handleDetail(press.id)}>More Details</button>
                                </div>
                                <div className={cx('item-name')}>
                                    <div>{press.title}</div>
                                    <div>By {press.author}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
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
        </div>
    );
}

export default PressReview;
