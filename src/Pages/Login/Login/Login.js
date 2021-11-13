import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { userLogin } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        userLogin(loginData.email, loginData.password, location, history)
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <Grid sx={{ my: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item md={6} xs={12}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', textAlign: 'center', mb: '30px' }}>Please Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                type='email'
                                name='email'
                                size='small'
                                style={{ width: '100%', marginBottom: '20px' }}
                                required
                                placeholder='Enter Email'
                                onChange={handleChange}
                            ></TextField>
                            <TextField
                                type='password'
                                name='password'
                                size='small'
                                style={{ width: '100%', marginBottom: '20px' }}
                                required
                                placeholder='Enter Password'
                                onChange={handleChange}
                            ></TextField>
                            <Button
                                variant='contained'
                                type='submit'
                                style={{ width: '100%' }}
                            >Login</Button>
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