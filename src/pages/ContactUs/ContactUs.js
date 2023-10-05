import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContactUs.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faThreads, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function ContactUs() {
    const emailAddress = 'thanhdattran.fly@gmail.com';
    const emailLink = `mailto:${emailAddress}`;

    const phoneNumber = '+84378353938';
    const phoneLink = `tel:${phoneNumber}`;

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
                            <h3>Our Location</h3>
                            <div className={cx('small_divide')}></div>
                            <div className={cx('contact_info_review_btn')}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d504.2376801748411!2d106.71365481497526!3d10.80640075915104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529ed00409f09%3A0x11f7708a5c77d777!2zQXB0ZWNoIENvbXB1dGVyIEVkdWNhdGlvbiAtIEjhu4cgVGjhu5FuZyDEkMOgbyB04bqhbyBM4bqtcCBUcsOsbmggVmnDqm4gUXXhu5FjIHThur8gQXB0ZWNo!5e0!3m2!1svi!2s!4v1696173508052!5m2!1svi!2s"
                                    title="Google Maps"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className={cx('iframeStyle')}
                                ></iframe>
                            </div>
                        </div>
                        <div className={cx('contact_info_phone')}>
                            <h3>Need to reach us by phone</h3>
                            <div className={cx('small_divide')}></div>
                            <div className={cx('contact_info_detail')}>
                                <a href="/">
                                    <FontAwesomeIcon icon={faMobileScreenButton} />
                                </a>
                                <a href={phoneLink}>Chelsea: +84-378-353938</a>
                                <a href={phoneLink}>Copy: +84-378-353938</a>
                            </div>
                        </div>
                        <div className={cx('contact_info_mail')}>
                            <h3>General & Vendor Inquiries</h3>
                            <div className={cx('small_divide')}></div>
                            <div className={cx('contact_info_detail')}>
                                <a href="/">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                                <a href={emailLink}>thanhdattran.fly@gmail.com</a>
                                <a href={emailLink}>thanhdattran.fly@gmail.com</a>
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
