window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sounds");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3",
  ];

  // Play Sound
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  // Create Function that makes bubble
  const createBubble = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1.5s ease-in-out";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
