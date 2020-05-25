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
  let dialogsData = [
    { id: 1, name: "Dmitry" },
    { id: 2, name: "Darya" },
    { id: 3, name: "Anton" },
    { id: 4, name: "Artem" },
    { id: 5, name: "Andrew" },
    { id: 6, name: "Tanya" },
  ];

  let messageData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "What?" },
    { id: 4, message: "It`s okay." },
    { id: 5, message: "Sorry" },
    { id: 6, message: "Goodbye" },
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
        <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
        <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
        <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
        <Dialog name={dialogsData[4].name} id={dialogsData[4].id} />
        <Dialog name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={classes.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
