import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://static.wixstatic.com/media/b704d2_51d0b6b6da2b41028db5c13f0db74600~mv2_d_2401_3600_s_4_2.jpg/v1/fill/w_718,h_878,al_c,q_85,usm_0.66_1.00_0.01/ANR04357%20(1).webp"
        alt="avatar"
      ></img>
      {props.message}
      <div>
        <button>like</button> {props.like}
      </div>
    </div>
  );
};

export default Post;
