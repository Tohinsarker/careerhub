import React from 'react';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;