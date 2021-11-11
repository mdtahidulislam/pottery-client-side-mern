import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box>
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: '30px' }}>
                <Typography variant='h6'>
                    &copy; Allrights reserved By Pottery
                </Typography>
            </Grid>
        </Box>
    );
};

export default Footer;