import { Alert, Button, Container, Grid, TextField, Typography, unstable_createMuiStrictModeTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useForm } from "react-hook-form";
import { TextareaAutosize } from '@material-ui/core';
import useAuth from '../../Hooks/useAuth';

const Purchase = () => {
    const { potId } = useParams()
    const [pottery, setPottery] = useState([]);
    const [orderState, setOrderState] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://desolate-chamber-78666.herokuapp.com/potteries/${potId}`)
            .then(res => res.json())
            .then(data => setPottery(data))
    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const newOrder = {
            userId: user.uid,
            userName: user.displayName,
            userEmail: user.email,
            userPhone: data.phone,
            orderAddress: data.address,
            prodId: potId,
            prodName: pottery.name,
            prodImg: pottery.img,
            prodPrice: pottery.price,
            orderStatus: 'pending'
        }

        fetch('https://desolate-chamber-78666.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderState(true);
                }
            })
    }


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
                        <hr />
                        <Typography variant='h6' color="text.inherit" sx={{ textAlign: 'center', mb: '10px', fontWeight: 'bold', lineHeight: '28px' }}>
                            User Details
                        </Typography>
                        <Typography variant='h6' color="text.inherit" sx={{ textAlign: 'center', mb: '20px', fontSize: '14px', lineHeight: '28px' }}>
                            User Name: {user.displayName} <br />
                            User Email: {user.email}
                        </Typography>
                        <Typography variant='h6' color="text.inherit" sx={{ textAlign: 'center', mb: '10px', fontWeight: 'bold', lineHeight: '28px' }}>
                            Fill Up form for Order
                        </Typography>
                        <hr />
                        {orderState &&
                            <Alert severity="success" sx={{ mb: '10px' }}>Order placed successfully!</Alert>
                        }
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                {...register("name")}
                                size='small'
                                type='text'
                                value={user.displayName}
                                disabled
                                style={{ width: '100%', marginBottom: '15px' }}
                            >
                            </TextField>
                            <TextField
                                {...register("email")}
                                size='small'
                                type='email'
                                value={user.email}
                                disabled
                                style={{ width: '100%', marginBottom: '15px' }}
                            >
                            </TextField>
                            <TextField
                                {...register("phone")}
                                placeholder='Enter Phone Number'
                                size='small'
                                type='number'
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