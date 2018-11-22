"use strict";
//get the element from the document
const myTemp = document.querySelector("#travelTemp").content;
let countries = [];
let nextCountry;

window.addEventListener("DOMContentLoaded", fetchCountries);

function fetchCountries() {
  console.log("hi");

  fetch("../countries.json")
    .then(result => result.json())
    .then(showCountries);
}
let observer;
function showCountries(data) {
  countries = data;
  nextCountry = 0;
  /*
  console.log(data);
  const countryName = Object.values(data);
  console.log(countryName);
  countryName.forEach(name => {
    const clone = myTemp.cloneNode(true);
    clone.querySelector("h2").textContent = name.slice();
    const travelImg = clone.querySelector("img");
    travelImg.src = "img/" + name.slice() + ".jpg";
    travelImg.classList.add("animate-me");
    //clone.querySelector("img").src = "img/" + name.slice() + ".jpg";
    document.querySelector("#travelContent").appendChild(clone);
  });
  */
  let intersectionOptions = {
    root: document.querySelector("body")
  };

  observer = new IntersectionObserver(newEntry);

  const footer = document.querySelector("footer");
  observer.observe(footer);

  function newEntry(entries, observer) {
    //  console.log(entries);
    entries.forEach(entry => {
      console.log(entry);
      console.log("this works");
      if (entry.isIntersecting) {
        showNextCountry();
      }
    });
  }
}

function showNextCountry() {
  console.log("show next country");

  // TODO: avoid doing anything when the last country has been shown ...
  const name = countries[nextCountry];

  console.log(name);

  const clone = myTemp.cloneNode(true);
  clone.querySelector("h2").textContent = name;
  const travelImg = clone.querySelector("img");
  travelImg.src = "img/" + name + ".jpg";
  //  travelImg.classList.add("animate-me");
  travelImg.classList.add("visible");

  //clone.querySelector("img").src = "img/" + name.slice() + ".jpg";
  document.querySelector("#travelContent").appendChild(clone);

  nextCountry++;
}
//const myImg = document.querySelectorAll(".animate-me");

/*
//run intersection observer for each image
myImg.forEach(image => {
  observer.observe(image);
});
*/

/*
//define the observer
let observer = new IntersectionObserver(entries, => {
  //run through each entry

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      //add classList when the target area is in the screen
      entry.target.classList.add("visible");
    }
  });
});
*/
