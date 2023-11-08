import React from "react";
import { useLoaderData } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
//  Swal.fire({
//    position: "center",
//    icon: "success",
//    title: "Succeessfully Updated",
//    showConfirmButton: false,
//    timer: 2000,
//  });
const Update = () => {
  const navigate = useNavigate();
  const jobs = useLoaderData();
  const {
    _id,
    image,
    name,
    username,
    type,
    price,
    description,
    pdate,
    ddate,
    applicant,
  } = jobs;
  console.log(jobs);
  const handleupjob = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.job_img.value;
    const name = form.job_name.value;
    const username = form.job_username.value;
    const type = form.job_type.value;

    const price = form.job_price.value;
    const description = form.job_des.value;
    const pdate = form.job_pdate.value;
    const ddate = form.job_ddate.value;
    const applicant = form.job_app.value;
    const upjob = {
      image,
      name,
      username,
      type,
      price,
      description,
      pdate,
      ddate,
      applicant,
    };

    console.log(upjob);
    // form.reset();
    // send data
    fetch(`https://job-server-beryl.vercel.app/job/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upjob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Succeessfully Updated",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="container mx-auto flex justify-center items-center p-2">
      <form
        onSubmit={handleupjob}
        className="flex flex-col  justify-center items-center bg-slate-200  border-2 border-black w-fit rounded-md lg:w-[800px]"
      >
        <h1 className="text-2xl font-bold mt-6">Update Job</h1>
        <div className="flex flex-row flex-wrap justify-center items-center p-10 gap-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  font-semibold">Image URL</span>
            </label>
            <input
              type="text"
              name="job_img"
              //   placeholder="URL"
              defaultValue={image}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Job Title</span>
            </label>
            <input
              type="text"
              name="job_name"
              placeholder="Title"
              defaultValue={name}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">User Name</span>
            </label>
            <input
              type="text"
              name="job_username"
              placeholder="User Name"
              defaultValue={username}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Job Category</span>
            </label>
            <input
              type="text"
              name="job_type"
              placeholder="Category"
              defaultValue={type}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Salary Range</span>
            </label>
            <input
              type="text"
              name="job_price"
              placeholder="Salary Range"
              defaultValue={price}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">
                Job Short Description
              </span>
            </label>
            <input
              type="text"
              name="job_des"
              placeholder="Short Description"
              defaultValue={description}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Posting Date</span>
            </label>
            <input
              type="date"
              name="job_pdate"
              placeholder=""
              defaultValue={pdate}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Deadline</span>
            </label>
            <input
              type="date"
              name="job_ddate"
              placeholder=""
              defaultValue={ddate}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">
                Applicants Number
              </span>
            </label>
            <input
              type="text"
              name="job_app"
              placeholder="Applicants Number"
              defaultValue={applicant}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <div className="form-control w-full max-w-xs mb-6">
          <input
            type="submit"
            value="Update job"
            className="input input-bordered btn btn-error "
          />
        </div>
        {/* <div>
          <button onClick={handleAddjob} className="btn btn-error my-4 w-full">
            Add job
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Update;
