// const h1El = document.querySelector("h1");

// const alertH1 = function (e) {
//   alert("this is big heding you reading now");
//   console.log("abdo ouf");
// };

// h1El.addEventListener("mouseenter", alertH1);

// setTimeout(() => h1El.removeEventListener("mouseenter", alertH1), 5000);

// // h1El.removeEventListener("mouseenter", alertH1);

// // h1El.onmouseenter = function (e) {
// //   alert("this is big heding you reading now");
// //   console.log("abdo ouf");
// // };

// // rgb(255, 255, 255)
// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * Math.abs(max - min + 1) + min);
// };
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target, e.target.className, this);
//   // stop propagation
//   e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("Container", e.target, e.currentTarget);
// });

// document.querySelector(".nav ").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("Nav", e.target, e.currentTarget);
// });

// DOM Traversing
// const h1El = document.querySelector("h1");
// const highlightEl = h1El.querySelectorAll(".highlight");
// console.log(h1El);
// console.log(highlightEl);

// console.log(h1El.childNodes);
// console.log(h1El.children);

// console.log((h1El.firstElementChild.style.color = "grey"));
// h1El.lastElementChild.style.color = "blue";

// // Going upqards: parents
// console.log(h1El.parentElement);
// console.log(h1El.parentNode);

// h1El.closest("h1").style.backgroundColor = "var(--color-tertiary-darker)";

// // going sideways

// console.log(h1El.previousElementSibling);
// console.log(h1El.nextElementSibling);

// console.log(h1El.parentElement.children);
// [...h1El.parentElement.children].forEach(el => {
//   if (el !== h1El) el.style.color = "red";
// });

// btnScrollToEl
// section1El
// const btnScrollToEl = document.querySelector(".btn--scroll-to");
// const section1El = document.querySelector("#section--1");

// btnScrollToEl.addEventListener("click", function (e) {
//   const s1coords = section1El.getBoundingClientRect();
//   console.log(s1coords);
//   console.log(e.target.getBoundingClientRect());
//   //   console.log(e.target.getBoundingClientRect());

//   console.log("Curent Scroll (X/Y):", window.pageXOffset, window.pageYOffset);

//   //   console.log(
//   //     "height/width viewport",
//   //     document.documentElement.clientHeight,
//   //     document.documentElement.clientWidth
//   //   );

// scrolling
// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: "smooth",
// });
const btnScrollToEl = document.querySelector(".btn--scroll-to");
const section1El = document.querySelector("#section--1");

btnScrollToEl.addEventListener("click", function (e) {
  section1El.scrollIntoView({ behavior: "smooth" });
});

// });

// const h1El = document.querySelector("h1");
// const alertEl = function () {
//   alert("addeventListerner: Great Your are reading the heading :D");
// };

// h1El.addEventListener("mouseenter", alertEl);
// setTimeout(() => h1El.removeEventListener("mouseenter", alertEl), 4000);

// rgb(255, 255, 255);

// const randomNum = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const randomColor = () =>
//   `rgb(${randomNum(0, 255)},${randomNum(0, 255)},${randomNum(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target, e.currentTarget);
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("Container", e.target, e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("nav", e.target, e.currentTarget);
// });

// page Navigation
const navLinkEl = document.querySelectorAll(".nav__link");

const navlinksEl = document.querySelector(".nav__links");

// navLink.addEventListener("click", function (e) {
//   e.preventDefault();
//   section1El.scrollIntoView({ behavior: "smooth" });
// });

navlinksEl.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
  }
});

// navLinkEl.forEach(el => {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     // console.log(id);
//     document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
//   });
// });

// const h1El = document.querySelector("h1");

// const spanEl = h1El.querySelectorAll("span");
// const childNodes = h1El.childNodes;
// console.log(childNodes);
// console.log(h1El.children);

// h1El.firstElementChild.style.color = "green";

// console.log(h1El.parentElement);
// console.log(h1El.closest(".header__title").children);

// [...h1El.closest(".header__title").children].forEach(el => {
//   if (el !== h1El) {
//     el.style.transform = "scale(0.5)";
//   }
// });

// [...h1El.closest(".header").children].forEach(el => {
//   el.style.backgroundColor = "green";
// });

