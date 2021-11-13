import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { user, authError, createUser } = useAuth();

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    // handleRegister
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        createUser(loginData.email, loginData.password, loginData.name, history)
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <Grid sx={{ my: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item md={6} xs={12}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', textAlign: 'center', mb: '30px' }}>Please Register</Typography>
                        {/* <Typography variant='h6' style={{ color: 'red' }}>{error}</Typography>
                        {user?.email && <Alert severity="error">Successfully Created</Alert>}
                        {authError && <Alert severity="success">{authError}</Alert>} */}
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                type='text'
                                name='name'
                                size='small'
                                style={{ width: '100%', marginBottom: '20px' }}
                                required
                                placeholder='Enter Name'
                                onChange={handleChange}
                            ></TextField>
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
                            >Register</Button>
                        </form>
                        <Typography>Already User? <Link to='/login'>Login</Link> </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Register;