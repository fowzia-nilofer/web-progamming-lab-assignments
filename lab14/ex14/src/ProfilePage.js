import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import "./profileStyles.css";

const ProfilePage = () => {
  const user = {
    name: "Fowzia Nilofer",
    email: "fowzia@example.com",
    bio: "Software Engineer | Tech Enthusiast | Blogger",
    posts: [
      "Learning React is fun!",
      "Just built my first React app!",
      "Exploring new JavaScript frameworks."
    ],
  };

  return (
    <div style={{
      width: "400px",
      margin: "auto",
      textAlign: "center",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      backgroundColor: "#fff",
    }}>
      <ProfileImage />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;

