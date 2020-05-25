import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postData = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It`s my first post", likesCount: 20 },
    { id: 3, message: "Hello", likesCount: 2 },
  ];

  return (
    <div className={classes.postsBlock}>
      <h3>{props.message}</h3>
      <div>
        <textarea
          placeholder="Add new post"
          className={classes.textarea}
        ></textarea>
      </div>
      <a href="#" className={classes.botr}>
        Add new post
      </a>
      <Post message="Hi, how are you?" like="15" />
      <Post message="It`s my first post" like="20" />
      <Post message="Hello" like="2" />
    </div>
  );
};

export default MyPosts;
