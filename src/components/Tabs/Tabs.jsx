import React from "react";

const Tabs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 my-6">
      <div className="text-4xl font-bold text-[#EAA334]">JOB CATEGORY</div>
      <div className="text-xl">Discover Your Dream Job Today!</div>
      <div className="flex gap-6">
        <button className="btn btn-error">On Site Job</button>
        <button className="btn btn-error">Remote Job</button>
        <button className="btn btn-error">Hybrid</button>
        <button className="btn btn-error">Part Time</button>
      </div>
    </div>
  );
};

export default Tabs;
