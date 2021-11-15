import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import OrderCard from '../OrderCard/OrderCard';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://desolate-chamber-78666.herokuapp.com/orders?userEmail=${user.email}`)
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
                {orders.length ? <h3 className="my-3 text-center">Your Placed Order</h3> : <h3 className="my-3 text-center">Your have no order</h3>}
                {
                    orders.map(order => <OrderCard
                        key={order._id}
                        order={order}
                        cancel={() => { cancelOrder(order._id) }}
                    ></OrderCard>)
                }
            </Grid>
        </div>
    );
};

export default MyOrders;