const smallScreen = "max-width(600px)";
const navItems = document.querySelector(".nav-bar");
const headerContainer = document.querySelector(".head-container");
function screenMatcher(x) {
  return window.matchMedia(x);
}
function addNavToHeader() {}
function addNavToMenu() {
  hamMenu.appendChild(navItems);
  navItems.style.display = "block";
  navItems.children[0].classList.add("inMenu");
}
window.addEventListener("resize", () => {
  console.log("resizing");
  if (screenMatcher(smallScreen).matches) {
    console.log("matches");
    addNavToMenu();
  } else {
    console.log("doesn't match");
    headerContainer.appendChild(navItems);
    navItems.children[0].classList.remove("inMenu");
  }
  return window.removeEventListener("resize", () => {
    addNavToMenu();
  });
});
