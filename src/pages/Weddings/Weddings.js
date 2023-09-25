import React from 'react';
import classNames from 'classnames/bind';
import styles from './Weddings.module.scss';

const cx = classNames.bind(styles);

function Weddings() {
    return (
        <div className={cx('container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>
                        <p>WEDDING PLANNING</p>
                    </div>
                </div>
                <div className={cx('img-overlay')}></div>
                <img
                    src="https://takeheartevents.com/wp-content/uploads/2019/01/WWMansion-13-of-123.jpg
"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Weddings;
