let scrollTop = document.querySelector(".scroll-to-top");
window.onscroll = () => {
  window.scrollY >= 80
    ? (scrollTop.style.opacity = "1")
    : (scrollTop.style.opacity = "0");
};
scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
