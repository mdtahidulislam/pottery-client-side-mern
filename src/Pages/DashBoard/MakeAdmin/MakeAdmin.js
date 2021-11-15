import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(false);

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmit = (e) => {
        const user = { email }
        e.preventDefault();
        fetch('https://desolate-chamber-78666.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setStatus(true)
                }
            });
        e.target.reset();

    }

    return (
        <div>
            <Typography variant='h6' sx={{ fontWeight: 'bold', textAlign: 'center', mb: '30px' }}>Make Admin</Typography>
            {status &&
                <Alert severity="success" sx={{ maxWidth: '240px', margin: '0 auto 10px' }}>Make Admin successfully!</Alert>
            }
            <Grid container sx={{ justifyContent: 'center' }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type='email'
                        name="email"
                        placeholder='Enter User Email'
                        sx={{ mr: '15px' }}
                        size="small"
                        onBlur={handleOnBlur}
                        required
                    ></TextField>
                    <Button
                        variant='contained'
                        type='submit'
                    >Make Admin</Button>
                </form>
            </Grid>
        </div>
    );
};

export default MakeAdmin;