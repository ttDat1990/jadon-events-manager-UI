import React, { useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { pressReviewApi } from '~/components/ApiUrl';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AdminPressReviewAdd.module.scss';

const cx = classNames.bind(styles);

function AdminPressReviewAdd() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        image: null,
        imageURL: '', // Thêm imageURL để lưu URL tạm thời của hình ảnh
    });
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
            imageURL: '', // Đặt lại imageURL khi reset form
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
                console.log(response.data.message);
                resetForm();
                navigate('/admin/listPressReview');
            })
            .catch((error) => {
                console.error('Lỗi:', error);
            });
    };

    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Create Press Review</h2>
            <form onSubmit={handleSubmit} className={cx('form')}>
                <div className={cx('form-group')}>
                    <label className={cx('label')}>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className={cx('input')}
                        required
                    />
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('label')}>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        className={cx('input')}
                        required
                    />
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
                        required
                    />
                </div>
                {formData.imageURL && (
                    <div className={cx('form-group')}>
                        <img src={formData.imageURL} alt="Selected img" className={cx('selected-image')} />
                    </div>
                )}
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
