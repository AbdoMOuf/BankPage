// Menue Fade Animation
const navEl = document.querySelector(".nav");

const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const sibilings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    logo.style.opacity = opacity;
    sibilings.forEach(sib => {
      if (sib !== link) {
        sib.style.opacity = opacity;
      }
    });
  }
};

navEl.addEventListener("mouseover", function (event) {
  handleHover(event, 0.5);
});

navEl.addEventListener("mouseout", function (event) {
  handleHover(event, 1);
});
