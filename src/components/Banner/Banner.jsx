import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto m-5">
      <img
        className="h-[500px] w-full rounded-md relative"
        src="https://i.ibb.co/5vc6Ygc/Pngtree-recruitment-background-banner-1037995.jpg"
      ></img>
      <div className=" flex flex-col gap-2 italic absolute top-[400px] right-[50px] md:top-[320px] md:right-[230px] lg:top-[300px] lg:right-[820px]">
        <div className="text-6xl font-bold">
          <span className="text-[]  ">JOB</span> HUNT
        </div>
        <h1 className="text-2xl text-">Discover Your Dream Job Today!</h1>
        <label class="input-group">
          <input
            type="text"
            placeholder="Search Job"
            class="input input-bordered"
            id="job"
          />
          <button
            id="btn-apply"
            class="btn btn-error text-xl font-semibold normal-case text-white"
          >
            Search
          </button>
        </label>
      
      </div>
    </div>
  );
};

export default Banner;
