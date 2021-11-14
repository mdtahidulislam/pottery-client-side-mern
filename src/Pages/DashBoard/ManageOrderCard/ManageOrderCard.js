import { Alert, Grid } from '@mui/material';
import React from 'react';
import OrderStatus from '../OrderStatus/OrderStatus';

const ManageOrderCard = (props) => {
    const { prodName, prodImg, orderStatus } = props.order;
    const [success, setSuccess] = React.useState(false);
    return (
        <div>
            <Grid sx={{ mb: '20px', height: '100px', padding: '10px', background: '#f5f5f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                {
                    success && <Alert severity="success" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999' }}>Status changed successfully</Alert>
                }
                <img src={prodImg} alt="" style={{ height: '100%' }} />
                <p>{prodName}</p>
                <div>
                    Order Status: <OrderStatus
                        orderStatus={orderStatus}
                        order={props.order}
                        setSuccess={setSuccess}
                    ></OrderStatus>
                </div>
                <button onClick={props.cancel} style={{ pointer: 'cursor' }}>X</button>
            </Grid>
        </div>
    );
};

export default ManageOrderCard;