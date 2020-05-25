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
  let dialogs = [
    { id: 1, name: "Dmitry" },
    { id: 2, name: "Darya" },
    { id: 3, name: "Anton" },
    { id: 4, name: "Artem" },
    { id: 5, name: "Andrew" },
    { id: 6, name: "Tanya" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "What?" },
    { id: 4, message: "It`s okay." },
    { id: 5, message: "Sorry" },
    { id: 6, message: "Goodbye" },
  ];

  let dialogsElements = dialogs.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
