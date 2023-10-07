import React from 'react';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { categoryApi } from '~/components/ApiUrl';
import styles from './Social.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Social() {
    const [category, setCategory] = useState('');
    useEffect(() => {
        fetch(`${categoryApi}/3`)
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
                    Our social event planning services are perfect for the host/hostess that wants to be able to join in
                    and enjoy their party.
                </div>
                <p>
                    Social events are where Take Heart Events can really cut loose and let our creativity shine! We
                    would love to celebrate your next milestone with you! From your child’s birthday party, to your
                    annual holiday party, Take Heart! We have you covered!
                </p>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('about-image')}>
                    <img
                        src="https://takeheartevents.com/wp-content/uploads/2017/11/20161104_211244_IMG_0700-600x400.jpg"
                        alt=""
                    />
                </div>
                <div className={cx('about-info')}>
                    <div className={cx('about-info-title')}>SERVICES INCLUDE</div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Birthday Parties</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Bar and Bat Mitzvahs</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Anniversary Parties</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Quinceañeras</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Girls / Guys Night Out</span>
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
                        <span>Wine, Beer, and Spirit Tastings</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Bon Voyage & Welcome Home Parties</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Retirement Parties</span>
                    </div>
                    <div className={cx('about-info-list')}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>Reunions</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Social;
