import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { contactApi } from '~/components/ApiUrl';
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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company_name: '',
        event_type: '',
        date_start: '',
        content: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEventTypeChange = (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            event_type: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company_name: formData.company_name,
            event_type: formData.event_type,
            date_start: formData.date_start,
            content: formData.content,
        };

        axios
            .post(contactApi, requestBody)
            .then((response) => {
                if (response.status === 201) {
                    setSuccessMessage('Your contact is sent!');
                    setFormErrors('');
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company_name: '',
                        event_type: [],
                        date_start: '',
                        content: '',
                    });
                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 3000);
                } else {
                    const errorResponse = response.data;
                    if (errorResponse.errors) {
                        setFormErrors(errorResponse.errors);
                    } else {
                        throw new Error('Error.');
                    }
                }
            })
            .catch((err) => {
                if (err.response && err.response.data && err.response.data.errors) {
                    const errorMessages = err.response.data.errors;
                    setFormErrors(errorMessages);
                } else {
                    setFormErrors({ general: 'Errors!' });
                }
            });
    };

    return (
        <div className={cx('container')}>
            <div className={cx('form_container')}>
                <div className={cx('contact_form_content')}>
                    <h2 className={cx('contact_title')}>
                        To get started planning, please tell us a bit <br /> more about your event
                    </h2>
                    <div className={cx('contact_form_flex')}>
                        <div className={cx('contact_form')}>
                            {formErrors.general && <div className={cx('error-message')}>{formErrors.general}</div>}
                            {successMessage && <div className={cx('success-message')}>{successMessage}</div>}
                            {!successMessage && <div className={cx('success-message')}></div>}
                            <div className={cx('small_divide')}></div>
                            <div className={cx('small_divide')}></div>
                            <form onSubmit={handleSubmit}>
                                <div className={cx('contact_input_flex')}>
                                    <div className={cx('contact_input')}>
                                        <input
                                            type="text"
                                            placeholder="First or Full Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address*"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className={cx('error-container')}>
                                        {formErrors.name && (
                                            <div className={cx('error-message1')}>{formErrors.name}</div>
                                        )}
                                        {!formErrors.name && <div className={cx('error-message1')}></div>}
                                        {formErrors.email && (
                                            <div className={cx('error-message1')}>{formErrors.email}</div>
                                        )}
                                        {!formErrors.email && <div className={cx('error-message1')}></div>}
                                    </div>
                                    <div className={cx('contact_input')}>
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Company Name"
                                            name="company_name"
                                            value={formData.company_name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className={cx('error-container')}>
                                        {formErrors.phone && (
                                            <div className={cx('error-message1')}>{formErrors.phone}</div>
                                        )}
                                        {!formErrors.phone && <div className={cx('error-message1')}></div>}
                                        {formErrors.company_name && (
                                            <div className={cx('error-message1')}>{formErrors.company_name}</div>
                                        )}
                                        {!formErrors.company_name && <div className={cx('error-message1')}></div>}
                                    </div>
                                    <div className={cx('contact_event_type')}>
                                        <span>What Type Of Event Are You Planning ?</span>
                                        <div className={cx('contact_event_type_flex')}>
                                            <div>
                                                <input
                                                    type="radio"
                                                    name="event_type"
                                                    value="Wedding"
                                                    checked={formData.event_type === 'Wedding'}
                                                    onChange={handleEventTypeChange}
                                                />
                                                <span>Wedding</span>
                                            </div>
                                            <div>
                                                <input
                                                    type="radio"
                                                    name="event_type"
                                                    value="Non-Profit"
                                                    checked={formData.event_type === 'Non-Profit'}
                                                    onChange={handleEventTypeChange}
                                                />
                                                <span>Non-Profit</span>
                                            </div>
                                            <div>
                                                <input
                                                    type="radio"
                                                    name="event_type"
                                                    value="Corporate"
                                                    checked={formData.event_type === 'Corporate'}
                                                    onChange={handleEventTypeChange}
                                                />
                                                <span>Corporate</span>
                                            </div>
                                            <div>
                                                <input
                                                    type="radio"
                                                    name="event_type"
                                                    value="Social"
                                                    checked={formData.event_type === 'Social'}
                                                    onChange={handleEventTypeChange}
                                                />
                                                <span>Social</span>
                                            </div>
                                            <div>
                                                <input
                                                    type="radio"
                                                    name="event_type"
                                                    value="Other"
                                                    checked={formData.event_type === 'Other'}
                                                    onChange={handleEventTypeChange}
                                                />
                                                <span>Other</span>
                                            </div>
                                        </div>
                                        {formErrors.event_type && (
                                            <div className={cx('error-message1')}>{formErrors.event_type}</div>
                                        )}
                                        {!formErrors.event_type && <div className={cx('error-message1')}></div>}
                                    </div>
                                    <div className={cx('contact_date')}>
                                        <input
                                            type="date"
                                            placeholder="Date/Time of year preference"
                                            name="date_start"
                                            value={formData.date_start}
                                            onChange={handleInputChange}
                                        />
                                        {formErrors.date_start && (
                                            <div className={cx('error-message1')}>{formErrors.date_start}</div>
                                        )}
                                        {!formErrors.date_start && <div className={cx('error-message1')}></div>}
                                    </div>
                                    <div className={cx('contact_textarea')}>
                                        <textarea
                                            name="content"
                                            id="content"
                                            cols="30"
                                            rows="10"
                                            placeholder="Please explain the type of event you're wanting to host, be as detailed as you like!"
                                            value={formData.content}
                                            onChange={handleInputChange}
                                        ></textarea>
                                        {formErrors.content && (
                                            <div className={cx('error-message1')}>{formErrors.content}</div>
                                        )}
                                        {!formErrors.content && <div className={cx('error-message1')}></div>}
                                    </div>
                                    <div className={cx('contact_btn')}>
                                        <button type="submit">Send</button>
                                    </div>
                                </div>
                            </form>
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
