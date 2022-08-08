const arrows = document.querySelectorAll(".arrow");
const moviesList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemIndex = moviesList[i].querySelectorAll("img").length;
  let clickIndex = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickIndex++;
    if (itemIndex - (4 + clickIndex) + (4 - ratio) >= 0) {
      moviesList[i].style.transform = `translateX(${
        moviesList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      moviesList[i].style.transform = "translateX(0)";
      clickIndex = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.sidebar-menu-icon,.toggle,.featured-content,.featured-desc");

ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});



