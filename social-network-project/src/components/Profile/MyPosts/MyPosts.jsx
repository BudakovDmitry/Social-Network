import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} like={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>{props.message}</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          // placeholder="Add new post"
          value={props.newPostText}
          className={classes.textarea}
        />
      </div>
      <a onClick={addPost} href="#s" className={classes.botr}>
        Add new post
      </a>
      {postsElements}
    </div>
  );
};

export default MyPosts;
