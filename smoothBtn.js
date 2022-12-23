//LinkSmooth page
const btnScrollToEl = document.querySelector(".btn--scroll-to");
const section1El = document.querySelector("#section--1");

// modern scorll smooth
const smoothLearnMore = function () {
  btnScrollToEl.addEventListener("click", function (e) {
    e.preventDefault();
    section1El.scrollIntoView({
      behavior: "smooth",
      // block: "end",
      //   inline: "end",
    });
  });
};
// called func
smoothLearnMore();

// old scorll smooth

// const smoothOld = function () {
//   btnScrollToEl.addEventListener("click", function (e) {
//     const s1coords = section1El.getBoundingClientRect();
//     window.scrollTo({
//       left: s1coords.left + window.pageXOffset,
//       top: s1coords.top + window.pageYOffset,
//       behavior: "smooth",
//     });
//   });
// };
// smoothOld();
