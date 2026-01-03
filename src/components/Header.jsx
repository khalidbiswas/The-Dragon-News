import React from 'react';
import logo from '../assets/logo.png';
const Header = () => {
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <img className='w-' src={logo} alt="The Dragon news" />
            <p>Journalism Without Fear or Favour</p>
            <p>{today}</p>
        </div>
    );
};

export default Header;