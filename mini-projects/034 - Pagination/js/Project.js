/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const articles = [
  {
    title: "The Principles of Good UI Design",
    subtitle:
      "Learn the essential principles of creating clean, intuitive, and user-friendly interfaces.",
    category: "Design",
    date: "2026-11-10",
    readingTime: 5,
  },
  {
    title: "Understanding Web Development",
    subtitle:
      "An introduction to the technologies and skills behind modern website development.",
    category: "Development",
    date: "2026-11-08",
    readingTime: 7,
  },
  {
    title: "How Artificial Intelligence Is Changing the Web",
    subtitle:
      "Explore how AI is transforming the way websites are designed, built, and experienced.",
    category: "AI",
    date: "2026-11-06",
    readingTime: 8,
  },
  {
    title: "A Beginner's Guide to SEO",
    subtitle:
      "Discover how search engines work and how to improve your website's visibility.",
    category: "SEO",
    date: "2026-11-04",
    readingTime: 6,
  },
  {
    title: "HTML5: The Foundation of the Web",
    subtitle:
      "Understand the structure of modern websites using essential HTML elements.",
    category: "Frontend",
    date: "2026-11-02",
    readingTime: 5,
  },
  {
    title: "Understanding Modern CSS",
    subtitle:
      "Explore modern CSS features that make building responsive layouts easier.",
    category: "Frontend",
    date: "2026-10-30",
    readingTime: 7,
  },
  {
    title: "What Is Full Stack Development?",
    subtitle:
      "Learn how frontend and backend technologies work together to build complete applications.",
    category: "Full Stack",
    date: "2026-10-28",
    readingTime: 8,
  },
  {
    title: "The Future of Web Technologies",
    subtitle:
      "Take a look at emerging technologies shaping the next generation of the web.",
    category: "Technology",
    date: "2026-10-26",
    readingTime: 6,
  },

  {
    title: "UX Design: Creating Better Experiences",
    subtitle:
      "Discover how user research and thoughtful design improve digital experiences.",
    category: "Design",
    date: "2026-10-24",
    readingTime: 6,
  },
  {
    title: "CSS Grid vs Flexbox",
    subtitle:
      "Understand the differences between two powerful CSS layout systems and when to use them.",
    category: "Frontend",
    date: "2026-10-22",
    readingTime: 7,
  },
  {
    title: "JavaScript Concepts Every Developer Should Know",
    subtitle:
      "Explore essential JavaScript concepts for writing cleaner and more reliable code.",
    category: "Frontend",
    date: "2026-10-20",
    readingTime: 9,
  },
  {
    title: "Exploring Modern AI Tools",
    subtitle:
      "Discover how modern AI tools can support everyday creative and development workflows.",
    category: "AI",
    date: "2026-10-18",
    readingTime: 5,
  },
  {
    title: "Technical SEO: A Practical Guide",
    subtitle:
      "Learn about site structure, indexing, and technical improvements for better search visibility.",
    category: "SEO",
    date: "2026-10-16",
    readingTime: 8,
  },
  {
    title: "Introduction to Backend Development",
    subtitle:
      "Understand servers, databases, and the logic that powers modern web applications.",
    category: "Development",
    date: "2026-10-14",
    readingTime: 7,
  },
  {
    title: "REST APIs Explained",
    subtitle:
      "Learn how applications communicate through RESTful APIs and exchange data.",
    category: "Full Stack",
    date: "2026-10-12",
    readingTime: 6,
  },
  {
    title: "The Evolution of Web Browsers",
    subtitle:
      "Explore how web browsers have evolved and changed the way we access information.",
    category: "Technology",
    date: "2026-10-10",
    readingTime: 5,
  },

  {
    title: "Typography in Modern Web Design",
    subtitle:
      "Learn how font selection, hierarchy, and spacing influence website readability.",
    category: "Design",
    date: "2026-10-08",
    readingTime: 6,
  },
  {
    title: "Responsive Design Best Practices",
    subtitle:
      "Discover practical techniques for creating websites that work across different screen sizes.",
    category: "Design",
    date: "2026-10-06",
    readingTime: 7,
  },
  {
    title: "React vs Vue: A Developer's Perspective",
    subtitle:
      "Compare two popular JavaScript frameworks and understand their different approaches.",
    category: "Frontend",
    date: "2026-10-04",
    readingTime: 9,
  },
  {
    title: "How Databases Work",
    subtitle:
      "Explore how databases store, organize, and retrieve information for applications.",
    category: "Full Stack",
    date: "2026-10-02",
    readingTime: 8,
  },
  {
    title: "AI Coding Assistants: Benefits and Limitations",
    subtitle:
      "Understand how AI coding assistants work and where human developers remain essential.",
    category: "AI",
    date: "2026-09-30",
    readingTime: 7,
  },
  {
    title: "Website Speed Optimization",
    subtitle:
      "Learn practical ways to improve loading speed and website performance.",
    category: "SEO",
    date: "2026-09-28",
    readingTime: 6,
  },
  {
    title: "Git and GitHub for Developers",
    subtitle:
      "Understand version control and how developers collaborate using Git and GitHub.",
    category: "Development",
    date: "2026-09-26",
    readingTime: 8,
  },
  {
    title: "Understanding Cloud Computing",
    subtitle:
      "Discover how cloud services provide scalable infrastructure for modern applications.",
    category: "Technology",
    date: "2026-09-24",
    readingTime: 7,
  },

  {
    title: "Color Theory for Web Designers",
    subtitle:
      "Learn how color combinations and visual contrast create better digital interfaces.",
    category: "Design",
    date: "2026-09-22",
    readingTime: 5,
  },
  {
    title: "Accessibility in Web Design",
    subtitle:
      "Explore practical ways to make websites more accessible and inclusive for everyone.",
    category: "Design",
    date: "2026-09-20",
    readingTime: 7,
  },
  {
    title: "Building Your First REST API",
    subtitle:
      "Understand the basic steps involved in creating an API for a web application.",
    category: "Full Stack",
    date: "2026-09-18",
    readingTime: 9,
  },
  {
    title: "Next.js and Modern Web Development",
    subtitle:
      "Discover how Next.js extends React with features for building modern web applications.",
    category: "Frontend",
    date: "2026-09-16",
    readingTime: 8,
  },
  {
    title: "How Search Engines Understand Websites",
    subtitle:
      "Learn how crawling, indexing, and ranking help search engines organize web content.",
    category: "SEO",
    date: "2026-09-14",
    readingTime: 6,
  },
  {
    title: "Machine Learning Explained Simply",
    subtitle:
      "Explore the basic ideas behind machine learning and how computers learn from data.",
    category: "AI",
    date: "2026-09-12",
    readingTime: 7,
  },
  {
    title: "Authentication and Web Security Basics",
    subtitle:
      "Understand authentication, authorization, and essential web security concepts.",
    category: "Development",
    date: "2026-09-10",
    readingTime: 8,
  },
  {
    title: "The Future of Software Development",
    subtitle:
      "Explore emerging trends and technologies influencing the future of software engineering.",
    category: "Technology",
    date: "2026-09-08",
    readingTime: 6,
  },
];

