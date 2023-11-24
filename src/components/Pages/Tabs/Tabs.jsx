import React from "react";
import Tabcart from "../Tabcart/Tabcart";
import { useEffect, useState } from "react";
import { Tab } from "react-tabs";
const Tabs = () => {
  let Job = [];

  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    fetch("https://job-server-beryl.vercel.app/job")
      .then((res) => res.json())
      .then((data) => setjobs(data));
  }, []);
  console.log("done");
  let Job1 = jobs.filter((job) => job.type == "On Site Job");
  // console.log(Job1);
  const [job, setjob] = useState(jobs);
  useEffect(() => {
    fetch("https://job-server-beryl.vercel.app/job")
      .then((res) => res.json())
      .then((data) => setjob(data));
  }, []);
  // console.log(job);
  // const [job, setjob] = useState(Job);
  // const [count, setcount] = useState();
  const handlesearch = (id) => {
    // console.log("done");
    // console.log(id);
    // Job = jobs.filter((job) => job.type == "Part Time");
    // console.log(Job);
    Job = jobs.filter((job) => job.type == "On Site Job");
    if (id == 1) {
      console.log("done");
      const site = jobs.filter((job) => job.type == "On Site Job");
      setjob(site);
    } else if (id == 2) {
      const remote = jobs.filter((job) => job.type == "Remote Job");
      setjob(remote);
    } else if (id == 3) {
      const hybrid = jobs.filter((job) => job.type == "Hybrid");
      setjob(hybrid);
    } else if (id == 4) {
      const part = jobs.filter((job) => job.type == "Part Time");
      setjob(part);
    } else if (id == 0) {
      setjob(jobs);
    }
    // console.log(Job);
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-2 my-6">
      <div className="text-4xl font-bold text-[#EAA334]">JOB CATEGORY</div>

      <div className="text-xl">Discover Your Dream Job Today!</div>
      <div
        className="w-1/12
       -bold"
      >
        <hr></hr>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        <button onClick={() => handlesearch("0")} className="btn btn-error">
          All
        </button>
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
      <div className="flex flex-wrap justify-center items-center gap-4">
        {job.map((jobs) => (
          <Tabcart jobs={jobs}></Tabcart>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
