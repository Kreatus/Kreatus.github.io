var ham = document.querySelector(".hamburger");
var hamLines = document.getElementsByClassName("line");
var hamStructure = document.getElementsByClassName("ham-structure");
var hamMenu = document.querySelector(".ham-menu");
var isActive = false;
for (i = 0; i < hamLines.length; i++) {
  hamLines[i].style.transition = "transform 0.5s ease";
}
var hamIN = () => {
  hamLines[1].style.display = "none";
  hamStructure[0].style.justifyContent = "center";
  hamLines[0].style.transform = "rotateZ(60deg)";
  hamLines[2].style.transform = "rotateZ(-60deg)";
};
var hamOUT = () => {
  hamLines[0].style.transform = "rotateZ(0deg)";
  hamLines[2].style.transform = "rotateZ(0deg)";
  setTimeout((e) => {
    hamStructure[0].style.justifyContent = "space-evenly";
    hamLines[1].style.display = "block";
  }, 510);
};
var hamMIN = () => {
  hamMenu.style.transform = "translateX(0) translateY(20%)";
  hamMenu.style.position = "fixed";
};
var hamMOUT = () => {
  hamMenu.style.transform = "translateX(150%) translateY(0%)";
};

ham.addEventListener("click", (e) => {
  if (isActive == false) {
    hamIN();
    hamMIN();
    isActive = true;
  } else {
    hamOUT();
    hamMOUT();
    isActive = false;
  }
});
