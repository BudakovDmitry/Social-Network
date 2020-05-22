import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <main>
        <div>
          <img
            src="https://www.nanobionic-group.com/wp-content/uploads/2020/02/nano-home-bg-tiny.jpg"
            alt="background"
          ></img>
        </div>
        <div className={classes.profileInfo}>Ava + description</div>
      </main>
    </div>
  );
};

export default ProfileInfo;
