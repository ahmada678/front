import "../styles/play.css";
import {socket} from './server'
const push1 = document.getElementById("push 1");
const push2 = document.getElementById("push 2");

push1.addEventListener("click", (e) => {
  console.log("clicked");
  socket.emit("play");
});
push2.addEventListener("click", (e) => {
  console.log("clicked");
  socket.emit("pl");
});


