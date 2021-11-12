import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Potteries from '../Potteries/Potteries';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Potteries></Potteries>
            <Footer></Footer>
        </>
    );
};

export default Home;