import React from "react";

import { useEffect, useState } from "react";
const Tabs = () => {
  const Job = [];
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    fetch("https://job-server-4tnkhvd8a-rahads-projects.vercel.app/job")
      .then((res) => res.json())
      .then((data) => setjobs(data));
  }, []);
  console.log("done");

  const [job, setjob] = useState(Job);
  const [count, setcount] = useState();
  const handlesearch = (id) => {
    console.log("done");
    console.log(id);
    if (id == 1) {
      console.log("done");
      Job = jobs.filter((job) => job.type == "On Site Job");
      console.log(Job);
    } else if (id == 2) {
      Job = jobs.filter((job) => job.type == "Remote Job");
    } else if (id == 3) {
      Job = jobs.filter((job) => job.type == "Hybrid");
    } else if (id == 4) {
      Job = jobs.filter((job) => job.type == "Part Time");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 my-6">
      <div className="text-4xl font-bold text-[#EAA334]">JOB CATEGORY</div>
      <div className="text-xl">Discover Your Dream Job Today!</div>
      <div className="flex flex-wrap justify-center items-center gap-6">
        <button onClick={() => handlesearch("1")} className="btn btn-error">
          On Site Job
        </button>
        <button onClick={() => handlesearch("2")} className="btn btn-error">
          Remote Job
        </button>
        <button onClick={() => handlesearch("3")} className="btn btn-error">
          Hybrid
        </button>
        <button onClick={() => handlesearch("4")} className="btn btn-error">
          Part Time
        </button>
      </div>
      <hr></hr>
      {job.map((jobs) => (
        <Tabcart jobs={jobs}></Tabcart>
      ))}
    </div>
  );
};

export default Tabs;
