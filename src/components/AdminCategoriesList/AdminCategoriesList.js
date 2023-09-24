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

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(categoryApi);
                setCategories(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                // Handle errors if necessary.
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleEditClick = (categoryId) => {
        setEditCategoryId(categoryId);

        // Initialize the editedData state with the current category data
        const categoryToEdit = categories.find((category) => category.id === categoryId);
        if (categoryToEdit) {
            setEditedData({
                title: categoryToEdit.title,
                name: categoryToEdit.name,
                image: null, // Set to null or the existing image URL if needed
            });
        }
    };

    const handleCancelEdit = () => {
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

            // Make an API call to update the category with the formData
            await axios.post(`${categoryApi}/${categoryId}`, formData);
            // Refresh the category list
            const response = await axios.get(categoryApi);
            setCategories(response.data);
            setEditCategoryId(null);
            setEditedData({ title: '', name: '', image: null });
        } catch (error) {
            console.error(error);
            // Handle errors if necessary.
        }
    };

    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>List of Categories</h2>
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
                                        <input
                                            type="text"
                                            value={editedData.title}
                                            onChange={(e) => handleEditChange('title', e.target.value)}
                                        />
                                    ) : (
                                        category.title
                                    )}
                                </td>
                                <td className={cx('name-column')}>
                                    {editCategoryId === category.id ? (
                                        <input
                                            type="text"
                                            value={editedData.name}
                                            onChange={(e) => handleEditChange('name', e.target.value)}
                                        />
                                    ) : (
                                        category.name
                                    )}
                                </td>
                                <td className={cx('img-column')}>
                                    {editCategoryId === category.id ? (
                                        <input type="file" accept="image/*" onChange={handleImageChange} />
                                    ) : (
                                        category.image_url && (
                                            <img
                                                src={category.image_url}
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
