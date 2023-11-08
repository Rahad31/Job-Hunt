import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
const Cart = ({ job, Job, setJob }) => {
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
  } = job;

 

  return (
    // image,
    // name,
    // username,
    // type,
    // price,
    // description,
    // pdate,
    // ddate,
    // applicant,
    // <div className="container mx-auto gap-20 my-4 flex flex-row justify-center items-center">
    //       <h1 className="text-xl font-bold">Picture</h1>
    //       <h1 className="text-xl font-bold">Job Title</h1>
    //       <h1 className="text-xl font-bold">Category</h1>
    //       <h1 className="text-xl font-bold">Salary range</h1>
    //       <h1 className="text-xl font-bold">Description</h1>
    //       <h1 className="text-xl font-bold">Posting Date</h1>
    //       <h1 className="text-xl font-bold">Deadline</h1>
    //       <h1 className="text-xl font-bold">Applicants No.</h1>
    //       <h1 className="text-xl font-bold">Action</h1>
    //     </div>
    <div className="flex flex-row gap-20 text-">
      <div>
        <img className="w-[100px]" src={image}></img>
      </div>
      <div>{name}</div>
      <div className="w-[100px] m-2">{type}</div>
      <div className="w-[100px] m-2">{price}</div>
      <div className="w-[100px] m-2">{description}</div>
      <div className="w-[100px] m-2">{pdate}</div>
      <div className="w-[100px] m-2">{ddate}</div>
      <div className="w-[100px] m-2">{applicant}</div>
      <div className="w-[100px] m-2 flex gap-2">
        <button onClick={() => handleDelete({ _id })} className="btn btn-error">
          X
        </button>
        <button className="btn btn-error">
          <img
            className="w-[35px] rounded-full"
            src="https://i.ibb.co/5LcYdT9/lower-left-pencil.png"
          ></img>
        </button>
      </div>

      {/* <div className="flex justify-center items-center   rounded-md ">
        <div className="h-auto w-[1700px] rounded-md flex flex-row gap-2 border-2 border-black  bg-slate-200">
          <img
            src={image}
            className="h-[280px] w-[180px] m-2 rounded-md p-2 bg-white"
          ></img>
          <div className="flex flex-row gap-2  justify-between ">
            <h3 className=" flex flex-col gap-5 text-center pt-2 text-[#120f0a] text-xl font-semibold">
              <h3 className="underline">Job Title</h3>
              <div>{name}</div>
            </h3>
            <h3 className=" flex flex-col gap-5 text-center pt-2 text-[#120f0a] text-xl font-semibold">
              <h3 className="underline">Job Category</h3>
              <div>{type}</div>
            </h3>
            <h3 className=" flex flex-col gap-5 text-center pt-2 text-[#120f0a] text-xl font-semibold">
              <h3 className="underline">Job Title</h3>
              <div>{name}</div>
            </h3>
            <h3 className=" flex flex-col gap-5 text-center pt-2 text-[#120f0a] text-xl font-semibold">
              <h3 className="underline">Job Title</h3>
              <div>{name}</div>
            </h3>
            <h3 className=" flex flex-col gap-5 text-center pt-2 text-[#120f0a] text-xl font-semibold">
              <h3 className="underline">Job Title</h3>
              <div>{name}</div>
            </h3>
            <h3 className=" flex flex-col gap-5 text-center pt-2 text-[#120f0a] text-xl font-semibold">
              <h3 className="underline">Job Title</h3>
              <div>{name}</div>
            </h3>
          </div> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Cart;
