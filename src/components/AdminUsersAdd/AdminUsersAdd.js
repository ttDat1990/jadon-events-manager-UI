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

            // Tự động ẩn thông báo successMessage sau 3 giây
            setTimeout(() => {
                setSuccessMessage(null);
            }, 3000);
        } catch (err) {
            setError(err.message);

            // Tự động ẩn thông báo error sau 3 giây
            setTimeout(() => {
                setError(null);
            }, 3000);
        }
    };

    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Create User</h2>
            {error && <div className={cx('error-message')}>{error}</div>}
            {successMessage && <div className={cx('success-message')}>{successMessage}</div>}
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
                        required
                        className={cx('input')}
                    />
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('label')} htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={cx('input')}
                    />
                </div>
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
                        required
                        className={cx('input')}
                    />
                </div>
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
