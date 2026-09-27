/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const greatPeople = [
  {
    name: "فردوسی",
    content: "توانا بود هر که دانا بود؛ ز دانش دل پیر برنا بود."
  },
  {
    name: "مولانا",
    content: "از محبت تلخ‌ها شیرین شود؛ از محبت مس‌ها زرین شود."
  },
  {
    name: "سعدی",
    content: "بنی‌آدم اعضای یکدیگرند که در آفرینش ز یک گوهرند."
  },
  {
    name: "حافظ",
    content: "دوش دیدم که ملائک در میخانه زدند؛ گل آدم بسرشتند و به پیمانه زدند."
  },
  {
    name: "خیام",
    content: "از دی که گذشت هیچ از او یاد مکن؛ فردا که نیامده‌ست فریاد مکن."
  },
  {
    name: "ابوعلی سینا",
    content: "دانش، چراغی است که راه حقیقت را روشن می‌کند."
  },
  {
    name: "زکریای رازی",
    content: "تجربه، راهنمای خردمند است."
  },
  {
    name: "سقراط",
    content: "می‌دانم که هیچ نمی‌دانم."
  },
  {
    name: "افلاطون",
    content: "آغاز، مهم‌ترین بخش هر کار است."
  },
  {
    name: "ارسطو",
    content: "انسان به‌طور طبیعی موجودی اجتماعی است."
  },
  {
    name: "لئوناردو داوینچی",
    content: "یادگیری هرگز ذهن را خسته نمی‌کند."
  },
  {
    name: "آلبرت انیشتین",
    content: "تخیل مهم‌تر از دانش است؛ زیرا دانش محدود است."
  },
  {
    name: "ماری کوری",
    content: "در زندگی چیزی برای ترسیدن وجود ندارد؛ فقط باید آن را درک کرد."
  },
  {
    name: "نلسون ماندلا",
    content: "همیشه غیرممکن به نظر می‌رسد تا زمانی که انجام شود."
  },
  {
    name: "مهاتما گاندی",
    content: "خودت تغییری باش که می‌خواهی در جهان ببینی."
  }
];

const quoteText = document.querySelector(".quote-text");
const quoteAuthor= document.querySelector(".quote-author");


const index = Math.floor(Math.random() * greatPeople.length) 

console.log(index);


quoteText.textContent = greatPeople[index].content
quoteAuthor.textContent = greatPeople[index].name