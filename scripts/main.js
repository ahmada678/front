import "../styles/style.css";

const video = document.querySelector(".video");
const control = document.querySelector(".control");

video.addEventListener("click", function () {
  const newTab = window.open();
  newTab.location.href = "/page/video.html";
});

control.addEventListener("click", function () {
  const windoww = window.open();
  windoww.location.href = "/page/play.html";
});
