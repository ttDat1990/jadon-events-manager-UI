import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { pressReviewApi } from '~/components/ApiUrl';

function PressReviewDetail() {
    const [pressReviews, setPressReviews] = useState([]);

    useEffect(() => {
        axios
            .get(pressReviewApi)
            .then((response) => {
                setPressReviews(response.data);
            })
            .catch((error) => {
                console.error('Lỗi:', error);
            });
    }, []);

    return (
        <div>
            <h2>Press Review List</h2>
            <ul>
                {pressReviews.map((pressReview) => (
                    <li key={pressReview.id}>
                        <Link to={`/press-review/${pressReview.id}`}>{pressReview.title}</Link>
                        <p>Author: {pressReview.author}</p>
                        {pressReview.img_url && (
                            <img src={pressReview.img_url} alt={pressReview.title} style={{ maxWidth: '100px' }} />
                        )}
                        <p dangerouslySetInnerHTML={{ __html: pressReview.content }}></p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PressReviewDetail;
