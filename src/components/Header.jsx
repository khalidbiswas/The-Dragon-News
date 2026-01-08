import React from 'react';
import logo from '../assets/logo.png';
const Header = () => {
    const day = new Date().toLocaleDateString('en-US', {
        weekday: 'long',

    });
    const date = new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <img className='w-' src={logo} alt="The Dragon news" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p>
                <span>{day}</span>,
                <span className='text-accent'>{date}</span>
            </p>
        </div>
    );
};

export default Header;