import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addjob = () => {
  const handleAddjob = (event) => {
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
    const newjob = {
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
    console.log(newjob);
    form.reset();
    // send data
    fetch(`http://localhost:5000/job`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newjob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Sucessfully Added");
        }
      });
  };

  return (
    <div className="container mx-auto flex justify-center items-center p-2">
      <form
        onSubmit={handleAddjob}
        className="flex flex-col  justify-center items-center bg-slate-200  border-2 border-black w-fit rounded-md lg:w-[800px]"
      >
        <h1 className="text-2xl font-bold mt-6">Add Job</h1>
        <div className="flex flex-row flex-wrap justify-center items-center p-10 gap-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  font-semibold">Image URL</span>
            </label>
            <input
              type="text"
              name="job_img"
              placeholder="URL"
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
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <div className="form-control w-full max-w-xs mb-6">
          <input
            type="submit"
            value="Add job"
            className="input input-bordered btn btn-error "
          />
        </div>
        {/* <div>
          <button onClick={handleAddjob} className="btn btn-error my-4 w-full">
            Add job
          </button>
        </div> */}
      </form>
      <ToastContainer />
    </div>
  );
};

export default Addjob;
