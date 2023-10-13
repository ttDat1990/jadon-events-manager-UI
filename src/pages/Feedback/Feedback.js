import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import classNames from 'classnames/bind';
import { feedbackApi } from '~/components/ApiUrl';
import styles from './Feedback.module.scss';

const cx = classNames.bind(styles);

function Feedback() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        content: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaValue) {
            alert('Please complete the CAPTCHA to submit your comment.');
            return;
        }

        const requestBody = {
            name: formData.name,
            email: formData.email,
            content: formData.content,
            captchaValue: captchaValue,
        };

        axios
            .post(feedbackApi, requestBody)
            .then((response) => {
                if (response.status === 201) {
                    setSuccessMessage('Your feedback is sent!');
                    setFormErrors('');
                    setFormData({
                        name: '',
                        email: '',
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
                    <h2 className={cx('contact_title')}>Help Us improve</h2>
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
                                    <div className={cx('contact_textarea')}>
                                        <textarea
                                            name="content"
                                            id="content"
                                            cols="30"
                                            rows="10"
                                            placeholder="Your Feedback content"
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
                                        <ReCAPTCHA
                                            sitekey="6LcoRJMoAAAAAPbwgdOax4fJN6oqOCbyxijTJw6T"
                                            onChange={handleCaptchaChange}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('img_container')}>
                <div className={cx('overlay')}></div>
            </div>
        </div>
    );
}

export default Feedback;
