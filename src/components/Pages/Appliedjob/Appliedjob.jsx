import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Appcart from "../AppCart/Appcart";
import { Helmet } from "react-helmet-async";
import { useService } from "use-service";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const Appliedjob = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const jobs = useLoaderData();
  const [Job, setJob] = useState(jobs);
  const [cards, setcards] = useState([]);
  let fil=[];
   fil = cards.filter((card) => card.User == user.email);
  const myObject = Object.fromEntries(fil);
  const myArray = Object.entries(fil);
  
 console.log(typeof myArray);
  const [displaycard, setDisplaycard] = useState(fil);
  // setDisplaycard(fil);
  
  console.log(myObject);
  console.log(myArray);
  useEffect(() => {
    fetch("https://job-server-beryl.vercel.app/appjob")
      .then((res) => res.json())
      .then((data) => setcards(data));
  }, []);
  useEffect(() => {
    fetch("https://job-server-beryl.vercel.app/appjob")
      .then((res) => res.json())
      .then((data) => setDisplaycard(fil.map()));
  }, []);

  // const { user } = useContext(AuthContext);
  // const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  // const [selectedLevel, setSelectedLevel] = useState("");
  const handleLevelChange = (event) => {
    let filter = event.target.value;
    console.log(filter);
    if (filter == "On Site Job") {
      const Health = fil.filter((card) => card.type == "On Site Job");
      setDisplaycard(Health);
      const typeee = typeof (Health);
      console.log(typeof Health);
    } else if (filter == "Remote Job") {
      const Clothing = fil.filter((card) => card.type == "Remote Job");
      setDisplaycard(Clothing);
    } else if (filter == "Hybrid") {
      const Education = fil.filter((card) => card.type == "Hybrid");
      setDisplaycard(Education);
    } else if (filter == "Part Time") {
      const Food = fil.filter((card) => card.type == "Part Time");
      setDisplaycard(Food);
    } else {
      toast("Category Not Matched");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Helmet>
        <title>Job Hunt | Applied Job</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center">
        <h2 className=" font-bold text-4xl my-6 underline ">Applied Job</h2>
        
      </div>

      <div className="container mx-auto flex flex-row flex-wrap gap-5 justify-center items-center my-10">
        {fil.map((job) => (
          <Appcart key={job._id} job={job} Job={Job} setJob={setJob}></Appcart>
        ))}
      </div>
      <h2 className=" font-bold text-2xl mr-2">Sort by:</h2>
      <select
        onChange={handleLevelChange}
        className="input input-bordered text-lg font-semibold text-yellow-500 "
        name="level"
        id="cars"
      >
        <option value="On Site Job">On Site Job</option>
        <option value="Remote Job">Remote Job</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Part Time">Part Time</option>
      </select>
      <div className="container mx-auto flex flex-row flex-wrap gap-5 justify-center items-center my-10">
        {displaycard.map((job) => (
          <Appcart key={job._id} job={job} Job={Job} setJob={setJob}></Appcart>
        ))}
      </div>
    </div>
  );
};

export default Appliedjob;
