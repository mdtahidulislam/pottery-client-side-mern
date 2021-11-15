import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import PotteryCard from '../PotteryCard/PotteryCard';

const Potteries = () => {
    const [potteries, setPotteries] = useState([]);

    useEffect(() => {
        fetch('https://desolate-chamber-78666.herokuapp.com/potteries')
            .then(res => res.json())
            .then(data => setPotteries(data))
    }, [])
    return (
        <>
            <Box>
                <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='h5' sx={{ my: '50px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                        Best Potteries
                    </Typography>
                </Grid>
            </Box>
            <Container>
                <Grid container >
                    {
                        potteries.map(pottery => <PotteryCard
                            key={pottery._id}
                            pottery={pottery}
                        ></PotteryCard>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default Potteries;