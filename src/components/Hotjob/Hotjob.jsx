import React from "react";
import Marquee from "react-fast-marquee";
const Employer = () => {
  return (
    <div className="container mx-auto text-center my-10">
      <h1 className="text-4xl font-bold  mb-4 text-[#EAA334]">
        HOT JOB
      </h1>
      <hr className="mb-6"></hr>
      <Marquee>
        <img
          className="h-[300px] w-[200px] mr-20"
          src="https://i.ibb.co/h78nDXn/company-logo-20180426171508.png"
        ></img>
        <img
          className="h-[300px] w-[200px] mr-20"
          src="https://i.ibb.co/Thnv5vf/company-logo-20180427231327.jpg"
        ></img>
        <img
          className="h-[300px] w-[200px] mr-20"
          src="https://i.ibb.co/qNYqb5L/company-logo-20190611151637.png"
        ></img>
        <img
          className="h-[300px] w-[200px] mr-20"
          src=" https://i.ibb.co/tYbBjk6/company-logo-20180428082407.png"
        ></img>
        <img
          className="h-[300px] w-[200px] mr-20"
          src=" https://i.ibb.co/KDFR0sB/company-logo-20180427232305.jpg"
        ></img>
        <img
          className="h-[300px] w-[200px] mr-20"
          src="  https://i.ibb.co/pjtDK55/company-logo-20180427001558.jpg "
        ></img>
      </Marquee>
      <hr className="mt-6"></hr>
    </div>
  );
};

export default Employer;
