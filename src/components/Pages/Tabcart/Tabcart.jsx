import React from "react";
import { Link } from "react-router-dom";
const Tabcart = ({ jobs }) => {
  const { _id, username, image, name, type, price, pdate, ddate, applicant } =
    jobs;
  // console.log({ name });
  return (
    <div>
      <div className="flex justify-center items-center   rounded-md ">
        <div className="h-[350px] w-[400px] rounded-md flex flex-row m-2  gap-2 border-2 border-black  bg-slate-200">
          <img
            src={image}
            className="h-[330px] w-[180px] m-2 rounded-md p-2 bg-white"
          ></img>
          <div className="flex flex-col gap-1 mr-2  ">
            <h3 className="text-center pt-2 text-[#120f0a]  font-semibold">
              Job Title : {name}
            </h3>
            <h3 className="text-center pt-2 text-[#120f0a]  font-semibold">
              Posted by : {username}
            </h3>
            <h3 className="text-center pt-2text-[#120f0a]  font-semibold">
              Category : {type}
            </h3>

            <h3 className="text-center pt-2 text-[#120f0a]  font-semibold">
              Posting date : {pdate}
            </h3>
            <h3 className="text-center pt-2 text-[#120f0a]  font-semibold">
              Deadline : {ddate}
            </h3>
            <h3 className="text-center pt-2 text-[#120f0a]  font-semibold">
              Salary Range :{price}
            </h3>
            <h3 className="text-center pt-2 text-[#120f0a]  font-semibold">
              Applicant No : {applicant}
            </h3>
            <Link to={`/jobdetails/${_id}`}>
              {" "}
              <button className="btn btn-error w-[180px] mt-6">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabcart;
