import React from "react";
import Banner from "../Banner/Banner";
import Tabs from "../Tabs/Tabs";
import Employer from "../Employer/Employer";
import Hotjob from "../Hotjob/Hotjob";
import { Helmet } from "react-helmet-async";



const Home = () => {
  return (
    <div className="px-4 md:px-0">
      <Helmet>
        <title>Job Hunt | Home</title>
      </Helmet>
      <Banner></Banner>
      <Tabs></Tabs>
      <Hotjob></Hotjob>
      <Employer></Employer>
      
    </div>
  );
};

export default Home;
