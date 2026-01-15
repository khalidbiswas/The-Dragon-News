import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className=''></div>
            <div className='nav flex gap-3 text-accent'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/carrer'}>Carrer</NavLink>
            </div>
            <div className='flex gap-3'>
                <img src={user} alt="" />
                <NavLink to={'/auth/login'} className='btn btn-primary text-black px-5'>Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;