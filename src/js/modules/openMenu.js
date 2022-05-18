import gsap from "gsap";

export default () => {
  const menubtn = document.querySelector(".js-open-menu");
  const menubtnClose = document.querySelector(".js-close-menu");
  const menu = document.querySelector(".js-menu");
  const menuContainer = document.querySelector(".js-menu-container");
  const timeline = gsap.timeline({
    reversed: true,
    paused: true,
  });

  gsap.set(menu, {autoAlpha: 0});
  gsap.set(menuContainer, {xPercent: 30, opacity: 0});

  timeline
    .to(menu, {autoAlpha: 1, duration: 0.1})
    .to(menuContainer, {xPercent: 0, opacity: 1, duration: 0.2, ease: "none"}, "-=0.1");

  if (!menubtn) return;

  menubtn.addEventListener("click", () => {
    timeline.play();
  });

  menubtnClose.addEventListener("click", () => {
    timeline.reverse();
  });
};
