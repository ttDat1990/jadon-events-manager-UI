import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { pressReviewApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './AdminPressReviewUpdate.module.scss';

const cx = classNames.bind(styles);

function AdminPressReviewUpdate() {
    const { id } = useParams();
    const [imageFile, setImageFile] = useState(null);
    const [previewImage, setPreviewImage] = useState('');
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const [pressReview, setPressReview] = useState({
        title: '',
        author: '',
        image: '',
        content: '',
    });

    useEffect(() => {
        axios
            .get(`${pressReviewApi}/${id}`)
            .then((response) => {
                setPressReview(response.data);
                setPreviewImage(response.data.img_url);
            })
            .catch((error) => {
                console.error('Lỗi:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPressReview({
            ...pressReview,
            [name]: value,
        });
    };

    const handleContentChange = (editorData) => {
        setPressReview({
            ...pressReview,
            content: editorData,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        setPreviewImage(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Tạo FormData để gửi dữ liệu cập nhật
        const formDataToSend = new FormData();
        formDataToSend.append('title', pressReview.title);
        formDataToSend.append('author', pressReview.author);
        formDataToSend.append('content', pressReview.content);

        // Kiểm tra nếu có hình ảnh mới được chọn, thì thêm vào FormData
        if (imageFile) {
            formDataToSend.append('image', imageFile);
        }

        try {
            const response = await axios.post(`${pressReviewApi}/${id}`, formDataToSend);
            if (response.status === 200) {
                setFormErrors('');
                setSuccessMessage('Event updated successfully');
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
            <h2 className={cx('title')}>Update Press Review</h2>
            {formErrors.general && <div className={cx('error-message')}>{formErrors.general}</div>}
            {successMessage && <div className={cx('success-message')}>{successMessage}</div>}
            {!successMessage && <div className={cx('success-message')}></div>}
            <form onSubmit={handleSubmit} className={cx('form')}>
                <div className={cx('form-group')}>
                    <label className={cx('label')}>Title:</label>
                    <input
                        type="text"
                        name="title"
                        className={cx('input')}
                        value={pressReview.title}
                        onChange={handleChange}
                    />
                    {formErrors.title && <div className={cx('error-message')}>{formErrors.title}</div>}
                    {!formErrors.title && <div className={cx('error-message')}></div>}
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('label')}>Author:</label>
                    <input
                        type="text"
                        name="author"
                        className={cx('input')}
                        value={pressReview.author}
                        onChange={handleChange}
                    />
                    {formErrors.author && <div className={cx('error-message')}>{formErrors.author}</div>}
                    {!formErrors.author && <div className={cx('error-message')}></div>}
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor="new_image" className={cx('label-img')}>
                        Select Image
                    </label>

                    <input
                        type="file"
                        name="new_image"
                        id="new_image"
                        className={cx('input-img')}
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <div className={cx('form-group')}>
                    <img src={previewImage} className={cx('selected-image')} alt="Preview" />
                </div>
                {formErrors.image && <div className={cx('error-message')}>{formErrors.image}</div>}
                {!formErrors.image && <div className={cx('error-message')}></div>}
                <div className={cx('form-group')}>
                    <label className={cx('label')}>Content:</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={pressReview.content}
                        onChange={(event, editor) => {
                            const editorData = editor.getData();
                            handleContentChange(editorData);
                        }}
                    />
                    {formErrors.content && <div className={cx('error-message')}>{formErrors.content}</div>}
                    {!formErrors.content && <div className={cx('error-message')}></div>}
                </div>
                {/* Thêm các trường dữ liệu cần cập nhật ở đây */}
                <div>
                    <button type="submit" className={cx('submit-button')}>
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AdminPressReviewUpdate;
