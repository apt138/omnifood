const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const yearEl = document.querySelector(".year");

// Setting current year in footer copyright
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Making mobile navigation work
btnMobileNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// Smooth scolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

// Sticky header

const heroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px", // height of the sticky nav
  }
);
obs.observe(heroEl);
