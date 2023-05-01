function toggleNav() {
  const outerGrid = document.querySelector(".outer-Grid");
  outerGrid.classList.toggle("outerGrid-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hides");
}
