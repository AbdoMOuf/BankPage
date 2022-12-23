// Tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabscontainer = document.querySelector(".operations__tab-container");
const tabsContanet = document.querySelectorAll(".operations__content");

const tabsFun = function () {
  tabscontainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");

    if (!clicked) return;

    // acitve tab
    tabs.forEach(tab => tab.classList.remove("operations__tab--active"));
    clicked.classList.add("operations__tab--active");
    // if (clicked) {
    //   clicked.classList.add("operations__tab--active");
    // }

    // active content

    tabsContanet.forEach(tC =>
      tC.classList.remove("operations__content--active")
    );

    document
      .querySelector(
        `.operations__content--${clicked.getAttribute("data-tab")}`
      )
      .classList.add("operations__content--active");
  });
};
tabsFun();
