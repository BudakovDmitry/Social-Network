import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <div className={classes.sendMessage}>
          <textarea
            ref={newMessageElement}
            className={classes.textarea}
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={addMessage} className={classes.btn}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
