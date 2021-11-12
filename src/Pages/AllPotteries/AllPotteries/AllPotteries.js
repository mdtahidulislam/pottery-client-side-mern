import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import PotteriesAll from '../PotteriesAll/PotteriesAll';

const AllPotteries = () => {
    return (
        <div>
            <Header></Header>
            <PotteriesAll></PotteriesAll>
            <Footer></Footer>
        </div>
    );
};

export default AllPotteries;