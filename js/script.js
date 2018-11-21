"use strict";

//get the elements from the document
const myImg = document.querySelectorAll("img");
const myHeader = document.querySelectorAll(".country");
const myContent = document.querySelector(".content");

//define the observer
let observer = new IntersectionObserver(entries => {
  //run through each entry
  entries.forEach(entry => {
    //if the ratio is higher than zero, then animate target
    if (entry.intersectionRatio > 0) {
      //add classList when the target area is in the screen
      entry.target.classList.add("visible");
    }
  });
});

//observe the element, if the element is in view then run the previous function
myImg.forEach(image => {
  observer.observe(image);
});

//repeat for each element
let headerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("appear");
    }
  });
});

myHeader.forEach(header => {
  headerObserver.observe(header);
});

let contentObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("content-appear");
    }
  });
});

contentObserver.observe(myContent);
