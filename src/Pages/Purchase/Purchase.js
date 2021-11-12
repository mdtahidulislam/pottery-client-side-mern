import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useForm } from "react-hook-form";
import { TextareaAutosize } from '@material-ui/core';

const Purchase = () => {
    const { potId } = useParams()
    const [pottery, setPottery] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/potteries/${potId}`)
            .then(res => res.json())
            .then(data => setPottery(data))
    }, [])

    const { register } = useForm();
    return (
        <div>
            <Header></Header>
            <Container>
                <Grid container sx={{ my: '30px' }}>
                    <Grid item md={6} xs={12} sx={{ px: '15px' }}>
                        <img src={pottery.img} alt={pottery.name} style={{ width: '100%' }} />
                    </Grid>
                    <Grid item md={6} xs={12} sx={{ px: '15px' }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', mb: '20px' }}>
                            {pottery.name}
                        </Typography>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', mb: '20px' }}>
                            Price: ${pottery.price}
                        </Typography>
                        <Typography variant='body3' color="text.inherit" sx={{ mb: '20px', lineHeight: '28px' }}>
                            {pottery.description}
                        </Typography>
                        <form onSubmit=''>
                            <TextField
                                {...register("phone")}
                                placeholder='Enter Phone Number'
                                size='small'
                                type='phone'
                                required
                                style={{ width: '100%', marginBottom: '15px' }}
                            >
                            </TextField>
                            <TextareaAutosize
                                {...register("address")}
                                aria-label="empty textarea"
                                placeholder="Enter Address"
                                size='small'
                                required
                                style={{ width: '100%', marginBottom: '15px', padding: '8.5px 0px' }}
                            />
                            <Button
                                variant='contained'
                                size='small'
                                type='submit'
                                style={{ width: '100%', fontWeight: 'bold' }}
                            >
                                Place Order
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;