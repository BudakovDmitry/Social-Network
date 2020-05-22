import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div>
        <textarea
          placeholder="Add new post"
          className={classes.textarea}
        ></textarea>
      </div>
      <a href="#" className={classes.botr}>
        Add new post
      </a>
    </div>
  );
};

export default Post;
