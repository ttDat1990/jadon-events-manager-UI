import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { categoryApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './AdminCategoriesList.module.scss';

const cx = classNames.bind(styles);

const AdminCategoriesList = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editCategoryId, setEditCategoryId] = useState(null);
    const [editedData, setEditedData] = useState({ title: '', name: '', image: null });
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(categoryApi);
                setCategories(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleEditClick = (categoryId) => {
        setEditCategoryId(categoryId);

        const categoryToEdit = categories.find((category) => category.id === categoryId);
        if (categoryToEdit) {
            setEditedData({
                title: categoryToEdit.title,
                name: categoryToEdit.name,
                image: null,
            });
        }
    };

    const handleCancelEdit = () => {
        setFormErrors('');
        setEditCategoryId(null);
        setEditedData({ title: '', name: '', image: null });
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

    const handleSaveEdit = async (categoryId, updatedData) => {
        try {
            const formData = new FormData();
            formData.append('title', updatedData.title);
            formData.append('name', updatedData.name);
            if (updatedData.image) {
                formData.append('image', updatedData.image);
            }

            const response = await axios.post(`${categoryApi}/${categoryId}`, formData);

            if (response.status === 200) {
                setFormErrors('');
                const response1 = await axios.get(categoryApi);
                setCategories(response1.data);
                setEditCategoryId(null);
                setEditedData({ title: '', name: '', image: null });
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
            <h2 className={cx('title')}>List of Categories</h2>
            {formErrors.general && <div className={cx('error-message')}>{formErrors.general}</div>}
            {loading ? (
                <div>Loading...</div>
            ) : (
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id}>
                                <td className={cx('id-column')}>{category.id}</td>
                                <td className={cx('title-column')}>
                                    {editCategoryId === category.id ? (
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
                                        category.title
                                    )}
                                </td>
                                <td className={cx('name-column')}>
                                    {editCategoryId === category.id ? (
                                        <div>
                                            <input
                                                type="text"
                                                value={editedData.name}
                                                onChange={(e) => handleEditChange('name', e.target.value)}
                                            />
                                            {formErrors.name && (
                                                <div className={cx('error-message')}>{formErrors.name}</div>
                                            )}
                                            {!formErrors.name && <div className={cx('error-message')}></div>}
                                        </div>
                                    ) : (
                                        category.name
                                    )}
                                </td>
                                <td className={cx('img-column')}>
                                    {editCategoryId === category.id ? (
                                        <div>
                                            <input type="file" accept="image/*" onChange={handleImageChange} />
                                            {formErrors.image && (
                                                <div className={cx('error-message')}>{formErrors.image}</div>
                                            )}
                                            {!formErrors.image && <div className={cx('error-message')}></div>}
                                        </div>
                                    ) : (
                                        category.img_url && (
                                            <img
                                                src={category.img_url}
                                                alt={category.name}
                                                width="100"
                                                className={cx('category-image')}
                                            />
                                        )
                                    )}
                                </td>
                                <td className={cx('action-container')}>
                                    {editCategoryId === category.id ? (
                                        <>
                                            <button
                                                onClick={() => handleSaveEdit(category.id, editedData)}
                                                className={cx('save-button')}
                                            >
                                                Save
                                            </button>
                                            <button onClick={handleCancelEdit} className={cx('cancel-button')}>
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => handleEditClick(category.id)}
                                            className={cx('edit-button')}
                                        >
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

export default AdminCategoriesList;
