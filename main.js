// Scroll to Top Button
let scrollTop = document.querySelector(".scroll-to-top");
//Change Stats Numbers
let numsStats = document.querySelectorAll(".stats .box span.number");
let stats = document.getElementById("stats");
let started = false;
// Change Skills Width
let skills = document.getElementById("skills");
let progressSpans = document.querySelectorAll(".the-progress span");

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

window.onscroll = () => {
  // Change Skills Width
  if (window.scrollY >= skills.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    progressSpans.forEach((span) => {
      span.style.width = 0;
    });
  }
  // Scroll to Top Button
  window.scrollY >= 80
    ? (scrollTop.style.opacity = "1")
    : (scrollTop.style.opacity = "0");
  // Change Stats Numbers
  if (window.scrollY >= stats.offsetTop - 380) {
    if (!started) {
      numsStats.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }
};

// Scroll to Top Button
scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// Change Stats Numbers
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
