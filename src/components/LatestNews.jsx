import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex  items-center gap-5 p-3 bg-base-200'>
        <p className=' text-base-100 bg-secondary px-3 py-2'>Latest</p>
        <Marquee pauseOnHover={true} speed={180} className='font-bold'>
            <p>this is lorem</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem asperiores numquam ut eaque nulla voluptatum sunt quas porro, sapiente dolor delectus nihil nemo cumque vel reiciendis dicta fuga illum corporis.</p>
        </Marquee>
        </div>
    );
};

export default LatestNews;