import { Button, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';

const AddProduct = () => {
    const [pottery, setPottery] = useState({});
    const [success, setSuccess] = useState(false);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newPottery = { ...pottery };
        newPottery[field] = value;
        setPottery(newPottery);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newPottery = {
            name: pottery.name,
            description: pottery.description,
            img: pottery.img,
            price: pottery.price
        }
        fetch('http://localhost:5000/potteries', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPottery)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            });
        e.target.reset();
    }

    return (
        <div>
            <Typography variant='h6' sx={{ fontWeight: 'bold', textAlign: 'center', mb: '30px' }}>Add Pottery</Typography>
            {success &&
                <Alert severity="success" sx={{ maxWidth: '300px', margin: '0 auto 10px' }}>Added Pottery successfully!</Alert>
            }
            <Grid container sx={{ justifyContent: 'center' }}>
                <form onSubmit={handleOnSubmit}>
                    <TextField
                        type='text'
                        name="name"
                        placeholder='Enter Pottery Name'
                        sx={{ mb: '15px', width: '100%' }}
                        size="small"
                        onBlur={handleOnBlur}
                        required
                    ></TextField>
                    <TextField
                        type='text'
                        name="description"
                        multiline
                        rows={4}
                        placeholder='Enter Pottery Description'
                        sx={{ mb: '15px', width: '100%' }}
                        size="small"
                        onBlur={handleOnBlur}
                        required
                    ></TextField>
                    <TextField
                        type='text'
                        name="img"
                        placeholder='Enter Img URL'
                        sx={{ mb: '15px', width: '100%' }}
                        size="small"
                        onBlur={handleOnBlur}
                        required
                    ></TextField>
                    <TextField
                        type='number'
                        name="price"
                        placeholder='Enter Price'
                        sx={{ mb: '15px', width: '100%' }}
                        size="small"
                        onBlur={handleOnBlur}
                        required
                    ></TextField>
                    <Button
                        variant='contained'
                        type='submit'
                    >Add Pottery</Button>
                </form>
            </Grid>
        </div>
    );
};

export default AddProduct;