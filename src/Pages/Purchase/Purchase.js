import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Purchase = () => {
    const { potId } = useParams()
    return (
        <div>
            <Header></Header>
            <h2>{potId}</h2>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;