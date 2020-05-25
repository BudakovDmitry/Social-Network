import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <Dialog name="Dmitry" id="1" />
        <Dialog name="Darya" id="2" />
        <Dialog name="Anton" id="3" />
        <Dialog name="Artem" id="4" />
        <Dialog name="Andrew" id="5" />
        <Dialog name="Tanya" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Goodbye" />
      </div>
    </div>
  );
};

export default Dialogs;
