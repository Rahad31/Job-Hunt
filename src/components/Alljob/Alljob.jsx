import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Alljob = () => {

    const job=useLoaderData();
    return (
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center underline">My Jobs</h1>
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
                {job.map((job) => (
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