import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div className={classes.main}>
      <ProfileInfo />
      <MyPosts
        posts={props.state.posts}
        addPost={props.addPost}
        message="My first posts"
      />
    </div>
  );
};

export default Profile;
