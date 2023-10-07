import React from 'react';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { categoryApi } from '~/components/ApiUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './NonProfit.module.scss';

const cx = classNames.bind(styles);

function NonProfit() {
    const [category, setCategory] = useState('');
    useEffect(() => {
        fetch(`${categoryApi}/4`)
            .then((response) => response.json())
            .then((data) => setCategory(data));
    }, []);
    return (
        <div className={cx('container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>
                        <p>{category.title}</p>
                    </div>
                </div>
                <div className={cx('img-overlay')}></div>
                <img src={category.img_url} alt={category.name} />
            </div>
            <div className={cx('mid')}>
                <div>
                    Non-profit events are one of our biggest passions and we have a variety of experience in the
                    non-profit sector.
                </div>
                <p>
                    We understand the important of raising funds and awareness for your organization through your
                    special events. We pride ourselves on creating unique event experiences that highlight all of the
                    amazing resources your organization has to offer.From your next gala, to your annual awareness walk,
                    Take Heart! We have you covered!
                </p>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('about-image')}>
                    <img src="	https://takeheartevents.com/wp-content/uploads/2014/09/IMG_9186-1-600x400.jpg" alt="" />
                </div>
                <div className={cx('about-info')}>
                    <div className={cx('about-info-title')}>SERVICES INCLUDE</div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Luncheons</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Galas</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Award Dinners</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Auctions</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Unique Fundraisers</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Walks / Runs</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Cycling Events</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Anniversary Events</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Fairs / Expos</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Team Building</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NonProfit;
