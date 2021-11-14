import { Card, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import box from '../../../images/box.png'
import shield from '../../../images/shield.png'
import shipped from '../../../images/shipped.png'

const Feature = () => {
    return (
        <Container>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h5' sx={{ fontWeight: 'bold', mt: '50px' }}>FEATURES</Typography>
            </Grid>
            <Card variant="outlined" sx={{ my: '70px' }}>
                <Grid container sx={{ py: '30px' }}>
                    <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img style={{ height: '120px' }} src={shipped} alt="" />
                            <Typography variant='h6'>FREE SHIPPING</Typography>
                            <Typography variant='body2'>For all order over $999</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img style={{ height: '120px' }} src={box} alt="" />
                            <Typography variant='h6'>DELIVERY ON TIME</Typography>
                            <Typography variant='body2'>Definition and measurement</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img style={{ height: '120px' }} src={shield} alt="" />
                            <Typography variant='h6'>SECURE PAMENT</Typography>
                            <Typography variant='body2'>100% secure payment</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
};

export default Feature;