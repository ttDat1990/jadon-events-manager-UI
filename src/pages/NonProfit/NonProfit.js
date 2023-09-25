import React from 'react';
import classNames from 'classnames/bind';
import styles from './NonProfit.module.scss';

const cx = classNames.bind(styles);

function NonProfit() {
    return (
        <div className={cx('container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>
                        <p>NON-PROFIT EVENTS</p>
                    </div>
                </div>
                <div className={cx('img-overlay')}></div>
                <img src="https://takeheartevents.com/wp-content/uploads/2019/06/TH-nonprofit-header.jpg" alt="" />
            </div>
        </div>
    );
}

export default NonProfit;
