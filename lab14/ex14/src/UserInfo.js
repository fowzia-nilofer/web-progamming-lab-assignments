import React from "react";

function UserInfo({ name, email, bio }){
    return (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <h2>{name}</h2>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Bio:</strong> {bio}</p>
        </div>
      );
}

export default UserInfo;

