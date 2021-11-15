import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageOrderCard from '../ManageOrderCard/ManageOrderCard';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders);

    useEffect(() => {
        fetch('https://desolate-chamber-78666.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // cancel Order
    const cancelOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete');
        if (proceed) {
            fetch(`https://desolate-chamber-78666.herokuapp.com/orders/${id}`, {
                method: "DELETE"
            })
                // update ui
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <div>
            <Grid>
                <h3 className="my-3 text-center">All Placed Order</h3>
                {
                    orders.map(order => <ManageOrderCard
                        key={order._id}
                        order={order}
                        cancel={() => { cancelOrder(order._id) }}
                    ></ManageOrderCard>)
                }
            </Grid>
        </div>
    );
};

export default ManageOrder;