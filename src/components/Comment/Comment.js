import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '~/components/AuthContext/AuthContext';
import { commentApi, likeApi } from '~/components/ApiUrl';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Comment({ pressId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [replyTo, setReplyTo] = useState(null); // Bình luận mà người dùng đang trả lời
    const token = localStorage.getItem('userToken');
    const { isLoggedIn, userName } = useAuth();

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`${commentApi}/${pressId}`);
                setComments(response.data.comments);
            } catch (error) {
                console.error('Error fetching comments: ', error);
            }
        };

        fetchComments();
    }, [pressId]);

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = () => {
        let parentId = null;

        if (replyTo) {
            parentId = replyTo.id;
        }

        axios
            .post(
                commentApi,
                {
                    press_id: pressId,
                    content: newComment,
                    parent_id: parentId, // Truyền parent_id khi trả lời bình luận
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
                setReplyTo(null); // Đặt lại trạng thái trả lời sau khi gửi bình luận
            })
            .catch((error) => console.error('Error creating comment: ', error));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleCommentSubmit();
        }
    };

    const handleReplyClick = (comment) => {
        setReplyTo(comment);
        setNewComment(`@${comment.name}: `);
    };

    const handleLikeClick = (comment) => {
        // Send a request to like/unlike the comment
        axios
            .post(`${likeApi}/${comment.id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                // Update the comments with the new like information
                const updatedComments = comments.map((c) => {
                    if (c.id === comment.id) {
                        c.likes_count = response.data.likes_count;
                        c.liked = response.data.liked;
                    }
                    return c;
                });
                setComments(updatedComments);
            })
            .catch((error) => console.error('Error liking/unliking comment: ', error));
    };

    function sortComments(comments, parentId = null, level = 0) {
        const sorted = [];

        for (const comment of comments) {
            if (comment.parent_id === parentId) {
                comment.level = level;
                sorted.push(comment);
                const childComments = sortComments(comments, comment.id, level + 1);
                sorted.push(...childComments);
            }
        }

        return sorted;
    }

    const sortedComments = sortComments(comments);

    function formatDate(dateString) {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

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
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </button>
                </div>
            )}
            {!isLoggedIn && <Link to={'/user/login'}>Login to comment</Link>}

            <div className={cx('comments-container')}>
                {sortedComments.map((comment) => (
                    <div
                        key={comment.id}
                        className={cx('comment-detail', {
                            'level-1': comment.level === 1,
                            'level-2': comment.level === 2,
                            'level-3': comment.level === 3,
                            'level-4': comment.level === 4,
                        })}
                    >
                        <div className={cx('avatar')}>{comment.name[0].toUpperCase()}</div>
                        <div className={cx('content')}>
                            <div className={cx('comment-name')}>{comment.name}</div>
                            <div className={cx('comment-content')}>{comment.content}</div>
                            {isLoggedIn && comment.level < 4 && (
                                <div className={cx('button-1')}>
                                    <button onClick={() => handleLikeClick(comment)}>Like</button>
                                    <button onClick={() => handleReplyClick(comment)}>Reply</button>
                                    <div className={cx('date-create')}>{formatDate(comment.created_at)}</div>
                                    <div className={cx('likes-count')}>
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                        {`  ${comment.likes_count}`}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comment;
