import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 15 },
  { id: 2, message: "It`s my first post", likesCount: 20 },
  { id: 3, message: "Hello", likesCount: 2 },
  { id: 4, message: "Goodbay, my friends", likesCount: 7 },
];

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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
