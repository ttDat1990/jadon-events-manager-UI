import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '~/components/AuthContext/AuthContext';
import { commentApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Comment({ pressId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const token = localStorage.getItem('userToken');
    const { isLoggedIn, userName } = useAuth();

    useEffect(() => {
        axios
            .get(`${commentApi}/${pressId}`)
            .then((response) => setComments(response.data.comments))
            .catch((error) => console.error('Error fetching comments: ', error));
    }, [pressId]);

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = () => {
        axios
            .post(
                commentApi,
                {
                    press_id: pressId,
                    content: newComment,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            .then((response) => {
                setComments([response.data.comment, ...comments]);
                setNewComment('');
            })
            .catch((error) => console.error('Error creating comment: ', error));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleCommentSubmit();
        }
    };

    return (
        <div>
            <div className={cx('title')}>Leave Us a Comment</div>
            <div className={cx('quantity')}>{comments.length} comments</div>
            {isLoggedIn && (
                <div className={cx('comment-field')}>
                    <div className={cx('avatar')}>{userName[0].toUpperCase()}</div>
                    <input
                        className={cx('input')}
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={handleCommentChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button className={cx('button')} onClick={handleCommentSubmit}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            )}
            {!isLoggedIn && <Link to={'/user/login'}>Login to comment</Link>}

            <div className={cx('comments-container')}>
                {comments.map((comment) => (
                    <div key={comment.id} className={cx('comment-detail')}>
                        <div className={cx('avatar')}>{comment.name[0].toUpperCase()}</div>
                        <div className={cx('content')}>
                            <div className={cx('comment-name')}>{comment.name}</div>
                            <div className={cx('comment-content')}>{comment.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comment;
