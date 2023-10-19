import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { slidesApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './AdminSlidesList.module.scss';

const cx = classNames.bind(styles);

const AdminSlidesList = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editSlideId, setEditSlideId] = useState(null);
    const [editedData, setEditedData] = useState({ title: '', content: '', image: null });
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await axios.get(slidesApi);
                setSlides(response.data.slides);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchSlides();
    }, []);

    const handleEditClick = (slideId) => {
        setEditSlideId(slideId);

        const slideToEdit = slides.find((slide) => slide.id === slideId);
        if (slideToEdit) {
            setEditedData({
                title: slideToEdit.title,
                content: slideToEdit.content,
                image: null,
            });
        }
    };

    const handleCancelEdit = (e) => {
        e.stopPropagation();
        setFormErrors('');
        setEditSlideId(null);
        setEditedData({ title: '', content: '', image: null });
    };

    const handleEditChange = (field, value) => {
        setEditedData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setEditedData((prevData) => ({
            ...prevData,
            image: file,
        }));
    };

    const handleSaveEdit = async (slideId, updatedData) => {
        try {
            const formData = new FormData();
            formData.append('title', updatedData.title);
            formData.append('content', updatedData.content);
            if (updatedData.image) {
                formData.append('image', updatedData.image);
            }

            const response = await axios.post(`${slidesApi}/${slideId}`, formData);

            if (response.status === 200) {
                setFormErrors('');
                const response1 = await axios.get(slidesApi);
                setSlides(response1.data.slides);
                setEditSlideId(null);
                setEditedData({ title: '', content: '', image: null });
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
            <h2 className={cx('title')}>List of Slides</h2>
            {formErrors.general && <div className={cx('error-message')}>{formErrors.general}</div>}
            {loading ? (
                <div>Loading...</div>
            ) : (
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slides.map((slide) => (
                            <tr
                                key={slide.id}
                                onClick={editSlideId !== null ? null : () => handleEditClick(slide.id)}
                                className={cx('list-content')}
                            >
                                <td className={cx('title-column')}>
                                    {editSlideId === slide.id ? (
                                        <div>
                                            <input
                                                type="text"
                                                value={editedData.title}
                                                onChange={(e) => handleEditChange('title', e.target.value)}
                                            />
                                            {formErrors.title && (
                                                <div className={cx('error-message')}>{formErrors.title}</div>
                                            )}
                                            {!formErrors.title && <div className={cx('error-message')}></div>}
                                        </div>
                                    ) : (
                                        slide.title
                                    )}
                                </td>
                                <td className={cx('name-column')}>
                                    {editSlideId === slide.id ? (
                                        <div>
                                            <input
                                                type="text"
                                                value={editedData.content}
                                                onChange={(e) => handleEditChange('content', e.target.value)}
                                            />
                                            {formErrors.content && (
                                                <div className={cx('error-message')}>{formErrors.content}</div>
                                            )}
                                            {!formErrors.content && <div className={cx('error-message')}></div>}
                                        </div>
                                    ) : (
                                        slide.content
                                    )}
                                </td>
                                <td className={cx('img-column')}>
                                    {editSlideId === slide.id ? (
                                        <div>
                                            <input type="file" accept="image/*" onChange={handleImageChange} />
                                            {formErrors.image && (
                                                <div className={cx('error-message')}>{formErrors.image}</div>
                                            )}
                                            {!formErrors.image && <div className={cx('error-message')}></div>}
                                        </div>
                                    ) : (
                                        slide.img_url && (
                                            <img
                                                src={slide.img_url}
                                                alt={slide.title}
                                                width="100"
                                                className={cx('slide-image')}
                                            />
                                        )
                                    )}
                                </td>

                                {editSlideId === slide.id && (
                                    <div className={cx('action-button1')}>
                                        <button
                                            onClick={() => handleSaveEdit(slide.id, editedData)}
                                            className={cx('save-button')}
                                        >
                                            Save
                                        </button>
                                        <button onClick={(e) => handleCancelEdit(e)} className={cx('cancel-button')}>
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminSlidesList;
