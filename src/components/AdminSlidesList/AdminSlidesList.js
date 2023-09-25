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

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await axios.get(slidesApi);
                setSlides(response.data.slides);
                setLoading(false);
            } catch (error) {
                console.error(error);
                // Handle errors if necessary.
                setLoading(false);
            }
        };

        fetchSlides();
    }, []);

    const handleEditClick = (slideId) => {
        setEditSlideId(slideId);

        // Initialize the editedData state with the current slide data
        const slideToEdit = slides.find((slide) => slide.id === slideId);
        if (slideToEdit) {
            setEditedData({
                title: slideToEdit.title,
                content: slideToEdit.content,
                image: null, // Set to null or the existing image URL if needed
            });
        }
    };

    const handleCancelEdit = () => {
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

            // Make an API call to update the slide with the formData
            await axios.post(`${slidesApi}/${slideId}`, formData);
            // Refresh the slide list
            const response = await axios.get(slidesApi);
            setSlides(response.data.slides);
            setEditSlideId(null);
            setEditedData({ title: '', content: '', image: null });
        } catch (error) {
            console.error(error);
            // Handle errors if necessary.
        }
    };

    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>List of Slides</h2>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slides.map((slide) => (
                            <tr key={slide.id}>
                                <td className={cx('id-column')}>{slide.id}</td>
                                <td className={cx('title-column')}>
                                    {editSlideId === slide.id ? (
                                        <input
                                            type="text"
                                            value={editedData.title}
                                            onChange={(e) => handleEditChange('title', e.target.value)}
                                        />
                                    ) : (
                                        slide.title
                                    )}
                                </td>
                                <td className={cx('name-column')}>
                                    {editSlideId === slide.id ? (
                                        <input
                                            type="text"
                                            value={editedData.content}
                                            onChange={(e) => handleEditChange('content', e.target.value)}
                                        />
                                    ) : (
                                        slide.content
                                    )}
                                </td>
                                <td className={cx('img-column')}>
                                    {editSlideId === slide.id ? (
                                        <input type="file" accept="image/*" onChange={handleImageChange} />
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
                                <td className={cx('action-container')}>
                                    {editSlideId === slide.id ? (
                                        <>
                                            <button
                                                onClick={() => handleSaveEdit(slide.id, editedData)}
                                                className={cx('save-button')}
                                            >
                                                Save
                                            </button>
                                            <button onClick={handleCancelEdit} className={cx('cancel-button')}>
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <button onClick={() => handleEditClick(slide.id)} className={cx('edit-button')}>
                                            Edit
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminSlidesList;
