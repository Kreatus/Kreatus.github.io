var cards = document.getElementsByClassName("card");
var cardContainer = document.getElementsByClassName("cards-div");
var leftArrow = document.getElementsByClassName("fa-angle-double-left");
var rightArrow = document.getElementsByClassName("fa-angle-double-right");
var count1 = 0;
var count2 = 0;
var count3 = 0;
rightArrow[0].addEventListener("click", (e) => {
  count1 = count1 + 100;
  for (i = 0; i < 4; i++) {
    cards[i].style.transform = `translateX(${count1}%)`;
    if (
      cards[i].getBoundingClientRect().x >= 380 &&
      cards[i].getBoundingClientRect().x <= 390
    ) {
      cards[i].style.opacity = "1";
    } else {
      cards[i].style.opacity = "0.5";
    }
    if (cards[i].getBoundingClientRect().x >= 1121.21875) {
      cards[i].style.transform = "translateX(-500%)";
      // cardsContainer.style.justifyContent = "flex-start";
      count1 = 0;
    }

    console.log(cards[i].getBoundingClientRect().x);
  }
});
leftArrow[0].addEventListener("click", (e) => {
  count1 = count1 - 100;
  for (i = 0; i < 4; i++) {
    cards[i].style.transform = `translateX(${count1}%)`;
    if (count1 == 200) {
      cards[i].style.opacity = "1";
    } else {
      cards[i].style.opacity = "0.5";
    }
  }
  if (count1 == -500) {
    cards[i].style.transform = "translateX(100)";
    count1 = 0;
  }
});

rightArrow[1].addEventListener("click", (e) => {
  count2 = count2 + 100;
  for (i = 4; i < 8; i++) {
    cards[i].style.transform = `translateX(${count2}%)`;
    if (
      cards[i].getBoundingClientRect().x >= 380 &&
      cards[i].getBoundingClientRect().x <= 390
    ) {
      cards[i].style.opacity = "1";
    } else {
      cards[i].style.opacity = "0.5";
    }
    if (count2 == 600) {
      cards[i].style.transform = "translateX(0)";
      count2 = 0;
    }
    console.log(cards[i].getBoundingClientRect().x);
  }
});
leftArrow[1].addEventListener("click", (e) => {
  count2 = count2 - 100;
  for (i = 4; i < 8; i++) {
    cards[i].style.transform = `translateX(${count2}%)`;
    if (count2 == 200) {
      cards[i].style.opacity = "1";
    } else {
      cards[i].style.opacity = "0.5";
    }
  }
});

rightArrow[2].addEventListener("click", (e) => {
  for (i = 8; i < 12; i++) {
    count3 = count3 + 100;
    cards[i].style.transform = `translateX(${count3}%)`;
    if (
      cards[i].getBoundingClientRect().x >= 380 &&
      cards[i].getBoundingClientRect().x <= 390
    ) {
      cards[i].style.opacity = "1";
    } else {
      cards[i].style.opacity = "0.5";
    }
    if (count3 == 500) {
      cards[i].style.transform = "translateX(0)";
      count3 = 0;
    }
    console.log(cards[i].getBoundingClientRect().x);
  }
});
leftArrow[2].addEventListener("click", (e) => {
  for (i = 8; i < 12; i++) {
    count3 = count3 - 100;
    cards[i].style.transform = `translateX(${count3}%)`;
    if (count3 == 200) {
      cards[i].style.opacity = "1";
    } else {
      cards[i].style.opacity = "0.5";
    }
  }
});
