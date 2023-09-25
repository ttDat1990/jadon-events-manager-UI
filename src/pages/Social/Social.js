import React from 'react';
import classNames from 'classnames/bind';
import styles from './Social.module.scss';

const cx = classNames.bind(styles);

function Social() {
    return (
        <div className={cx('container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>
                        <p>SOCIAL EVENTS</p>
                    </div>
                </div>
                <div className={cx('img-overlay')}></div>
                <img
                    src="https://takeheartevents.com/wp-content/uploads/2019/07/TH-social-header2.jpg
"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Social;
