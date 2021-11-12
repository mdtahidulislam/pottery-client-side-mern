import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useForm } from 'react-hook-form'
import { width } from '@mui/system';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register } = useForm();
    return (
        <div>
            <Header></Header>
            <Container>
                <Grid sx={{ my: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item md={6} xs={12}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', textAlign: 'center', mb: '30px' }}>Please Login</Typography>
                        <form>
                            <TextField
                                type='email'
                                {...register("email")}
                                size='small'
                                style={{ width: '100%', marginBottom: '20px' }}
                                required
                                placeholder='Enter Email'
                            ></TextField>
                            <TextField
                                type='password'
                                {...register("password")}
                                size='small'
                                style={{ width: '100%', marginBottom: '20px' }}
                                required
                                placeholder='Enter Password'
                            ></TextField>
                            <Button
                                variant='contained'
                                type='submit'
                                style={{ width: '100%' }}
                            >Loin</Button>
                        </form>
                        <Typography>New User? <Link to='/register'>Register</Link> </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;