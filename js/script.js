"use strict";
//get the element from the document
const myImg = document.querySelectorAll(".animate-me");
const myTemp = document.querySelector("#travelTemp").content;
let countries = [];

window.addEventListener("DOMContentLoaded", fetchCountries);

function fetchCountries() {
  console.log("hi");

  fetch("../countries.json")
    .then(result => result.json())
    .then(showCountries);
}

function showCountries(data) {
  //console.log(data);
  const countryName = Object.values(data);
  console.log(countryName);
  countryName.forEach(name => {
    const clone = myTemp.cloneNode(true);
    clone.querySelector("h2").textContent = name.slice();
    clone.querySelector("img").src = "img/" + name.slice() + ".jpg";
    document.querySelector("#travelContent").appendChild(clone);
  });
}

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
*/
