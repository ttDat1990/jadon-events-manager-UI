import React from 'react';
import classNames from 'classnames/bind';
import styles from './HomeComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMartiniGlass, faPeopleGroup, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HomeComponent() {
    return (
        <div className={cx('home_container')}>
            <div className={cx('home_message')}>
                <div className={cx('home_preface')}>
                    <h1>Our Services</h1>
                    <h3>
                        Planning an event but no idea where to start? Jadon!{' '}
                        <i>
                            <FontAwesomeIcon icon={faHeart} />
                        </i>
                    </h3>
                    <p>
                        We have you covered. Jadon Events partners with local vendors to create fun, unique and
                        innovative events tailored just for you or your organization. We have a variety of event
                        planning experience; including weddings, social, corporate and non-profit events.
                    </p>
                </div>
                <div className={cx('home_values_container')}>
                    <div className={cx('home_values')}>
                        <div className={cx('home_values_icon')}>
                            <i>
                                <FontAwesomeIcon icon={faPeopleGroup} />
                            </i>
                        </div>
                        <h4>Corporate Events</h4>
                        <div className={cx('home_values_word')}>
                            <div>
                                <i className={cx('ti-minus')}></i>Product Launches
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Conferences
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Sale Events
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Trade Shows
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Customer Appreciation Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Team Building Workshops
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>More!
                            </div>
                        </div>
                    </div>
                    <div className={cx('home_values')}>
                        <div className={cx('home_values_icon')}>
                            <i>
                                <FontAwesomeIcon icon={faHeart} />
                            </i>
                        </div>
                        <h4>Non-Profit Events</h4>
                        <div className={cx('home_values_word')}>
                            <div>
                                <i className={cx('ti-minus')}></i>Galas
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Luncheons
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Award Dinners
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Walks & Runs
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Unique Fundraisers
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Fairs, Festivals & Expos
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>More!
                            </div>
                        </div>
                    </div>
                    <div className={cx('home_values')}>
                        <div className={cx('home_values_icon')}>
                            <i>
                                <FontAwesomeIcon icon={faMartiniGlass} />
                            </i>
                        </div>
                        <h4>Social Events</h4>
                        <div className={cx('home_values_word')}>
                            <div>
                                <i className={cx('ti-minus')}></i>Birthday Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Seasonal Celebrations
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Anniversary Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Going Away Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Girls / Guys Night Out
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Retirement Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>More!
                            </div>
                        </div>
                    </div>
                    <div className={cx('home_values')}>
                        <div className={cx('home_values_icon')}>
                            <i>
                                <FontAwesomeIcon icon={faGem} />
                            </i>
                        </div>
                        <h4>Weddings</h4>
                        <div className={cx('home_values_word')}>
                            <div>
                                <i className={cx('ti-minus')}></i>Ceremonies
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Receptions
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Engagement Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Bridal Showers
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Rehearsal Dinners
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>Bachelor/ Bachelorette Parties
                            </div>
                            <div>
                                <i className={cx('ti-minus')}></i>More!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('home_portfolio_gallery')}>
                <div className={cx('home_portfolio_gallery_section')}>
                    <h1>
                        Our Event Portfolio <a href="/"> View Event Gallery</a>
                    </h1>
                </div>
                <div className={cx('home_portfolio_gallery_link')}>
                    <a
                        className={cx('home_portfolio_gallery_img_link')}
                        href="https://takeheartevents.com/event-gallery/overture-2022/"
                    >
                        <div className={cx('home_portfolio_gallery_img', 'home_portfolio_gallery_img1')}>
                            <div className={cx('home_portfolio_gallery_img_overlay')}></div>
                            <span>Overtune 2022</span>
                        </div>
                    </a>
                    <a
                        className={cx('home_portfolio_gallery_img_link')}
                        href="https://takeheartevents.com/event-gallery/chili-bowl-2022-2/"
                    >
                        <div className={cx('home_portfolio_gallery_img', 'home_portfolio_gallery_img2')}>
                            <div className={cx('home_portfolio_gallery_img_overlay')}></div>
                            <span>New Smyrna NASCAR Roots FloRacing Fan Zone 2022</span>
                        </div>
                    </a>
                    <a
                        className={cx('home_portfolio_gallery_img_link')}
                        href="https://takeheartevents.com/event-gallery/chili-bowl-2022-2/"
                    >
                        <div className={cx('home_portfolio_gallery_img', 'home_portfolio_gallery_img3')}>
                            <div className={cx('home_portfolio_gallery_img_overlay')}></div>
                            <span>Tulsa Chili Bowl FloRacing Fan Zone 2022</span>
                        </div>
                    </a>
                    <a
                        className={cx('home_portfolio_gallery_img_link')}
                        href="https://takeheartevents.com/event-gallery/chili-bowl-2022-2/"
                    >
                        <div className={cx('home_portfolio_gallery_img', 'home_portfolio_gallery_img4')}>
                            <div className={cx('home_portfolio_gallery_img_overlay')}></div>
                            <span>BKL-FEST 2021</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className={cx('home_review')}>
                <div className={cx('home_review_icon')}>
                    <i>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                    </i>
                </div>
                <div className={cx('home_review_slide')}>
                    <div className={cx('home_review_slide_cmt')}>
                        <p>
                            I served on the event committee for a nonprofit fundraiser, and we hired Chelsea's company
                            for event planning. It was a large, complicated event, and we are a demanding group. She
                            listened well, was patient and calm, and executed beautifully. I highly recommend her
                            company.
                        </p>
                        <h5>Shelly</h5>
                    </div>
                </div>
                <div className={cx('home_review_btn')}>
                    <h4>How did we do? Leave us a review!</h4>
                    <a href="/">
                        <span>REVIEW US</span>
                        <i className={cx('fa-regular', 'fa-thumbs-up')}></i>
                    </a>
                </div>
            </div>
            <div className={cx('home_events_press')}>
                <div className={cx('home_events_press_flex')}>
                    <h1>Recent Events & Press</h1>
                    <div className={cx('home_events_title')}>
                        <li>
                            Bike MS 2014 <br />
                            (National MS Society)
                        </li>
                        <li>
                            Superhero Soiree 2019
                            <br />
                            (Child Abuse Net Work)
                        </li>
                        <li>
                            Somewhere in time 2016
                            <br />
                            (RSVP of Tusla)
                        </li>
                    </div>
                    <div className={cx('home_events_press_container')}>
                        <div className={cx('home_events_press_divide')}>
                            <a href="/">
                                <div
                                    className={cx('home_events_press_content_img', 'home_events_press_content_img1')}
                                ></div>
                            </a>
                            <div className={cx('home_events_press_content')}>
                                <div className={cx('home_events_press_content')}>
                                    <a className={cx('home_events_press_title')} href="/">
                                        Sustainable Tulsa Presents “Recharge”
                                    </a>
                                    <br />
                                    <a className={cx('home_events_press_link')} href="/">
                                        Jadon Events |
                                    </a>
                                    <a className={cx('home_events_press_link')} href="/">
                                        Press |
                                    </a>
                                    <a className={cx('home_events_press_link')} href="/">
                                        No Comments
                                    </a>
                                    <p className={cx('home_events_press_p')}>
                                        SEPTEMBER 14TH, 6:30PM (VIP COCKTAIL HOUR 5:30PM) CAIN'S BALLROOM 423 N. MAIN
                                        ST. 918-808-6576 WWW.SUSTAINABLETULSAINC.ORG Watch Full Video Here
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('home_events_press_divide')}>
                            <a href="/">
                                <div
                                    className={cx('home_events_press_content_img', 'home_events_press_content_img2')}
                                ></div>
                            </a>
                            <div className={cx('home_events_press_content')}>
                                <div className={cx('home_events_press_content')}>
                                    <a className={cx('home_events_press_title')} href="/">
                                        Sustainable Tulsa gets set to ‘Recharge’ with fundraiser at Cain’s Ballroom
                                    </a>
                                    <br />
                                    <a className={cx('home_events_press_link')} href="/">
                                        Jadon Events |
                                    </a>
                                    <a className={cx('home_events_press_link')} href="/">
                                        Press |
                                    </a>
                                    <a className={cx('home_events_press_link')} href="/">
                                        No Comments
                                    </a>
                                    <p className={cx('home_events_press_p')}>
                                        “Recharge” is designed to help guests explore the “Three Ps of Sustainability,”
                                        namely “people, profit and planet,” through an immersive…
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('home_events_press_divide')}>
                            <a href="/">
                                <div
                                    className={cx('home_events_press_content_img', 'home_events_press_content_img3')}
                                ></div>
                            </a>
                            <div className={cx('home_events_press_content')}>
                                <a className={cx('home_events_press_title')} href="/">
                                    WH Tulsa: Are You Smarter than a KIPPster? 2018
                                </a>
                                <br />
                                <a className={cx('home_events_press_link')} href="/">
                                    Jadon Events |
                                </a>
                                <a className={cx('home_events_press_link')} href="/">
                                    Press |
                                </a>
                                <a className={cx('home_events_press_link')} href="/">
                                    No Comments
                                </a>
                                <p className={cx('home_events_press_p')}>
                                    GET IN THE GAME! Be a part of our LIVE studio audience, as Tulsa’s top community
                                    leaders compete against KIPP…
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;
