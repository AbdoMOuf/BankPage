// scroll the old wayy

// const initialCoords = section1El.getBoundingClientRect();

// window.addEventListener("scroll", function () {
//   if (window.scrollY > initialCoords.top) {
//     navEl.classList.add("sticky");
//   } else {
//     navEl.classList.remove("sticky");
//   }
// });

// scroll the modern way (Intersection Observer API);

const headerEl = document.querySelector(".header");
// console.log(headerEl);

const stickyNav = function (entries) {
  const entry = entries[0]; // const [entry] = entries

  if (!entry.isIntersecting) {
    navEl.classList.add("sticky");
  } else {
    navEl.classList.remove("sticky");
  }
};

const react = navEl.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${react}px`,
});
headerObserver.observe(headerEl);
