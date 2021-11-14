import { Grid } from '@mui/material';
import React from 'react';

const OrderCard = (props) => {
    const { prodName, prodImg, orderStatus } = props.order;
    return (
        <div>
            <Grid sx={{ mb: '20px', height: '100px', padding: '10px', background: '#f5f5f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src={prodImg} alt="" style={{ height: '100%' }} />
                <p>{prodName}</p>
                <p>Order Status: {orderStatus}</p>
                <button onClick={props.cancel} style={{ pointer: 'cursor' }}>X</button>
            </Grid>
        </div>
    );
};

export default OrderCard;