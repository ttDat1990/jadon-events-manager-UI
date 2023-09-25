import React from 'react';
import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>
                        <p>ABOUT US</p>
                        <span>No idea where to start? Take Heart!</span>
                    </div>
                </div>
                <div className={cx('img-overlay')}></div>
                <img src="https://takeheartevents.com/wp-content/uploads/2019/06/TH-About-Header.jpg" alt="" />
            </div>
        </div>
    );
}

export default About;
