import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { eventApi, categoryApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './AdminEventsDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AdminEventsDetail() {
    const [formData, setFormData] = useState({
        name: '',
        start_date: '',
        end_date: '',
        category_id: '',
        user_id: '',
        images: [],
        add_ons: [],
    });
    const [categories, setCategories] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const { id } = useParams(); // Get the event ID from the URL params

    useEffect(() => {
        // Fetch categories from API and set them in the state
        fetch(categoryApi)
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }, []);

    useEffect(() => {
        // Fetch event data for the specified event ID when the component mounts
        if (id) {
            axios
                .get(`${eventApi}/${id}`)
                .then((response) => {
                    setFormData(response.data); // Set the form data with the fetched event data
                })
                .catch((error) => {
                    console.error('Error fetching event data:', error);
                });
        }
    }, [id]);

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

    const handleRemoveImage = (indexToRemove) => {
        const updatedImages = formData.images.filter((image, index) => index !== indexToRemove);
        setFormData({ ...formData, images: updatedImages });
    };

    const checkInputStatus = () => {
        const selectedFiles = document.getElementById('images').files;

        if (selectedFiles.length > 0) {
            // Files have been selected
            return true;
        } else {
            // No files have been selected
            return false;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('start_date', formData.start_date);
        formDataToSend.append('end_date', formData.end_date);
        formDataToSend.append('category_id', formData.category_id);
        formDataToSend.append('user_id', formData.user_id);

        const newImagesSelected = checkInputStatus();

        if (newImagesSelected) {
            formData.images.forEach((image, index) => {
                formDataToSend.append(`images[${index}]`, image);
            });
        }

        formData.add_ons.forEach((addOn, index) => {
            formDataToSend.append(`add_ons[${index}][department]`, addOn.department);
            formDataToSend.append(`add_ons[${index}][responsible]`, addOn.responsible);
        });

        try {
            const response = await axios.post(`${eventApi}/${id}`, formDataToSend);

            if (response.status === 200) {
                setFormErrors('');
                setSuccessMessage('Event updated successfully');
                setTimeout(() => {
                    setSuccessMessage('');
                    window.history.back();
                }, 2000);
            } else {
                const errorResponse = response.data;
                if (errorResponse.errors) {
                    setFormErrors(errorResponse.errors);
                } else {
                    throw new Error('Error.');
                }
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.errors) {
                const errorMessages = err.response.data.errors;
                setFormErrors(errorMessages);
            } else {
                setFormErrors({ general: 'Errors!' });
            }
        }
    };

    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Update Event</h2>
            {formErrors.general && <div className={cx('error-message')}>{formErrors.general}</div>}
            {successMessage && <div className={cx('success-message')}>{successMessage}</div>}
            {!successMessage && <div className={cx('success-message')}></div>}
            <form onSubmit={handleSubmit} className={cx('form')}>
                <div className={cx('form-group')}>
                    <label className={cx('label')}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={cx('input')}
                    />
                    {formErrors.name && <div className={cx('error-message')}>{formErrors.name}</div>}
                    {!formErrors.name && <div className={cx('error-message')}></div>}
                </div>
                <div className={cx('date')}>
                    <div className={cx('form-group')}>
                        <label className={cx('label')}>Start Date:</label>
                        <input
                            type="date"
                            name="start_date"
                            value={formData.start_date}
                            onChange={handleInputChange}
                            className={cx('input')}
                        />
                        {formErrors.start_date && <div className={cx('error-message')}>{formErrors.start_date}</div>}
                        {!formErrors.start_date && <div className={cx('error-message')}></div>}
                    </div>
                    <div className={cx('form-group')}>
                        <label className={cx('label')}>End Date:</label>
                        <input
                            type="date"
                            name="end_date"
                            value={formData.end_date}
                            onChange={handleInputChange}
                            className={cx('input')}
                        />
                        {formErrors.end_date && <div className={cx('error-message')}>{formErrors.end_date}</div>}
                        {!formErrors.end_date && <div className={cx('error-message')}></div>}
                    </div>
                </div>
                <div className={cx('cate-user')}>
                    <div className={cx('form-group')}>
                        <label className={cx('label')}>Category ID:</label>
                        <select
                            name="category_id"
                            value={formData.category_id}
                            onChange={handleInputChange}
                            className={cx('input')}
                        >
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {formErrors.category_id && <div className={cx('error-message')}>{formErrors.category_id}</div>}
                        {!formErrors.category_id && <div className={cx('error-message')}></div>}
                    </div>
                    <div className={cx('form-group')}>
                        <label className={cx('label')}>User ID:</label>
                        <input
                            type="number"
                            name="user_id"
                            value={formData.user_id}
                            onChange={handleInputChange}
                            className={cx('input')}
                        />
                        {formErrors.user_id && <div className={cx('error-message')}>{formErrors.user_id}</div>}
                        {!formErrors.user_id && <div className={cx('error-message')}></div>}
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
                    {formData.images &&
                        formData.images.map((image, index) => (
                            <div key={index} className={cx('selected-image-container')}>
                                <img
                                    src={image.image_url || URL.createObjectURL(image)}
                                    alt={`Selected img ${index}`}
                                    className={cx('selected-image')}
                                />
                                {checkInputStatus() && (
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(index)}
                                        className={cx('remove-image-button')}
                                    >
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                )}
                            </div>
                        ))}
                </div>
                {Object.keys(formErrors).map(
                    (key, index) =>
                        key.startsWith('images.') && (
                            <div key={index} className={cx('error-message')}>
                                {formErrors[key][0]}
                            </div>
                        ),
                )}
                <div className={cx('add-ons')}>
                    <h3 className={cx('add-ons-title')}>Add-ons</h3>
                    {formData.add_ons &&
                        formData.add_ons.map((addOn, index) => (
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
                        Update Event
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AdminEventsDetail;
