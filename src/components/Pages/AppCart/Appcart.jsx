import React from "react";

const Appcart = ({ job }) => {
  const { _id, image, name, type, price, pdate, ddate } = job;

  return (
    <div>
      <div className="flex justify-center items-center   rounded-md ">
        <div className="h-[320px] w-[500px] rounded-md flex flex-row gap-2 border-2 border-black  bg-slate-200">
          <img
            src={image}
            className="h-[300px] w-[180px] m-2 rounded-md p-2 bg-white"
          ></img>
          <div className="flex flex-col gap-2  p-4">
            <h3 className="text-center  text-[#120f0a] text-xl font-semibold">
              Job Title : {name}
            </h3>
            <h3 className="text-center pt-2text-[#120f0a] text-xl font-semibold">
              Category : {type}
            </h3>
            <h3 className="text-center pt-2 text-[#120f0a] text-xl font-semibold">
              Salary Range :{price}
            </h3>
            <h3 className="text-center pt-2 text-[#120f0a] text-xl font-semibold">
              Posting date : {pdate}
            </h3>
            <h3 className="text-center pt-2 text-[#120f0a] text-xl font-semibold">
              Deadline : {ddate}
            </h3>
            <button className="btn btn-error mt-2">Applied</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appcart;
