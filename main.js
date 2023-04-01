// for the navbar jump in animation
const navbar = document.querySelector(".navbar");
const landing = document.querySelector(".header");

const navbarObserver = new IntersectionObserver(
  (entres) => {
    entres.forEach((entry) => {
      navbar.classList.toggle("nav-scroll", !entry.isIntersecting);
    });
  },
  {
    threshold: 0.4,
  }
);

navbarObserver.observe(landing);

// for the fade in animation in the page
const items = document.querySelectorAll(".fade-in");

const pageObserver = new IntersectionObserver(
  (entres) => {
    entres.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) pageObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
  }
);

items.forEach((item) => {
  pageObserver.observe(item);
});
