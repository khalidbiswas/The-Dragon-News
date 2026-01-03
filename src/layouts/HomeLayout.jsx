import React from 'react';
import Header from '../components/Header';

const HomeLayout = () => {
  
    return (
        <div>
            <header><Header/></header>
            <section className="left-nav"></section>
            <section className="main"></section>
            <section className="right-nav"></section>
        </div>
    );
};

export default HomeLayout;