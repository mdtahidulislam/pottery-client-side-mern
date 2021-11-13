import { Grid } from '@mui/material';
import React from 'react';

const OrderCard = (props) => {
    const { prodName, prodImg } = props.order;
    return (
        <div>
            <Grid sx={{ mb: '20px', height: '100px', padding: '10px', background: '#f5f5f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src={prodImg} alt="" style={{ height: '100%' }} />
                <h4>{prodName}</h4>
                <button onClick={props.cancel} style={{ pointer: 'cursor' }}>X</button>
            </Grid>
        </div>
    );
};

export default OrderCard;