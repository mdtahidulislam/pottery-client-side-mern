import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import bannerbg from '../../../images/bannerbg.png';

const banner = {
    backgroundImage: `url(${bannerbg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

const Banner = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} style={{ ...banner, height: '500px' }}>
            <Grid>
                <Typography variant="h5">
                    hot trend 2021
                </Typography>
                <Typography variant="h1">
                    New Collection
                </Typography>
                <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>
                    <Button sx={{ fontWeight: 'bold' }} color="inherit">SHOP NOW</Button>
                </Link>
            </Grid>
        </Box >
    );
};

export default Banner;