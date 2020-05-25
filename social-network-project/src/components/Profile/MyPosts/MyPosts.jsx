import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It`s my first post", likesCount: 20 },
    { id: 3, message: "Hello", likesCount: 2 },
    { id: 4, message: "Goodbay, my friends", likesCount: 7 },
  ];

  let postsElements = posts.map((post) => (
    <Post message={post.message} like={post.likesCount} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h3>{props.message}</h3>
      <div>
        <textarea
          placeholder="Add new post"
          className={classes.textarea}
        ></textarea>
      </div>
      <a href="#s" className={classes.botr}>
        Add new post
      </a>
      {postsElements}
    </div>
  );
};

export default MyPosts;
