"use strict";

const myImg = document.querySelectorAll("img");

//run intersection observer for each image

//define the observer
let observer = new IntersectionObserver(entries => {
  //run through each entry

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      //add classList when the target area is in the screen
      entry.target.classList.add("visible");
    }
  });
});

myImg.forEach(image => {
  observer.observe(image);
});
