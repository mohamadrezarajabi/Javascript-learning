/*
 * Audio/Video elements --> come with built-in methods & properties to control playback
 */

const music = document.querySelector("audio");
const durationElem = document.querySelector("#duration");
const currentTimeElem = document.querySelector("#currentTime");
const rateElem = document.querySelector("#rate");

function play() {
  music.play(); // starts/resumes playback
}

function pause() {
  music.pause(); // pauses playback (keeps position)
}

// music.duration --> total length of the track in SECONDS (only available after metadata loads)
music.addEventListener("loadedmetadata", function () {
  durationElem.textContent = Math.floor(music.duration);
});

// music.currentTime --> how many seconds have played so far, updates live
function showCurrentTime() {
  setInterval(function () {
    currentTimeElem.textContent = Math.floor(music.currentTime);
  }, 1000);
}
showCurrentTime();

// music.playbackRate --> default is 1 (normal speed), 2 = double speed, 0.5 = half speed
function speedTo3X() {
  if (music.playbackRate === 3) {
    music.playbackRate = 1; // back to normal speed
    speedBtn.textContent = "⏩ 3x Speed";
  } else {
    music.playbackRate = 3; // jump to 3x
    speedBtn.textContent = "⏪ 1x Speed";
  }

  rateElem.textContent = music.playbackRate;
}

document.querySelector("#playBtn").addEventListener("click", play);
document.querySelector("#pauseBtn").addEventListener("click", pause);
document.querySelector("#speedBtn").addEventListener("click", speedTo3X);

/*
 !NOTE: music.duration is NaN until the browser finishes reading the file's metadata
 * that's why we read it inside the "loadedmetadata" event, not immediately on page load
 * playbackRate only changes SPEED, it does NOT change pitch by default in most browsers
 */
