import React from "react";
import UserInfo from "./UserInfo";

import "../styles/UserProfile.scss";

function UserProfile() {
  return (
    // <div>
    //   UserProfile - Basic info about user: name, location, etc. And stats about
    //   activity: number of restaurants reviewed, top restaurants, etc
    // </div>

    <main className="user-profile-component">
      <h1 className="page-heading">User Profile</h1>
      <div className="user-info-wrapper flex">
        <UserInfo />
      </div>
    </main>
  );
}

export default UserProfile;
