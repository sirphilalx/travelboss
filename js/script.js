const navBar = document.querySelector(".navBar");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navBar.classList.add("navBar-cng");
  } else {
    navBar.classList.remove("navBar-cng");
  }
});

const showMenuBtn = document.querySelector(".hamburger");
const closeMenuBtn = document.querySelector(".bx-x");
const sideBarMenu = document.getElementById("navBar-collapse");

// show side bar menu
showMenuBtn.addEventListener("click", () => {
  console.log("I just pressed the hamburger button");
  sideBarMenu.classList.add("navBar-collapse-rmw");
});

// hide side bar menu
closeMenuBtn.addEventListener("click", () => {
  sideBarMenu.classList.remove("navBar-collapse-rmw");
});

// Response when you click outside or any other element apart from the navbar itselt
document.addEventListener("click", (e) => {
  if (
    e.target.id !== "navBar-collapse" &&
    e.target !== "bx-x" &&
    e.target.parentElement.id !== "hamburger"
  ) {
    sideBarMenu.classList.remove("navBar-collapse-rmw");
  }
});

// stop animation and transition during window resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.classList.remove("resize-animation-stopper");
  }, 400);
});
