import React from "react";

function UserInfo() {
  return (
    <div className="user-info-component flex-column">
      <div className="field-wrapper">
        <h3 className="user-field-header">Full Name</h3>
        <p className="user-name">Nick Hibbits</p>
      </div>
      <div className="field-wrapper">
        <h3 className="user-field-header">Handle</h3>
        <p className="user-handle">nhibit01</p>
      </div>
      <div className="field-wrapper">
        <h3 className="user-field-header">Password</h3>
        <p className="user-password">********</p>
      </div>
      <div className="field-wrapper">
        <h3 className="user-field-header">Date Since:</h3>
        <p className="user-date-created">10/24/2022</p>
      </div>
    </div>
  );
}
export default UserInfo;