// h1El.closest(".header").style.backgroundColor = "var(--color-secondary-darker";

// console.log(h1El.previousElementSibling);
// console.log(h1El.nextElementSibling);

// Going downwards: Child
// const operationsEl = document.querySelector(".operations");
// const ContainerEl = document.querySelector(".operations__tab-container");
// const tabEl = document.querySelectorAll(".operations__tab");
// const contantEl = document.querySelectorAll(".operations__content");

// ContainerEl.addEventListener("click", function (e) {
//   tabEl.forEach(el => {
//     el.classList.remove("operations__tab--active");
//   });
//   contantEl.forEach(el => {
//     el.classList.remove("operations__content--active");
//   });

//   if (e.target.classList.contains("operations__tab")) {
//     const data = e.target.getAttribute("data-tab");

//     e.target.classList.add("operations__tab--active");

//     document
//       .querySelector(`.operations__content--${data}`)
//       .classList.add("operations__content--active");
//   }
// });

//

// const tabsEl = document.querySelectorAll(".operations__tab");
// const tabsContainerEl = document.querySelector(".operations__tab-container");
// const tabsContentEl = document.querySelectorAll(".operations__content");

// tabsContainerEl.addEventListener("click", function())

// tabsEl.forEach(el => {
//   el.addEventListener("click", function (e) {
//     tabsEl.forEach(el => {
//       el.classList.remove("operations__tab--active");
//     });
//     tabsContentEl.forEach(el => {
//       el.classList.remove("operations__content--active");
//     });

//     el.classList.add("operations__tab--active");
//     const data = el.getAttribute("data-tab");
//     document
//       .querySelector(`.operations__content--${data}`)
//       .classList.add("operations__content--active");
//   });
// });
// tabsContainerEl.addEventListener("click", function (e) {
//   const cliked = e.target.closest(".operations__tab");
//   const data = cliked.getAttribute("data-tab");

//   if (!cliked) return "";

//   // active tab
//   tabsEl.forEach(tab => {
//     tab.classList.remove("operations__tab--active");
//   });
//   cliked.classList.add("operations__tab--active");

//   // active content
//   tabsContentEl.forEach(content => {
//     content.classList.remove("operations__content--active");
//   });
//   document
//     .querySelector(`.operations__content--${data}`)
//     .classList.add("operations__content--active");
// });

const tabsEl = document.querySelectorAll(".operations__tab");
const containerEl = document.querySelector(".operations__tab-container");
const contantEl = document.querySelectorAll(".operations__content");

// tabsEl.forEach(tab => {
//   tab.addEventListener("click", function (e) {
//     tabsEl.forEach(el => {
//       el.classList.remove("operations__tab--active");
//     });
//     tab.classList.add("operations__tab--active");

//     const data = e.target.getAttribute("data-tab");

//     contantEl.forEach(cL => {
//       cL.classList.remove("operations__content--active");
//     });
//     document
//       .querySelector(`.operations__content--${data}`)
//       .classList.add("operations__content--active");
//   });
// });

containerEl.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;

  tabsEl.forEach(t => {
    t.classList.remove("operations__tab--active");
  });

  clicked.classList.add("operations__tab--active");

  contantEl.forEach(el => {
    el.classList.remove("operations__content--active");
  });
  document
    .querySelector(`.operations__content--${clicked.getAttribute("data-tab")}`)
    .classList.add("operations__content--active");
});

// efect
const animaition = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    logo.style.opacity = opacity;
    siblings.forEach(sib => {
      if (sib !== e.target) {
        sib.style.opacity = opacity;
      }
    });
  }
};
const navEl = document.querySelector(".nav");

navEl.addEventListener("mouseover", function (e) {
  animaition(e, 0.5);
});

navEl.addEventListener("mouseout", function (e) {
  animaition(e, 1);
});

// sticky
const s1coords = section1El.getBoundingClientRect();
console.log(s1coords);

window.addEventListener("scroll", function () {
  console.log(this.window.scrollY);
  if (this.window.scrollY > s1coords.top) {
    navEl.classList.add("sticky");
  } else {
    navEl.classList.remove("sticky");
  }
});
//  scroll the modern way (Intersection Observer API);

// const obsCollback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCollback, obsOptions);
// observer.observe(section1El);