const articlesList = document.querySelector("#articles-list");
const pageAllSkip = document.querySelectorAll(".page");
const pagePrevious = document.querySelector(".pageBefore");
const pageNext = document.querySelector(".pageAfter");

let page = 1;
let CourserPerPage = 8;

function showPageCourser() {
  let ignore = (page - 1) * CourserPerPage;
  let lastindex = ignore + CourserPerPage;
  const slicePage = articles.slice(ignore, lastindex);

  slicePage.forEach((article) => {
    const categoryClass = article.category.toLowerCase().replace(/\s+/g, "-");

    const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    articlesList.insertAdjacentHTML(
      "beforeend",
      `
      <article class="article-card">
        <span class="article-category ${categoryClass}">
          ${article.category}
        </span>

        <h2 class="article-title">${article.title}</h2>

        <p class="article-description">${article.subtitle}</p>

        <div class="article-meta">
          <span>
            <i class="fa-regular fa-calendar-days"></i>
            ${formattedDate}
          </span>

          <span class="meta-divider"></span>

          <span>
            <i class="fa-regular fa-clock"></i>
            ${article.readingTime} min read
          </span>
        </div>
      </article>
    `,
    );
  });
}

showPageCourser();

function changePage(newPage) {
  page = newPage;

  articlesList.innerHTML = "";

  showPageCourser();

  disable(pageAllSkip[page - 1]);
}

pageAllSkip.forEach(function (num) {
  num.addEventListener("click", function (event) {
    changePage(+event.currentTarget.textContent);
  });
});

pageNext.addEventListener("click", function () {
  if (page >= 4) {
    changePage(1);
  } else {
    changePage(page + 1);
  }
});

pagePrevious.addEventListener("click", function () {
  if (page <= 1) {
    changePage(4);
  } else {
    changePage(page - 1);
  }
});

function disable(select) {
  pageAllSkip.forEach(function (number) {
    number.classList.remove("active");
  });
  select.classList.add("active");
}
