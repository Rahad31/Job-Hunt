import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Appcart from "../AppCart/Appcart";
import { Helmet } from "react-helmet-async";
const Appliedjob = () => {
  const jobs = useLoaderData();
  const [Job, setJob] = useState(jobs);

  return (
    <div>
      <Helmet>
        <title>Job Hunt | Applied Job</title>
      </Helmet>
      <div className="container mx-auto flex flex-row flex-wrap gap-5 justify-center items-center my-10">
        {Job.map((job) => (
          <Appcart key={job._id} job={job} Job={Job} setJob={setJob}></Appcart>
        ))}
      </div>
    </div>
  );
};

export default Appliedjob;
