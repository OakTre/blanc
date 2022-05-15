export function tabDesctop() {
  const tabNav = document.querySelector(".tabs__nav");

  if (!tabNav) return;

  const tabBtns = Array.from(document.querySelectorAll(".js-tab-btn"));
  const tabContents = Array.from(document.querySelectorAll(".js-tab-content"));
  const width = 100 / tabBtns.length;

  tabBtns.forEach((btn, index) => {
    btn.style.width = width + "%";

    btn.addEventListener("click", () => {
      tabBtns.forEach(tabBtn => tabBtn.classList.remove("is-active"));
      btn.classList.add("is-active");

      tabContents.forEach(tab => tab.classList.remove("is-active"));
      tabContents[index].classList.add("is-active");
    });
  });
};

export function tabMobile() {
  const tabNavMobile = document.querySelector(".tabs-mobile__nav");

  if (!tabNavMobile) return;

  const tabMobileBtns = Array.from(document.querySelectorAll(".js-tab-mobile-btn"));
  const tabMobileContents = Array.from(document.querySelectorAll(".js-tab-mobile-content"));

  tabMobileBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      tabMobileBtns.forEach(tabBtn => tabBtn.classList.remove("is-active"));
      btn.classList.add("is-active");

      tabMobileContents.forEach(tab => tab.classList.remove("is-active"));
      tabMobileContents[index].classList.add("is-active");
    });
  });
};
