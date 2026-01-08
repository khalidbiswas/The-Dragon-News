import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {

    return (
        <div className='mt-3 mx-3'>
            <header>
                <Header />
                <section className='w-11/12 mx-auto p-3 '>
                    <LatestNews />
                </section>
                <section className='w-11/12 mx-auto p-3'>
                 
                        <Navbar />
                    
                    
                </section>
            </header>
            <section className="left-nav"></section>
            <section className="main"><Outlet></Outlet></section>
            <section className="right-nav"></section>
        </div>
    );
};

export default HomeLayout;