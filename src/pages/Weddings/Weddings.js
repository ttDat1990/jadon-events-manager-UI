import React from 'react';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { categoryApi } from '~/components/ApiUrl';
import styles from './Weddings.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Weddings() {
    const [category, setCategory] = useState('');
    useEffect(() => {
        fetch(`${categoryApi}/2`)
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
                <div>Planning you're wedding, but no idea where to start? Take Heart!</div>
                <p>
                    Whether you need a day-of coordinator or full service planning from your proposal to your big day,
                    we have you covered!
                </p>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('about-info')}>
                    <div className={cx('about-info-title')}>Full Service Planning</div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Unlimited consultations with client via telephone/email (when available)</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Full wedding planning timeline formation and management</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Budget formation and management</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Assistance with wedding design</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Vendor referrals</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Baby Showers</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Attendance at all vendor meetings (schedule permitting)</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Vendor management</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>All day-of wedding coordination services</span>
                    </div>
                </div>

                <div className={cx('about-info')}>
                    <div className={cx('about-info-title')}>Day of Coordination</div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>2 hours of professional in-person consultation</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Venue walkthrough prior to wedding</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Contract reviews of all vendors</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Vendor confirmation and management</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Development of a detailed wedding day timeline and layout</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Assistance with wedding set-up and tear down</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>On-site coordination and management at venue(s) on day of wedding</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Wedding rehearsal facilitation (2 hours max on site)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weddings;
