import React from 'react';
import classNames from 'classnames/bind';
import styles from './Portfolio.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Portfolio() {
    return (
        <div className={cx('portfolio_container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>Portfolio</div>
                </div>
                <div className={cx('img-overlay')}></div>
                <img src="https://takeheartevents.com/wp-content/uploads/2019/01/WWMansion-13-of-123.jpg" alt="" />
            </div>
            <div className={cx('portfolio_1')}>
                <div className={cx('portfolio_left_right')}>
                    <div className={cx('portfolio_1_title')}>
                        <h1>Event Gallery // View Entire Gallery</h1>
                    </div>
                    <div className={cx('portfolio_1_img')}>
                        <a
                            className={cx('portfolio_img_link')}
                            href="https://takeheartevents.com/event-gallery/overture-2022/"
                        >
                            <div className={cx('portfolio_img', 'portfolio_img1')}>
                                <div className={cx('portfolio_img_overlay')}></div>
                            </div>
                            <span>Overtune 2022</span>
                        </a>
                        <a
                            className={cx('portfolio_img_link')}
                            href="https://takeheartevents.com/event-gallery/chili-bowl-2022-2/"
                        >
                            <div className={cx('portfolio_img', 'portfolio_img2')}>
                                <div className={cx('portfolio_img_overlay')}></div>
                            </div>
                            <span>New Smyrna NASCAR Roots FloRacing Fan Zone 2022</span>
                        </a>
                        <a
                            className={cx('portfolio_img_link')}
                            href="https://takeheartevents.com/event-gallery/chili-bowl-2022-2/"
                        >
                            <div className={cx('portfolio_img', 'portfolio_img3')}>
                                <div className={cx('portfolio_img_overlay')}></div>
                            </div>
                            <span>Tulsa Chili Bowl FloRacing Fan Zone 2022</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className={cx('portfolio_2')}>
                <div className={cx('portfolio_left_right')}>
                    <div className={cx('portfolio_2_title')}>
                        <h1>Press // View All Press</h1>
                    </div>
                    <div className={cx('portfolio_2_flex')}>
                        <div className={cx('portfolio_2_container')}>
                            <a href="/">
                                <div className={cx('portfolio_2_img', 'portfolio_2_img1')}></div>
                            </a>
                            <div className={cx('portfolio_2_content')}>
                                <div className={cx('portfolio_2_press')}>
                                    <a className={cx('portfolio_2_press_title')} href="/">
                                        Sustainable Tulsa Presents “Recharge”
                                    </a>
                                    <br />
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Jadon Events |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Press |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        No Comments
                                    </a>
                                    <p className={cx('portfolio_2_press_p')}>
                                        SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN'S BALLROOM 423 N. MAIN
                                        ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('portfolio_2_container')}>
                            <a href="/">
                                <div className={cx('portfolio_2_img', 'portfolio_2_img1')}></div>
                            </a>
                            <div className={cx('portfolio_2_content')}>
                                <div className={cx('portfolio_2_press')}>
                                    <a className={cx('portfolio_2_press_title')} href="/">
                                        Sustainable Tulsa Presents “Recharge”
                                    </a>
                                    <br />
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Jadon Events |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Press |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        No Comments
                                    </a>
                                    <p className={cx('portfolio_2_press_p')}>
                                        SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN'S BALLROOM 423 N. MAIN
                                        ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('portfolio_2_container')}>
                            <a href="/">
                                <div className={cx('portfolio_2_img', 'portfolio_2_img1')}></div>
                            </a>
                            <div className={cx('portfolio_2_content')}>
                                <div className={cx('portfolio_2_press')}>
                                    <a className={cx('portfolio_2_press_title')} href="/">
                                        Sustainable Tulsa Presents “Recharge”
                                    </a>
                                    <br />
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Jadon Events |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Press |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        No Comments
                                    </a>
                                    <p className={cx('portfolio_2_press_p')}>
                                        SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN'S BALLROOM 423 N. MAIN
                                        ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('portfolio_2_container')}>
                            <a href="/">
                                <div className={cx('portfolio_2_img', 'portfolio_2_img1')}></div>
                            </a>
                            <div className={cx('portfolio_2_content')}>
                                <div className={cx('portfolio_2_press')}>
                                    <a className={cx('portfolio_2_press_title')} href="/">
                                        Sustainable Tulsa Presents “Recharge”
                                    </a>
                                    <br />
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Jadon Events |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Press |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        No Comments
                                    </a>
                                    <p className={cx('portfolio_2_press_p')}>
                                        SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN'S BALLROOM 423 N. MAIN
                                        ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Lặp lại các phần tử portfolio_2_container cho các mục khác ở đây */}
                    </div>
                </div>
            </div>

            <div className={cx('portfolio_3')}>
                <div className={cx('portfolio_left_right')}>
                    <div className={cx('portfolio_2_title')}>
                        <h1>Blog Posts // View All Posts</h1>
                    </div>
                    <div className={cx('portfolio_2_flex')}>
                        <div className={cx('portfolio_2_container')}>
                            <a href="/">
                                <div className={cx('portfolio_2_img', 'portfolio_2_img1')}></div>
                            </a>
                            <div className={cx('portfolio_2_content')}>
                                <div className={cx('portfolio_2_press')}>
                                    <a className={cx('portfolio_2_press_title')} href="/">
                                        Sustainable Tulsa Presents “Recharge”
                                    </a>
                                    <br />
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Jadon Events |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Press |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        No Comments
                                    </a>
                                    <p className={cx('portfolio_2_press_p')}>
                                        SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN'S BALLROOM 423 N. MAIN
                                        ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('portfolio_2_container')}>
                            <a href="/">
                                <div className={cx('portfolio_2_img', 'portfolio_2_img1')}></div>
                            </a>
                            <div className={cx('portfolio_2_content')}>
                                <div className={cx('portfolio_2_press')}>
                                    <a className={cx('portfolio_2_press_title')} href="/">
                                        Sustainable Tulsa Presents “Recharge”
                                    </a>
                                    <br />
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Jadon Events |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Press |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        No Comments
                                    </a>
                                    <p className={cx('portfolio_2_press_p')}>
                                        SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN'S BALLROOM 423 N. MAIN
                                        ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('portfolio_2_container')}>
                            <a href="/">
                                <div className={cx('portfolio_2_img', 'portfolio_2_img1')}></div>
                            </a>
                            <div className={cx('portfolio_2_content')}>
                                <div className={cx('portfolio_2_press')}>
                                    <a className={cx('portfolio_2_press_title')} href="/">
                                        Sustainable Tulsa Presents “Recharge”
                                    </a>
                                    <br />
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Jadon Events |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Press |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        No Comments
                                    </a>
                                    <p className={cx('portfolio_2_press_p')}>
                                        SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN'S BALLROOM 423 N. MAIN
                                        ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('portfolio_2_container')}>
                            <a href="/">
                                <div className={cx('portfolio_2_img', 'portfolio_2_img1')}></div>
                            </a>
                            <div className={cx('portfolio_2_content')}>
                                <div className={cx('portfolio_2_press')}>
                                    <a className={cx('portfolio_2_press_title')} href="/">
                                        Sustainable Tulsa Presents “Recharge”
                                    </a>
                                    <br />
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Jadon Events |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        Press |
                                    </a>
                                    <a className={cx('portfolio_2_press_link')} href="/">
                                        No Comments
                                    </a>
                                    <p className={cx('portfolio_2_press_p')}>
                                        SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN'S BALLROOM 423 N. MAIN
                                        ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('portfolio_4')}>
                <div className={cx('portfolio_4_btn')}>
                    <h1>Ready to get to planning? Get in touch!</h1>
                    <a href="/">
                        <span className={cx('portfolio_4_btn_word')}>GET STARTED</span>
                        <i>
                            <FontAwesomeIcon icon={faComment} />
                        </i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
