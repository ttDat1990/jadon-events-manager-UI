import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContactUs.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faThreads, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function ContactUs() {
    return (
        <div className={cx('container')}>
            <div className={cx('form_container')}>
                <div className={cx('contact_form_content')}>
                    <h2 className={cx('contact_title')}>
                        To get started planning, please tell us a bit <br /> more about your event
                    </h2>
                    <div className={cx('contact_form_flex')}>
                        <div className={cx('contact_form')}>
                            <div className={cx('small_divide')}></div>
                            <div className={cx('small_divide')}></div>
                            <div className={cx('contact_input_flex')}>
                                <div className={cx('contact_input')}>
                                    <input type="text" placeholder="First or Full Name" required />
                                    <input type="mail" placeholder="Email Address*" required />
                                </div>
                                <div className={cx('contact_input')}>
                                    <input type="text" placeholder="Phone Number" required />
                                    <input type="text" placeholder="Company Name" required />
                                </div>
                                <div className={cx('contact_event_type')}>
                                    <span>What Type Of Event Are You Planning ?</span>
                                    <div className={cx('contact_event_type_flex')}>
                                        <div>
                                            <input type="checkbox" />
                                            <span>Wedding</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <span>Non-Profit</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <span>Social Event</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <span>Corporate Event</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" />
                                            <span>Other</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('contact_date')}>
                                    <input type="text" placeholder="Date/Time of year preference" />
                                </div>
                                <div className={cx('contact_textarea')}>
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"
                                        placeholder="Please explain the type of event you're wanting to host, be as detailed as you like!"
                                    ></textarea>
                                </div>
                                <div className={cx('contact_word')}>
                                    <h3>GP2C</h3>
                                </div>
                                <div className={cx('contact_captcha')}>
                                    <input type="text" placeholder="Enter Captcha Here*" />
                                </div>
                                <div className={cx('contact_btn')}>
                                    <button>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('img_container')}>
                <div className={cx('contact_img')}></div>
            </div>
            <div className={cx('contact_container')}>
                <div className={cx('contact_content')}>
                    <div className={cx('contact_info')}>
                        <div className={cx('contact_info_review')}>
                            <h3>How did we do? Leave us a review!</h3>
                            <div className={cx('small_divide')}></div>
                            <div className={cx('contact_info_review_btn')}>
                                <button>Review us</button>
                            </div>
                        </div>
                        <div className={cx('contact_info_phone')}>
                            <h3>Need to reach us by phone</h3>
                            <div className={cx('small_divide')}></div>
                            <div className={cx('contact_info_detail')}>
                                <a href="/">
                                    <FontAwesomeIcon icon={faMobileScreenButton} />
                                </a>
                                <a href="/">Chelsea: 918-695-6958</a>
                                <a href="/">Copy: 918-260-6624</a>
                            </div>
                        </div>
                        <div className={cx('contact_info_mail')}>
                            <h3>General & Vendor Inquiries</h3>
                            <div className={cx('small_divide')}></div>
                            <div className={cx('contact_info_detail')}>
                                <a href="/">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                                <a href="/">chelsea@jadonevents.com</a>
                                <a href="/">copy@takeheartevents.com</a>
                            </div>
                        </div>
                        <div className={cx('contact_info_social')}>
                            <h3>Connect with us</h3>
                            <div className={cx('small_divide')}></div>
                            <div className={cx('contact_info_social_icon')}>
                                <a href="/">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faThreads} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
