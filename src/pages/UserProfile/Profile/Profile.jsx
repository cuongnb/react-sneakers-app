import React from "react";
import { useAuth } from "../../../contexts/AuthProvider";
import "./Profile.css";
import {Logout} from "../../auth/Logout/Logout";

export const Profile = () => {
  const { auth } = useAuth();

  return (
    <div className="profile-container">
      <div className="profile-details">
        <div className="name">
          <span>Full Name: </span>
          <span>
            {" "}
            {auth.firstName} {auth.lastName}{" "}
          </span>
        </div>

        <div className="email">
          <span>Email: </span>
          <span> {auth.email} </span>
        </div>
      </div>
      <Logout />
    </div>
  );
};
