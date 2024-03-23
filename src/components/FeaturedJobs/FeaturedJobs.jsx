import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs, setFeaturedJobs] = useState([]);


    useEffect(() =>{
        fetch('./jobs.json')
        .then(res => res.json())
        .then(data => setFeaturedJobs(data))
    },[]);
    return (
        <div className=''>
           
            <h1 className='text-5xl font-bold text-center' >Featured Jobs</h1>
        <div className='grid grid-cols-3 gap-4'>
            {
                jobs.map(job => <Job key={job.id} job={job}></Job>)
            }
        </div>
        </div>
    );
};

export default FeaturedJobs;