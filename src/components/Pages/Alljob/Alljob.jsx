import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Alljob = () => {
  const job = useLoaderData();
  const [cards, setcards] = useState([]);
  const [displaycard, setDisplaycard] = useState(cards);
  useEffect(() => {
    fetch("https://job-server-beryl.vercel.app/job")
      .then((res) => res.json())
      .then((data) => setcards(data));
  }, []);
  useEffect(() => {
    fetch("https://job-server-beryl.vercel.app/job")
      .then((res) => res.json())
      .then((data) => setDisplaycard(data));
  }, []);

  const getvalue = () => {
    const filter = document.getElementById("search").value;
    search.value = " ";
    console.log(filter);
    if (filter == "On Site Job") {
      const Health = cards.filter((card) => card.type == "On Site Job");
      setDisplaycard(Health);
    } else if (filter == "Remote Job") {
      const Clothing = cards.filter((card) => card.type == "Remote Job");
      setDisplaycard(Clothing);
    } else if (filter == "Hybrid") {
      const Education = cards.filter((card) => card.type == "Hybrid");
      setDisplaycard(Education);
    } else if (filter == "Part Time") {
      const Food = cards.filter((card) => card.type == "Part Time");
      setDisplaycard(Food);
    } else {
      toast("Category Not Matched");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Job Hunt | All job</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center underline">All Jobs</h1>
        <div className="form-control my-6">
          <label className="input-group">
            <input
              id="search"
              type="text"
              className="input input-bordered lg:w-[350px]"
              placeholder="Search here by Job title"
            />
            <span
              onClick={() => getvalue()}
              className="bg-[#FF444A] text-white"
            >
              Search
            </span>
          </label>
        </div>
        <div className="container mx-auto gap-20 my-4 flex flex-row justify-center items-center">
          <table className="table flex justify-center items-center gap-2 w-[1000px] ">
            {/* head */}
            <thead>
              <tr>
                <th>Posted By</th>
                <th>Job Title</th>
                <th>Post date</th>
                <th>Deadline</th>
                <th>Salary Range</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displaycard.map((job) => (
                <tr key={job._id}>
                  <td className="w-[200px]">{job.username}</td>
                  <td className="w-[200px]">{job.name}</td>
                  <td className="w-[200px]">{job.pdate}</td>
                  <td className="w-[200px]">{job.ddate}</td>
                  <td className="w-[200px]">{job.price}</td>

                  <td>
                    {" "}
                    <div className="flex gap-2">
                      <Link to={`/jobdetails/${job._id}`}>
                        {" "}
                        <button
                          onClick={() => handleDtails(job._id)}
                          className="btn btn-error"
                        >
                          Details
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alljob;
