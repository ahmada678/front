import { socket } from "./server";

const firstVideoInput = document.getElementById("firstVideo");
const secondVideoInput = document.getElementById("secondVideo");
const thirdVideoInput = document.getElementById("thirdVideo");
const videoPlayer = document.getElementById("videoPlay");
const bag = document.querySelector(".baground");

const playtherButton = document.getElementById("therVideo");

bag.addEventListener("click", function () {
  const file = thirdVideoInput.files[0];
  videoPlayer.src = URL.createObjectURL(file);
  videoPlayer.requestFullscreen();
  videoPlayer.currentTime = 0;
  // videoPlayer.style.display = "";
  videoPlayer.play();
  videoPlayer.addEventListener("ended", () => {
    videoPlayer.requestFullscreen();
    videoPlayer.currentTime = 0;
    videoPlayer.play();
  });
});

socket.on("backward", () => {
  console.log("this coming from the backend");
  const file = firstVideoInput.files[0];

  // Set the source of the video player to the selected file
  videoPlayer.src = URL.createObjectURL(file);
  videoPlayer.requestFullscreen();
  videoPlayer.currentTime = 0;
  // videoPlayer.style.display = "";
  videoPlayer.play();

  videoPlayer.addEventListener("ended", () => {
    videoPlayer.pause();

    // videoPlayer.style.display = "none";
    const file = thirdVideoInput.files[0];
    videoPlayer.src = URL.createObjectURL(file);
    videoPlayer.requestFullscreen();
    videoPlayer.currentTime = 0;
    // videoPlayer.style.display = "";
    videoPlayer.play();
    videoPlayer.addEventListener("ended", () => {
      videoPlayer.requestFullscreen();
      videoPlayer.currentTime = 0;
      videoPlayer.play();
    });
  });
});

socket.on("back", () => {
  console.log("this coming from the backend");
  const file = secondVideoInput.files[0];
  videoPlayer.src = URL.createObjectURL(file);
 videoPlayer.requestFullscreen();
 videoPlayer.currentTime = 0;
 videoPlayer.style.display = "";
 videoPlayer.play();

 videoPlayer.addEventListener("ended", () => {
   videoPlayer.pause();

  //  videoPlayer.style.display = "none";
   const file = thirdVideoInput.files[0];
   videoPlayer.src = URL.createObjectURL(file);
   videoPlayer.requestFullscreen();
   videoPlayer.currentTime = 0;
  //  videoPlayer.style.display = "";
   videoPlayer.play();
   videoPlayer.addEventListener("ended", () => {
     videoPlayer.requestFullscreen();
     videoPlayer.currentTime = 0;
     videoPlayer.play();
   });
 });
});

bag.style.display="none";
firstVideoInput.addEventListener("change",function(){
  firstVideoInput.style.display="none";
})
secondVideoInput.addEventListener("change", function () {
  secondVideoInput.style.display = "none";
});
thirdVideoInput.addEventListener("change", function () {
  thirdVideoInput.style.display = "none";
  bag.style.display = "";
});
