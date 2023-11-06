import React from "react";
import Banner from "../Banner/Banner";
import Tabs from "../Tabs/Tabs";
import Employer from "../Employer/Employer";
import Hotjob from "../Hotjob/Hotjob"
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tabs></Tabs>
      <Hotjob></Hotjob>
      <Employer></Employer>
    </div>
  );
};

export default Home;
