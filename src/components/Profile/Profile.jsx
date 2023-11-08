import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import { Helmet } from "react-helmet-async";
const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col my-5 justify-center items-center text-center gap-3 md:my-40">
      <Helmet>
        <title>Job Hunt | Profile</title>
      </Helmet>
      <img className=" w-[300px] rounded-md" src={user.photoURL}></img>
      <h1 className="text-2xl font-semibold">{user.displayName}</h1>
      <h3>{user.email}</h3>
    </div>
  );
};

export default Profile;
