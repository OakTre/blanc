export default () => {
  const tabNav = document.querySelector(".tabs__nav");

  if (!tabNav) return;

  const tabBtns = Array.from(document.querySelectorAll(".js-tab-btn"));
  const tabContents = Array.from(document.querySelectorAll(".js-tab-content"));

  tabBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(tabBtn => tabBtn.classList.remove("is-active"));
      btn.classList.add("is-active");

      tabContents.forEach(tab => tab.classList.remove("is-active"));
      tabContents[index].classList.add("is-active");
    });
  });
};
