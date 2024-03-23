import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { TfiMoney } from "react-icons/tfi";
const Job = ({ job }) => {
  const { logo, job_title,company_name,remote_or_onsite, location, job_type, salary } = job;
  return (
    <div className="card m-0 p-2 bg-base-100 shadow-xl">
     <figure><img src={logo} alt="" srcset="" /></figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className=" flex gap-2 justify-start">
          <button className="btn btn-primary">{remote_or_onsite}</button>
          <button className="btn btn-primary">{job_type}</button>
        </div>
        <div className="flex">

        <p className="flex items-center"><CiLocationOn />{location}</p>
        <p className="flex"><TfiMoney />Salary{salary}</p>
        </div>
        <button className="bg-btnbg">View Details</button>
      </div>
    </div>
  );
};

export default Job;
