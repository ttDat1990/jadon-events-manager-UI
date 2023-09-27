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
            <div className={cx('mid')}>
                <div>JADON Events is your one stop event planning and design company.</div>
                <p>
                    We were established in 2012 and we know our stuff! Whether it’s your wedding, your child’s birthday
                    party or your non-profit’s next big fundraising gala, take heart! We have you covered. If you have
                    any questions, please inquire. We would love to plan your next event!
                </p>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('about-image')}>
                    <img src="https://takeheartevents.com/wp-content/uploads/2019/06/TH-About-Headshot.jpg" alt="" />
                </div>
                <div className={cx('about-info')}>
                    <div>ABOUT YOUR EVENT PLANNING TEAM</div>
                    <p>
                        Chelsea McGuire Kester is the president and founder of Take Heart Events. Chelsea is an OSU
                        alumni with a degree in Advertising and PR. She is also a TCC Business Model Launch Program
                        alumni (2012) and the recipient of a 2012 Tulsey Award for Young Entrepreneur of the Year for
                        her work with Take Heart Events. Recently Chelsea was elected as the 2020 Chair of TYPros.
                        Chelsea is passionate about helping local businesses and organizations connect with new
                        potential customers, donors and followers through special events. She also loves to create
                        moments that will last a life time through her social events. It is because of her passion, and
                        her advanced experience in event planning, design and marketing, that she launched Take Heart
                        Events.
                    </p>
                    <p>
                        Cory Kester joined Take Heart Events in early 2016 after completing 20 successful years in
                        hospitality management. His background gives Cory an in depth perspective on food/beverage and
                        event logistics, and the ability to provide an exceptional guest experience.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
