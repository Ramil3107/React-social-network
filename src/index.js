import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  { id: 1, message: "Hi guys, how r u?", likecounter: 11 },
  { id: 2, message: "Props?? What is it?", likecounter: 15 },
  { id: 3, message: "React Kabzda forever", likecounter: 23 },
  { id: 4, message: "Today is tuesday or wednesday?", likecounter: 5 }
] 

let dialogs = [
  {id:1, name: "Dmitry"},
  {id:2, name: "Sasha"},
  {id:3, name: "Alex"},
  {id:4, name: "Pavel"}
]

let messages = [
  {id:1, message: "Hi man!"},
  {id:2, message: "How r u?"},
  {id:3, message: "My name is Ramil"}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs ={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
