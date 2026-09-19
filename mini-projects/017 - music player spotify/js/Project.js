/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}
/* ---------------------- */

const Song = [
  {
    name: "Blinding Lights",
    artist: "Blinding Lights",
    src: "https://dl.musicdel.ir/Music/1400/05/the_weeknd_blinding_lights%20128.mp3",
    img: "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36",
  },
  {
    name: "Shape of You",
    artist: "Ed Sheeran",
    src: "https://bhm.cin3ma.ir/1401/Azar/Ed%20Sheeran%20-%20Shape%20of%20You%20%282%29.mp3",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
  },
  {
    name: "Believer",
    artist: "Imagine Dragons",
    src: "https://cdn2.cutsport.ir/song/alibz/1403/Imagine%20Dragon%20-%20Believer%20(320).mp3",
    img: "https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a",
  },
];
let statusSong = 0;
let statusplay = false;
let statusHeart = false;

const audio = document.querySelector(".audio");
const cardImg = document.querySelector(".card-img img");
const nameTrack = document.querySelector(".name-track");
const nameArtist = document.querySelector(".name-artist");
const heart = document.querySelector(".heart");
const heartImg = document.querySelector(".heart img");
const speedBadge = document.querySelector(".speed-badge");
const backward = document.querySelector(".backward");
const play = document.querySelector(".play");
const playImg = document.querySelector(".play img");
const forward = document.querySelector(".forward");
const qauge = document.querySelector(".qauge");
const timeline = document.querySelector("#card-timeline");
const allTime = document.querySelector(".all-time");
const timeNow = document.querySelector(".time-now");

audio.addEventListener("canplay", () => {
  Showloading();
});

function updateFill() {
  const percent =
    ((timeline.value - timeline.min) / (timeline.max - timeline.min)) * 100;
  timeline.style.setProperty("--progress", percent + "%");
}

timeline.addEventListener("input", () => {
  audio.currentTime = timeline.value;

  updateFill();
});

audio.addEventListener("loadedmetadata", () => {
  timeline.max = audio.duration;

  allTime.textContent = formatTime(audio.duration);

  updateFill();
});

function formatTime(time) {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);

  return `${min}:${sec.toString().padStart(2, "0")}`;
}

audio.addEventListener("timeupdate", () => {
  timeline.value = audio.currentTime;
  timeNow.textContent = formatTime(audio.currentTime);

  if (audio.currentTime === audio.duration) {
    playImg.src = "./images/play-solid.webp";
  }

  updateFill();
});

function music(i) {
  const songIndex = Song[i];

  function Startloading() {
    document.querySelector(".loader").classList.remove("hidden");
    document.body.classList.add("loading");
  }

  Startloading();

  audio.src = songIndex.src;
  cardImg.src = songIndex.img;
  nameTrack.textContent = songIndex.name;
  nameArtist.textContent = songIndex.artist;
}

play.addEventListener("click", function () {
  if (!statusplay) {
    playImg.src = "./images/pause-solid.webp";
    statusplay = true;
    audio.play();
  } else {
    playImg.src = "./images/play-solid.webp";
    statusplay = false;
    audio.pause();
  }
});
heart.addEventListener("click", function () {
  if (!statusHeart) {
    heartImg.src = "./images/heart-solid.webp";
    statusHeart = true;
  } else {
    heartImg.src = "./images/heart-regular.webp";
    statusHeart = false;
  }
});

forward.addEventListener("click", function () {
  statusSong++;
  if (statusSong >= Song.length) {
    statusSong = 0;
  }
  music(statusSong);
  audio.play();
  playImg.src = "./images/pause-solid.webp";
});
backward.addEventListener("click", function () {
  statusSong--;
  if (statusSong === -1) {
    statusSong = 3;
  }
  music(statusSong);
  audio.play();
  playImg.src = "./images/pause-solid.webp";
});
const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
let speedIndex = 2;


qauge.addEventListener("click", () => {
  speedIndex++

  if (speedIndex === 6) {
    speedIndex = 0
  }

  console.log(speedIndex);
  
  const speed = speeds[speedIndex];

  audio.playbackRate = speed;
  audio.defaultPlaybackRate = speed;
  speedBadge.textContent = speed + "x";
});
