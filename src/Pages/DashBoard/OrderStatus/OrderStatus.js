import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const OrderStatus = ({ orderStatus, order, setSuccess }) => {
    const [status, setStatus] = React.useState(orderStatus);

    console.log('active out', status);
    const handleChange = (e) => {
        const changedStat = e.target.value;
        setStatus(changedStat);
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
        order.orderStatus = changedStat;
        fetch(`http://localhost:5000/orders/${order._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
    };
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    size='small'
                    onChange={handleChange}
                >
                    <MenuItem value={'pending'}>pending</MenuItem>
                    <MenuItem value={'shipped'}>shipped</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default OrderStatus;