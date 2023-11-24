import React from "react";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useLoaderData, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/Provider";
import { useContext } from "react";
const Details = () => {
  const jobs = useLoaderData();
  const { _id } = useParams();

  const jobdetail = jobs.find((job) => job._id == _id);

  const { user } = useContext(AuthContext);

  let User = user.email;
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
      User,
    };

    var q = new Date();
    var m = q.getMonth() + 1;
    var d = q.getDay();
    var y = q.getFullYear();

    var date1 = new Date(y, m, d);
    var date = new Date(ddate); // some mock date
    var milliseconds = date.getTime();
    // This will return you the number of milliseconds
    // elapsed from January 1, 1970
    // if your date is less than that date, the value will be negative

    console.log(milliseconds);
    var mydate = ddate;
    console.log(date1);
    console.log(mydate);

    let now = Date.now();

    if (milliseconds > now) {
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
              title: "<strong>Please Submit</strong>",

              html: `
   <form> <div className="form-control">
                <label className="label">
                  <span style={border: black}>User Name :</span>
                </label>
                <input
                class="swal2-input"
                defaultValue={User}
                  type="text"
                  name="User Name"
                  placeholder="User Name "
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span style={border: black}>Email :</span>
                </label>
                <input
                class="swal2-input"
                  type="email"
                  name="email"
                  defaultValue=EMail
                  placeholder=" Email"

                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span style={border: black}>Resume :</span>
                </label>
                <input
                class="swal2-input"
                  type="text"
                  name="Resume"
                  placeholder=" Resume Link"
                  required
                  className="input input-bordered"
                />
              </div></form>
  `,
              showCloseButton: true,

              focusConfirm: false,
              confirmButtonText: `
    Submit
  `,
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Successfully Added To Applied job",
                  showConfirmButton: false,
                  timer: 2000,
                });
              }
            });
            // Swal.fire({
            //   position: "center",
            //   icon: "success",
            //   title: "Successfully Added To Cart",
            //   showConfirmButton: false,
            //   timer: 2000,
            // });
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Sorry",
        text: "Deadline is over",
      });
    }
  };
  return (
    <div>
      <Helmet>
        <title>Job Hunt | Details</title>
      </Helmet>
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
