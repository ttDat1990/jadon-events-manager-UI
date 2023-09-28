import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { pressReviewApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './PressDetail.module.scss';

const cx = classNames.bind(styles);

function PressDetail() {
    const [pressData, setPressData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios
                .get(`${pressReviewApi}/${id}`)
                .then((response) => {
                    setPressData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching event data:', error);
                    setErrorMessage(error);
                });
        }
    }, [id]);
    if (pressData === null) {
        return (
            <div className={cx('container')}>
                <h2 className={cx('title')}>Loading Event Details...</h2>
            </div>
        );
    }
    return (
        <div className={cx('container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>{pressData.title}</div>
                    <span>
                        By {pressData.author} ---{' '}
                        {new Date(pressData.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </span>
                </div>
                <div className={cx('img-overlay')}></div>
                <img src={pressData.img_url} alt="img press" />
            </div>
            <div className={cx('content-container')}>
                {errorMessage && <div className={cx('error-message')}>{errorMessage}</div>}
                <div className={cx('content')} dangerouslySetInnerHTML={{ __html: pressData.content }}></div>
            </div>
        </div>
    );
}

export default PressDetail;
