/*
 * Animation Events --> let JS know what stage a CSS animation is in
 * animationstart     --> when the animation begins
 * animationiteration --> each time the animation repeats
 * animationend       --> when the animation fully finishes
 */

const setAnimationBtn = document.querySelector("button");
const divElem = document.querySelector(".box");
const pElem = document.querySelector("p");

function setAnimation() {
  divElem.style.animation = "move 2s 3"; // name | duration | repeat count (3 times)
}

function animationStartHandler() {
  pElem.innerHTML = "animation start"; // shown on the page
}

function animationRepeatHandler() {
  pElem.innerHTML = "animation repeat";
}

function animationEndHandler() {
  pElem.innerHTML = "animation end";
}

setAnimationBtn.addEventListener("click", setAnimation);

divElem.addEventListener("animationstart", animationStartHandler);
divElem.addEventListener("animationiteration", animationRepeatHandler);
divElem.addEventListener("animationend", animationEndHandler);

/*
 * !NOTE: with "move 2s 3" the animation plays 3 times, so "animation repeat"
 * shows up 2 times (between the cycles) and then "animation end" at the very end
 * the button works only ONCE per page load --> clicking again does nothing
 * because the same animation is already set (refresh the page to test again)
 */