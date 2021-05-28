// const slideshowcontainer = document.querySelector(".slideshow-container");
// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");

// prev.addEventListener("click", function () {
//   console.log("click prev btn");
//   slideshowContainer.classList.toggle("hide");
// });

const navItemContainer = document.getElementById("nav-item-wrapper");

// FUNCTION THAT OPENS AND CLOSES THE NAV-BAR
function toggleNavbar() {
  navItemContainer.classList.toggle("open-nav-item");
}
