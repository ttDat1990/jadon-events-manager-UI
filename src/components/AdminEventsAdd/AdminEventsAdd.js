import React, { useState } from 'react';
import { eventApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './AdminEventsAdd.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AdminEventsAdd() {
    const initialFormData = {
        name: '',
        start_date: '',
        end_date: '',
        category_id: '',
        user_id: '',
        images: [],
        add_ons: [],
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (event) => {
        const images = Array.from(event.target.files);
        setFormData({ ...formData, images });
    };

    const handleAddOnChange = (event, index) => {
        const { name, value } = event.target;
        const newAddOns = [...formData.add_ons];
        newAddOns[index][name] = value;
        setFormData({ ...formData, add_ons: newAddOns });
    };

    const handleAddOnAdd = () => {
        const newAddOns = [...formData.add_ons, { department: '', responsible: '' }];
        setFormData({ ...formData, add_ons: newAddOns });
    };

    const handleAddOnRemove = (index) => {
        const newAddOns = [...formData.add_ons];
        newAddOns.splice(index, 1);
        setFormData({ ...formData, add_ons: newAddOns });
    };

    const clearFormData = () => {
        setFormData(initialFormData);
    };

    const handleRemoveImage = (indexToRemove) => {
        const updatedImages = formData.images.filter((image, index) => index !== indexToRemove);
        setFormData({ ...formData, images: updatedImages });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('start_date', formData.start_date);
        formDataToSend.append('end_date', formData.end_date);
        formDataToSend.append('category_id', formData.category_id);
        formDataToSend.append('user_id', formData.user_id);
        formData.images.forEach((image, index) => {
            formDataToSend.append(`images[${index}]`, image);
        });

        formData.add_ons.forEach((addOn, index) => {
            formDataToSend.append(`add_ons[${index}][department]`, addOn.department);
            formDataToSend.append(`add_ons[${index}][responsible]`, addOn.responsible);
        });

        try {
            const response = await fetch(eventApi, {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.status === 200) {
                // Event created successfully
                // You can redirect or perform any other action here
                console.log('Event created successfully');
                clearFormData();
            } else {
                const data = await response.json();
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error('An error occurred:', error.message);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Create Event</h2>
            {errorMessage && <div className={cx('error-message')}>{errorMessage}</div>}
            <form onSubmit={handleSubmit} className={cx('form')}>
                {/* Form fields and inputs go here */}
                <div className={cx('form-group')}>
                    <label className={cx('label')}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={cx('input')}
                    />
                </div>
                <div className={cx('date')}>
                    <div className={cx('form-group')}>
                        <label className={cx('label')}>Start Date:</label>
                        <input
                            type="date"
                            name="start_date"
                            value={formData.start_date}
                            onChange={handleInputChange}
                            required
                            className={cx('input')}
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <label className={cx('label')}>End Date:</label>
                        <input
                            type="date"
                            name="end_date"
                            value={formData.end_date}
                            onChange={handleInputChange}
                            required
                            className={cx('input')}
                        />
                    </div>
                </div>
                <div className={cx('cate-user')}>
                    <div className={cx('form-group')}>
                        <label className={cx('label')}>Category ID:</label>
                        <input
                            type="number"
                            name="category_id"
                            value={formData.category_id}
                            onChange={handleInputChange}
                            required
                            className={cx('input')}
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <label className={cx('label')}>User ID:</label>
                        <input
                            type="number"
                            name="user_id"
                            value={formData.user_id}
                            onChange={handleInputChange}
                            required
                            className={cx('input')}
                        />
                    </div>
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor="images" className={cx('label-img')}>
                        Select Images
                    </label>
                    <input
                        type="file"
                        name="images"
                        id="images"
                        accept="image/jpeg, image/png, image/jpg, image/gif"
                        multiple
                        onChange={handleImageChange}
                        className={cx('input-img')}
                    />
                </div>
                <div className={cx('selected-images')}>
                    {formData.images.map((image, index) => (
                        <div key={index} className={cx('selected-image-container')}>
                            <img
                                src={URL.createObjectURL(image)}
                                alt={`Selected img ${index}`}
                                className={cx('selected-image')}
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveImage(index)}
                                className={cx('remove-image-button')}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    ))}
                </div>
                <div className={cx('add-ons')}>
                    <h3 className={cx('add-ons-title')}>Add-ons</h3>
                    {formData.add_ons.map((addOn, index) => (
                        <div key={index} className={cx('add-on')}>
                            <label className={cx('add-on-label')}>Department</label>
                            <input
                                type="text"
                                name="department"
                                value={addOn.department}
                                onChange={(e) => handleAddOnChange(e, index)}
                                className={cx('add-on-input')}
                            />
                            <label className={cx('add-on-label')}>Responsible</label>
                            <input
                                type="text"
                                name="responsible"
                                value={addOn.responsible}
                                onChange={(e) => handleAddOnChange(e, index)}
                                className={cx('add-on-input')}
                            />
                            <button
                                type="button"
                                onClick={() => handleAddOnRemove(index)}
                                className={cx('remove-button')}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddOnAdd} className={cx('add-button')}>
                        Add Add-on
                    </button>
                </div>
                <div className={cx('form-group')}>
                    <button type="submit" className={cx('submit-button')}>
                        Create Event
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AdminEventsAdd;
