import React, { useState } from 'react';
import { registerUrl } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import axios from 'axios';
import styles from './AdminUsersAdd.module.scss';

const cx = classNames.bind(styles);

function AdminUsersAdd() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const clearForm = () => {
        setFormData({
            name: '',
            email: '',
            password: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        try {
            const response = await axios.post(registerUrl, formData);

            if (!response.data || !response.data.user) {
                throw new Error('Error.');
            }

            setSuccessMessage('Create User successful');
            clearForm();

            setTimeout(() => {
                setSuccessMessage(null);
            }, 3000);
        } catch (err) {
            if (err.response && err.response.data && err.response.data.errors) {
                const errorMessages = err.response.data.errors;
                setError(errorMessages);
            } else {
                setError('Có lỗi xảy ra.');
            }
            // setTimeout(() => {
            //     setError(null);
            // }, 3000);
        }
    };

    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Create User</h2>
            {successMessage && <div className={cx('success-message')}>{successMessage}</div>}
            {!successMessage && <div className={cx('success-message')}></div>}
            <form onSubmit={handleSubmit}>
                <div className={cx('form-group')}>
                    <label className={cx('label')} htmlFor="name">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={cx('input')}
                    />
                </div>
                {error && <div className={cx('error-message')}>{error.name && <p>{error.name}</p>}</div>}
                {!error && <div className={cx('error-message')}></div>}
                <div className={cx('form-group')}>
                    <label className={cx('label')} htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={cx('input')}
                    />
                </div>
                {error && <div className={cx('error-message')}>{error.email && <p>{error.email}</p>}</div>}
                {!error && <div className={cx('error-message')}></div>}
                <div className={cx('form-group')}>
                    <label className={cx('label')} htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={cx('input')}
                    />
                </div>
                {error && <div className={cx('error-message')}>{error.password && <p>{error.password}</p>}</div>}
                {!error && <div className={cx('error-message')}></div>}
                <div>
                    <button type="submit" className={cx('submit-button')}>
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AdminUsersAdd;
