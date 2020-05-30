import React from "react";
import classes from "./News.module.css";

const News = (props) => {
  let newNewsElement = React.createRef();

  let addNews = () => {
    let text = newNewsElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.news}>
      <textarea
        ref={newNewsElement}
        className={classes.textarea}
        placeholder="Add News"
      ></textarea>
      <button onClick={addNews} className={classes.btn}>
        Add News
      </button>
    </div>
  );
};

export default News;