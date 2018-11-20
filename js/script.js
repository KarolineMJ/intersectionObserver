"use strict";
//get the element from the document
const myImg = document.querySelectorAll(".animate-me");

//define the observer
let observer = new IntersectionObserver(entries => {
  //run through each entry
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      //add classList when the target area is in the screen
      entry.target.classList.add("visible");

      //clone.Image.source = "img/" + classname + ".jpeg"
    }
  });
});

//run intersection observer for each image
myImg.forEach(image => {
  observer.observe(image);
});
