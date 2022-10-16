import React from "react";
import UserInfo from "./UserInfo";

import "../styles/UserProfile.scss";

function UserProfile() {
  return (
    <main className="user-profile-component component">
      <h1 className="page-heading">User Profile</h1>
      <div className="user-info-wrapper flex">
        <UserInfo />
      </div>
    </main>
  );
}

export default UserProfile;
