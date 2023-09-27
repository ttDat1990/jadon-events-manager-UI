import React from 'react';
import classNames from 'classnames/bind';
import styles from './Corporate.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Corporate() {
    return (
        <div className={cx('container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>
                        <p>CORPORATE EVENTS</p>
                    </div>
                </div>
                <div className={cx('img-overlay')}></div>
                <img src="https://takeheartevents.com/wp-content/uploads/2019/06/TH-corporate-header.jpg" alt="" />
            </div>
            <div className={cx('mid')}>
                <div>Let JADON Events help wow your employees, clients or potential customers at your next event.</div>
                <p>
                    Strategic development, measurability of event goals and objectives, and accountability, paired with
                    our innovative event designs are the driving force behind our corporate event planning techniques.
                    From your new product launch, to your next company retreat, Take Heart! We have you covered!
                </p>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('about-image')}>
                    <img src="https://takeheartevents.com/wp-content/uploads/2022/07/IMG_7476-600x400.jpeg" alt="" />
                </div>
                <div className={cx('about-info')}>
                    <div className={cx('about-info-title')}>SERVICES INCLUDE</div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Product Launches</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Conferences</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Sales Events</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Fan and VIP Zones</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Customer Appreciation Events</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Team Building</span>
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
                        <span>Award Dinners</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Trade-Shows</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Retirement Parties</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Corporate;
