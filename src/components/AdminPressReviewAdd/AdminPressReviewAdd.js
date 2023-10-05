import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { pressReviewApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './AdminPressReviewAdd.module.scss';

const cx = classNames.bind(styles);

function AdminPressReviewAdd() {
    const initialFormData = {
        title: '',
        content: '',
        author: '',
        image: null,
        imageURL: '',
    };
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const imageURL = URL.createObjectURL(selectedImage);
            setFormData({ ...formData, image: selectedImage, imageURL });
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            content: '',
            author: '',
            image: null,
            imageURL: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { title, content, author, image } = formData;

        // Tạo FormData để gửi dữ liệu hình ảnh
        const formDataToSend = new FormData();
        formDataToSend.append('title', title);
        formDataToSend.append('content', content);
        formDataToSend.append('author', author);
        formDataToSend.append('image', image);

        axios
            .post(pressReviewApi, formDataToSend)
            .then((response) => {
                if (response.status === 200) {
                    setFormErrors('');
                    setSuccessMessage('Event created successfully');
                    resetForm();
                    setTimeout(() => {
                        setSuccessMessage('');
                        navigate('/admin/listPressReview');
                    }, 2000);
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
            <h2 className={cx('title')}>Create Press Review</h2>
            {formErrors.general && <div className={cx('error-message')}>{formErrors.general}</div>}
            {successMessage && <div className={cx('success-message')}>{successMessage}</div>}
            {!successMessage && <div className={cx('success-message')}></div>}
            <form onSubmit={handleSubmit} className={cx('form')}>
                <div className={cx('form-group')}>
                    <label className={cx('label')}>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className={cx('input')}
                    />
                    {formErrors.title && <div className={cx('error-message')}>{formErrors.title}</div>}
                    {!formErrors.title && <div className={cx('error-message')}></div>}
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('label')}>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        className={cx('input')}
                    />
                    {formErrors.author && <div className={cx('error-message')}>{formErrors.author}</div>}
                    {!formErrors.author && <div className={cx('error-message')}></div>}
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor="images" className={cx('label-img')}>
                        Select Image
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="images"
                        accept="image/*"
                        onChange={handleImageChange}
                        className={cx('input-img')}
                    />
                </div>
                {formData.imageURL && (
                    <div className={cx('form-group')}>
                        <img src={formData.imageURL} alt="Selected img" className={cx('selected-image')} />
                    </div>
                )}
                {formErrors.image && <div className={cx('error-message')}>{formErrors.image}</div>}
                {!formErrors.image && <div className={cx('error-message')}></div>}
                <div className={cx('form-group')}>
                    <label className={cx('label')}>Content:</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={formData.content}
                        onChange={(event, editor) => {
                            const editorData = editor.getData();
                            setFormData({ ...formData, content: editorData });
                        }}
                        className={cx('input-text')}
                    />
                    {formErrors.content && <div className={cx('error-message')}>{formErrors.content}</div>}
                    {!formErrors.content && <div className={cx('error-message')}></div>}
                </div>
                <div>
                    <button type="submit" className={cx('submit-button')}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AdminPressReviewAdd;
