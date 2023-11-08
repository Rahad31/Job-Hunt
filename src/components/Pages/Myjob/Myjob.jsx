import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Link } from "react-router-dom";
import "sweetalert2/src/sweetalert2.scss";
import { Helmet } from "react-helmet-async";
const Myjob = () => {
  // const loadedUsers = useLoaderData();
  // const [users, setUsers] = useState(loadedUsers);

  // const handleDelete = (id) => {
  //   // make sure user is confirmed to delete
  //   fetch(
  //     `https://coffee-store-server-74xiae2di-jhankarphero.vercel.app/user/${id}`,
  //     {
  //       method: "DELETE",
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount > 0) {
  //         console.log("deleted successfully");
  //         // remove the user from the UI
  //         const remainingUsers = users.filter((user) => user._id !== id);
  //         setUsers(remainingUsers);
  //       }
  //     });
  // };

  // return (
  //   <div>
  //     <h2>Users: {loadedUsers.length}</h2>
  //     <div className="overflow-x-auto">
  // <table className="table">
  //   {/* head */}
  //   <thead>
  //     <tr>
  //       <th></th>
  //       <th>Email</th>
  //       <th>Created At</th>
  //       <th>Last Logged In</th>
  //       <th>Action</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {users.map((user) => (
  //       <tr key={user._id}>
  //         <th>1</th>
  //         <td>{user.email}</td>
  //         <td>{user.createdAt}</td>
  //         <td>{user.lastLoggedAt}</td>
  //         <td>
  //           <button
  //             onClick={() => handleDelete(user._id)}
  //             className="btn"
  //           >
  //             X
  //           </button>
  //         </td>
  //       </tr>
  //     ))}
  //   </tbody>
  // </table>
  //     </div>
  //   </div>
  // );

  const jobcard = useLoaderData();
  const [Job, setJob] = useState(jobcard);
  const { _id } = jobcard;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("done");
        fetch(`http://localhost:5000/job/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = Job.filter((load) => load._id !== _id);
              setJob(remaining);
              console.log(remaining);
              // window.location.reload();
            }
          });
      }
    });
  };
  // const [displayjob, setDisplayjob] = useState([]);

  // useEffect(() => {
  //   const storedjob = getStoredjob();

  //   const jobs = [];

  //   for (const _id of storedjob) {
  //     const jobs = jobcard.find(
  //       (jobcard) => jobcard._id === _id
  //     );

  //     if (jobs) {
  //       jobs.push(jobs);
  //     }

  //     setjob(jobs);
  //     setDisplayjob(jobs);
  //   }
  // }, [jobcard]);

  return (
    <div>
      <Helmet>
        <title>Job Hunt | My Job</title>
      </Helmet>
      <div>
        <h1 className="text-4xl font-bold text-center underline">My Jobs</h1>
        <div className="container mx-auto gap-20 my-4 flex flex-row justify-center items-center">
          <table className="table flex justify-center items-center gap-2 ">
            {/* head */}
            <thead>
              <tr>
                <th>Picture</th>
                <th>Job Title</th>
                <th>Category</th>
                <th>Salary Range</th>
                <th>Description</th>
                <th>Post date</th>
                <th>Deadline</th>
                <th>Applicant No.</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Job.map((job) => (
                <tr key={job._id}>
                  <td className="w-[120px]">
                    <img className="w-[200px]" src={job.image}></img>
                  </td>

                  <td className="w-[200px]">{job.name}</td>
                  <td className="w-[200px]">{job.type}</td>
                  <td className="w-[200px]">{job.price}</td>
                  <td className="w-[200px]">{job.description}</td>
                  <td className="w-[200px]">{job.pdate}</td>
                  <td className="w-[200px]">{job.ddate}</td>
                  <td className="w-[200px]">{job.applicant}</td>
                  <td>
                    {" "}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="btn btn-error"
                      >
                        X
                      </button>
                      <Link to={`/updatejob/${job._id}`}>
                        <button className="btn btn-error mx-4"> Update</button>
                      </Link>
                    </div>
                  </td>
                  {/*                   
                  <div>{name}</div>
                  <div className="w-[100px] m-2">{type}</div>
                  <div className="w-[100px] m-2">{price}</div>
                  <div className="w-[100px] m-2">{description}</div>
                  <div className="w-[100px] m-2">{pdate}</div>
                  <div className="w-[100px] m-2">{ddate}</div>
                  <div className="w-[100px] m-2">{applicant}</div>
                  <div className="w-[100px] m-2 flex gap-2">
                    <button
                      onClick={() => handleDelete({ _id })}
                      className="btn btn-error"
                    >
                      X
                    </button>
                    <button className="btn btn-error">
                      <img
                        className="w-[35px] rounded-full"
                        src="https://i.ibb.co/5LcYdT9/lower-left-pencil.png"
                      ></img>
                    </button>
                  </div> */}
                </tr>
              ))}
            </tbody>
          </table>
          {/* <h1 className="text-xl font-bold">
            Picture<hr></hr>
          </h1>
          <h1 className="text-xl font-bold">
            Job Title<hr></hr>
          </h1>
          <h1 className="text-xl font-bold">
            Category<hr></hr>
          </h1>
          <h1 className="text-xl font-bold">
            Salary range<hr></hr>
          </h1>
          <h1 className="text-xl font-bold">
            Description <hr></hr>
          </h1>
          <h1 className="text-xl font-bold">
            Posting Date <hr></hr>
          </h1>
          <h1 className="text-xl font-bold">
            Deadline<hr></hr>
          </h1>
          <h1 className="text-xl font-bold">
            Applicants No.<hr></hr>
          </h1>
          <h1 className="text-xl font-bold">
            Action<hr></hr>
          </h1>
        </div>
        <div className="container mx-auto flex flex-row flex-wrap gap-5 justify-center items-center my-10">
          {" "}
          {Job.map((job) => (
            <Cart key={job._id} job={job} Job={Job} setJob={setJob}></Cart>
          ))}
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Myjob;
