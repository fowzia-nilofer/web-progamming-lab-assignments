import React from "react";
import profilePic from "./Images/profile.png"; 

const ProfileImage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={profilePic}
        alt="User Profile"
        style={{ width: "150px", borderRadius: "50%" }}
      />
    </div>
  );
};

export default ProfileImage;

