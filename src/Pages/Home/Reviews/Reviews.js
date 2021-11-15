import { Avatar, Card, Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Rivews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://desolate-chamber-78666.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Container>
                <Box>
                    <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant='h5' sx={{ my: '50px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                            Reviews
                        </Typography>
                    </Grid>
                </Box>
                <Grid container>
                    {
                        reviews.map(review => <Card key={review._id} container sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', padding: '15px', mb: '15px' }}>
                            <Grid item md={1} xs={12}>
                                <Avatar src="/broken-image.jpg" />
                            </Grid>
                            <Grid item md={11} xs={12}>
                                <Typography variant='body2'>Review By - {review.userName}, {review.userEmail}</Typography>
                                <Typography variant='body2'>Review: {review.review}</Typography>
                                <Typography variant='body2' style={{ display: 'flex', alignItems: 'center' }}>Rating: {review.rating}, <Rating name="read-only" value={review.rating} readOnly /></Typography>
                            </Grid>
                        </Card>)
                    }
                </Grid>
            </Container>

        </div>
    );
};

export default Rivews;