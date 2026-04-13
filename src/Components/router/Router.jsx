import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../MainPage/navbar/Navbar';
import Footer from '../MainPage/footer/Footer';

const Router = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Router;