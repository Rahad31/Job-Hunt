import React from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useLoaderData, useParams, Link } from "react-router-dom";
const Details = () => {
  const jobs = useLoaderData();
  const { _id } = useParams();

  const jobdetail = jobs.find((job) => job._id == _id);
  // console.log(jobdetail);
  const handleCart = () => {
    // savejob(idInt, User);
    // // toast("Successfully Added to Cart");
    console.log(Date.now());
    const image = jobdetail.image;
    const name = jobdetail.name;
    const pdate = jobdetail.pdate;
    const ddate = jobdetail.ddate;
    const type = jobdetail.type;
    const price = jobdetail.price;
    const description = jobdetail.description;
    const applicant = jobdetail.applicant;

    const cart = {
      image,
      name,
      type,
      price,
      description,
      pdate,
      ddate,
      applicant,
    };

    fetch(`https://job-server-beryl.vercel.app/appjob`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added To Cart",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  return (
    <div>
      <div className="flex  flex-col gap-1 justify-center items-center   rounded-md ">
        <h1 className="text-4xl font-bold text-[#EAA334]">Details</h1>
        <h1 className="text-xl"></h1>
        <div
          className="w-1/12
       -bold mb-4"
        >
          <hr></hr>
        </div>
        <div className="h-auto w-auto my-6 rounded-md flex flex-col md:flex-row gap-2  border-black  bg-slate-200">
          <div className="flex flex-col">
            <div>
              <img
                src={jobdetail.image}
                className="h-[300px] w-[380px] m-2 rounded-md p-2 bg-white"
              ></img>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <h3 className="text-center pt-2 text-[#120f0a] text-xl font-semibold">
                Job title : {jobdetail.name}
              </h3>
              <h3 className="text-center   text-[#120f0a] text-normal font-semibold pt-2">
                Description: <br></br>
                {jobdetail.description}
              </h3>
              <h3 className="text-center  text-[#120f0a] text font-semibold">
                Salary Range: ${jobdetail.price}
              </h3>

              <h3 className="text-center text-[#120f0a]  font-semibold">
                No. of Applicant: {jobdetail.applicant}
              </h3>

              <div className="flex justify-center items-center md:flex-grow md:mt-48">
                {" "}
                <Link to="/">
                  <button
                    onClick={handleCart}
                    className="btn btn-error mx-4 mb-4"
                  >
                    Apply
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;
