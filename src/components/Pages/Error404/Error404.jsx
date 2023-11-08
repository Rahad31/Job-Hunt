import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src="https://i.ibb.co/jG9zNSc/istockphoto-1210068776-612x612.jpg"></img>
      <Link to="/">
        <button className="btn-error p-2 rounded-md">Go Back home</button>
      </Link>
    </div>
  );
};

export default Error404;
