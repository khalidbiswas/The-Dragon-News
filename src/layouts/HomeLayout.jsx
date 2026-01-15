import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import RightAside from '../components/home/RightAside';
import LeftAside from '../components/home/LeftAside'

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
                <aside className="col-span-3 sticky h-fit top-0"> <LeftAside></LeftAside> </aside>
                <section className="col-span-6  m-5"><Outlet></Outlet></section>
                <aside className='col-span-3'><RightAside></RightAside></aside>
            </main>
        </div>
    );
};

export default HomeLayout;