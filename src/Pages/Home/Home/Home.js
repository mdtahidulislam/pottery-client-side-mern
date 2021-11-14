import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Feature from '../Feature/Feature';
import Banner from '../Banner/Banner';
import Potteries from '../Potteries/Potteries';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Potteries></Potteries>
            <Reviews></Reviews>
            <Feature></Feature>
            <Footer></Footer>
        </>
    );
};

export default Home;