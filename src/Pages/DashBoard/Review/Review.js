import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import StarRating from '../StarRating/StarRating';

const Review = () => {
    const { user } = useAuth();
    const [value, setValue] = React.useState(2);
    const [review, setReview] = useState('');
    const [reviewState, setReviewState] = useState(false);
    console.log(value);

    const handleOnBlur = (e) => {
        setReview(e.target.value);
    }

    const handleSubmit = (e) => {
        const createReview = {
            userName: user.displayName,
            userEmail: user.email,
            review: review,
            rating: value
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(createReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setReviewState(true);
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                Please Give Your Review
            </Typography>
            <hr />
            {reviewState &&
                <Alert severity="success" sx={{ mb: '10px' }}>Review Placed successfully!</Alert>
            }
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-multiline-static"
                    name='review'
                    multiline
                    rows={4}
                    placeholder='Write your review...'
                    sx={{ width: '100%' }}
                    onBlur={handleOnBlur}
                />
                <StarRating value={value} setValue={setValue}></StarRating>
                <Button variant='contained' type='submit'>Submit</Button>
            </form>
        </div>
    );
};

export default Review;