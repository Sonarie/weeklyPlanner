var nineEl = document.getElementById("userInput9");
var tenEl = document.getElementById("userInput10");
var elevenEl = document.getElementById("userInput11");
var twelveEl = document.getElementById("userInput12");
var thirteenEl = document.getElementById("userInput13");
var fourteenEl = document.getElementById("userInput14");
var fifteenEl = document.getElementById("userInput15");
var sixteenEl = document.getElementById("userInput16");
var seventeenEl = document.getElementById("userInput17");

const d = new Date();
d.setHours(15);
document.getElementById("currentDay").innerHTML = d;

let currentTime = moment().hour();
console.log(currentTime);

let dayTime1 = 9;

if (currentTime > dayTime1) {
  nineEl.classList.add("past");
} else if (currentTime < dayTime1) {
  nineEl.classList.add("future");
} else if (currentTime === dayTime1) {
  nineEl.classList.add("present");
}

let dayTime2 = 10;

if (currentTime > dayTime2) {
  tenEl.classList.add("past");
} else if (currentTime < dayTime2) {
  tenEl.classList.add("future");
} else if (currentTime === dayTime2) {
  tenEl.classList.add("present");
}

let dayTime3 = 11;

if (currentTime > dayTime3) {
  elevenEl.classList.add("past");
} else if (currentTime < dayTime3) {
  elevenEl.classList.add("future");
} else if (currentTime === dayTime3) {
  elevenEl.classList.add("present");
}

let dayTime4 = 12;

if (currentTime > dayTime4) {
  twelveEl.classList.add("past");
} else if (currentTime < dayTime4) {
  twelveEl.classList.add("future");
} else if (currentTime === dayTime4) {
  twelveEl.classList.add("present");
}

let dayTime5 = 13;

if (currentTime > dayTime5) {
  thirteenEl.classList.add("past");
} else if (currentTime < dayTime5) {
  thirteenEl.classList.add("future");
} else if (currentTime === dayTime5) {
  thirteenEl.classList.add("present");
}

let dayTime6 = 14;

if (currentTime > dayTime6) {
  fourteenEl.classList.add("past");
} else if (currentTime < dayTime6) {
  fourteenEl.classList.add("future");
} else if (currentTime === dayTime6) {
  fourteenEl.classList.add("present");
}

let dayTime7 = 15;

if (currentTime > dayTime7) {
  fifteenEl.classList.add("past");
} else if (currentTime < dayTime7) {
  fifteenEl.classList.add("future");
} else if (currentTime === dayTime7) {
  fifteenEl.classList.add("present");
}

let dayTime8 = 16;

if (currentTime > dayTime8) {
  sixteenEl.classList.add("past");
} else if (currentTime < dayTime8) {
  sixteenEl.classList.add("future");
} else if (currentTime === dayTime8) {
  sixteenEl.classList.add("present");
}

let dayTime9 = 17;

if (currentTime > dayTime9) {
  seventeenEl.classList.add("past");
} else if (currentTime < dayTime9) {
  seventeenEl.classList.add("future");
} else if (currentTime === dayTime9) {
  seventeenEl.classList.add("present");
}

function setValue(event) {
  var btnId = event.target.getAttribute("data-btnId"); // "10"
  var userInputSelector = "userInput" + btnId; // "userInput" + "10"
  var userInputEl = document.getElementById(userInputSelector);
  var userInputValue = userInputEl.textContent;
  localStorage.setItem(userInputSelector, userInputValue);

  //var getValue = localStorage.getItem(userInputValue);
  //userInputSelector = getValue;
}

var saveBtns = document.getElementsByClassName("saveBtn");
console.log(saveBtns);
for (let i = 0; i < saveBtns.length; i++) {
  saveBtns[i].addEventListener("click", setValue);
}
