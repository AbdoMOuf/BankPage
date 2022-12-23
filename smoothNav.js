// solution one

// const links = document.querySelectorAll(".nav__link");
// const nav = function () {
//   links.forEach(el => {
//     el.addEventListener("click", function (e) {
//       e.preventDefault();
//       const id = this.getAttribute("href");
//       document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
//     });
//   });
// };
// nav();

// solution two
// Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
const delegationNav = function () {
  document.querySelector(".nav__links").addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");

      document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
    }
  });
};
delegationNav();

// test Event Delegation

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   console.log(e.target);
//   if (e.target.classList.contains("nav__link")) {
//     console.log(e.target);
//   }
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   e.preventDefault();
//   // console.log(e.target);
//   if (e.target.classList.contains("nav__link")) {
//     const id = e.target.getAttribute("href");
//     document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
//   }
// });
