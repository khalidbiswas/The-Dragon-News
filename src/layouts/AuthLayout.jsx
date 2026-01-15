import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='flex flex-col items-center justify-center w-11/12 mx-auto p-3'>
            <div className='w-11/12 mx-auto p-3'>
                <Navbar></Navbar>
            </div>
            <div className=''>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;