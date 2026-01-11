import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import FindUs from '../FindUs';
import QZone from '../Qzone';
const RightAside = () => {
    return (
        <div className=''>

            <div className=''>
                <h1 className='font-bold text-2xl mb-5'> Login with</h1>
                <button className='btn btn-info btn-outline mb-2 w-full'><FaGoogle size={24} />login with Google</button>
                <button className='btn btn-outline w-full'><FaGithub size={24} />login with Github</button>
            </div>
            <div className='mt-3'>
                <FindUs></FindUs>
            </div>
            <div>
                <QZone></QZone>
            </div>
        </div>
    );
};

export default RightAside;