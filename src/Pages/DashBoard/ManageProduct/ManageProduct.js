import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageProductCard from '../ManageProductCard/ManageProductCard';

const ManageProduct = () => {
    const [potteries, setPotteries] = useState([]);

    useEffect(() => {
        fetch('https://desolate-chamber-78666.herokuapp.com/allpotteries')
            .then(res => res.json())
            .then(data => setPotteries(data))
    }, [])
    // delete
    const deletePottery = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete');
        if (proceed) {
            fetch(`https://desolate-chamber-78666.herokuapp.com/potteries/${id}`, {
                method: "DELETE"
            })
                // update ui
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingPotteries = potteries.filter(pottery => pottery._id !== id);
                        setPotteries(remainingPotteries);
                    }
                })
        }
    }

    return (
        <div>
            <Grid container >
                {
                    potteries.map(pottery => <ManageProductCard
                        key={pottery._id}
                        pottery={pottery}
                        delete={() => deletePottery(pottery._id)}
                    ></ManageProductCard>)
                }
            </Grid>
        </div>
    );
};

export default ManageProduct;