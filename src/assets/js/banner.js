const banner = document.getElementById("banner");
const paragraphs = document.querySelectorAll(".banner > p");

// text animation settings
const P1_KEYFRAMES = [{ left: "-100%" }, { left: "0%" }];
const P1_TIMING = {
  fill: "forwards",
  duration: 5000,
  iterations: Infinity,
  easing: "linear"
};
const P2_KEYFRAMES = [{ left: "0%" }, { left: "100%" }];
const P2_TIMING = {
  fill: "forwards",
  duration: 5000,
  iterations: Infinity,
  easing: "linear"
};

// start animations
const P1_ANIMATION = paragraphs[0].animate(P1_KEYFRAMES, P1_TIMING);
const P2_ANIMATION = paragraphs[1].animate(P2_KEYFRAMES, P2_TIMING);

banner.addEventListener("mouseenter", () => {
  P1_ANIMATION.pause();
  P2_ANIMATION.pause();
});

banner.addEventListener("mouseleave", () => {
  P1_ANIMATION.play();
  P2_ANIMATION.play();
});
