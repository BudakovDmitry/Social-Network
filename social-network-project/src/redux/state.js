import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: "It`s my first post", likesCount: 20 },
      { id: 3, message: "Hello", likesCount: 2 },
      { id: 4, message: "Goodbay, my friends", likesCount: 7 },
    ],
    newPostText: "Hello world",
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dmitry" },
      { id: 2, name: "Darya" },
      { id: 3, name: "Anton" },
      { id: 4, name: "Artem" },
      { id: 5, name: "Andrew" },
      { id: 6, name: "Tanya" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "What?" },
      { id: 4, message: "It`s okay." },
      { id: 5, message: "Sorry" },
      { id: 6, message: "Goodbye" },
    ],
  },
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
