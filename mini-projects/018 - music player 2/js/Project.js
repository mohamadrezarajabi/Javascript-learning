const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* -------------------- loader ---------------- */

const ulElem = document.querySelector(".item-cards");
const audio = document.querySelector(".audio");

const songs = [
  {
    name: "Death",
    artist: "Amir Tataloo",
    src: "https://dl.mokhtalefmusic.com/music/1402/03/14/Amir%20Tataloo%20&%20Reza%20Pishro%20-%20Marg.mp3",
    img: "https://echomusic.app/cdn/61b4a64be663682e8cb037d9719ad8cd/70419356/echomusic-img6a5b848363f77-500-86908.jpg",
  },
  {
    name: "Rafigh Fabrik",
    artist: "Shayea",
    src: "https://nicmusic.musitraf.com/nicmusic/009/016/Shayea%20-%20Refigh%20Fabrik.mp3",
    img: "https://nicmusic.net/wp-content/uploads/2016/09/Shayea-Refigh-Fabrik.jpg",
  },
  {
    name: "Alaki",
    artist: "Shayan Yo",
    src: "https://dls.musics-fa.com/song/alibz/2026/09/Shayan%20Yo%20-%20Alaki%20Musics-Fa.mp3",
    img: "https://musics-fa.com/wp-content/uploads/2026/09/Shayan-Yo-Alaki-1024x1024.webp",
  },
  {
    name: "Shahre Khamoosh",
    artist: "Reza Pishro",
    src: "https://dl.gisomusic.com/Music/1405/04/08/Reza%20Pishro%20&%20Ali%20Owj%20-%20Shahre%20Khamoosh.mp3?_gl=1*14z8zw*_ga*MTY2OTQyNDAwOS4xNzkwMjQ4MTc1*_ga_KEQHMVTX68*czE3OTAyNDgxNzUkbzEkZzEkdDE3OTAyNDgyMTYkajE5JGwwJGgw",
    img: "https://gisomusic.com/wp-content/uploads/2026/06/Reza-Pishro-&-Ali-Owj-Shahre-Khamoosh.webp",
  },
  {
    name: "Taghsir mane",
    artist: "TIEM",
    src: "https://dl.beatmastering.ir/NEWS23/Tiem%20Shayan%20Yo%20-%20Taghsire%20Mane.mp3",
    img: "https://beatmastering.ir/wp-content/uploads/2026/07/%D8%AD%D8%B3%DB%8C%D9%86-%D8%AA%DB%8C-%D8%A7%D9%85-%D9%88-%D8%B4%D8%A7%DB%8C%D8%A7%D9%86-%DB%8C%D9%88-%D8%AA%D9%82%D8%B5%DB%8C%D8%B1-%D9%85%D9%86%D9%87.jpg",
  },
  {
    name: "Beza Boro",
    artist: "Shayan Yo",
    src: "https://irsv.upmusics.com/singletracks/2026/08/Shayan%20Yo%20-%20Beza%20Boro%20UpMusics.mp3",
    img: "https://sevilmusics.com/wp-content/uploads/2026/08/Shayan-Yo-Beza-Boro.jpg",
  },
];

songs.forEach(function (song) {
  ulElem.insertAdjacentHTML(
    "afterbegin",
    `
    <li class="card">
      <div class="img-wrapper">
        <img src="${song.img}" class="img-card" alt="${song.name}">

        <button type="button" class="btn-card" aria-label="پخش آهنگ">
          <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path fill="white"
              d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6.7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6.7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/>
          </svg>
        </button>
      </div>

      <div class="footer-card">
        <p class="title-card">${song.name}</p>
        <p class="subtitle-card">${song.artist}</p>
      </div>
    </li>
  `,
  );

  
  const btnElemCard = document.querySelector(".btn-card");
  const titleCardMenu = document.querySelector(".title-card_menu");
  const subtitleCardMenu = document.querySelector(".subtitle-card_menu");
  const imgMenu = document.querySelector(".menu-img");
  
  btnElemCard.addEventListener("click",function () {
    audio.play();
    menu()
  });

  function menu() {
    audio.src = song.src;
    imgMenu.src = song.img;
    titleCardMenu.textContent = song.name;
    subtitleCardMenu.textContent = song.artist;
  }
  menu()
});
