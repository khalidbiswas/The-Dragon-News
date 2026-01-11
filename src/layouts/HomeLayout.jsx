import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import Leftaside from '../components/home/leftaside';
import RightAside from '../components/home/RightAside';

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
            <main className='grid grid-cols-12 w-11/12 mx-auto p-3 '>
                <aside className="col-span-3"><Leftaside></Leftaside></aside>
                <section className="col-span-6  m-5"><Outlet></Outlet></section>
                <aside className='col-span-3'><RightAside></RightAside></aside>
            </main>
        </div>
    );
};

export default HomeLayout;