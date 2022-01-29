//var pastDue = document.getElementsByClassName(".past");
//var present = document.getElementsByClassName(".present");
//var future = document.getElementsByClassName(".future");
var nineEl = document.getElementById("userInput9");

const d = new Date();
d.setHours(15);
document.getElementById("currentDay").innerHTML = d;

let currentTime = moment();
let dayTime1 = moment("9:00", "hh:mm A");

if (currentTime.isAfter(dayTime1, "8:59 A")) {
  nineEl.classList.add("past");
} else if (currentTime.isBefore(dayTime1, "10:00 A")) {
  nineEl.classList.add("future");
} else if (currentTime.isBetween("9:00 A", "9:59 A")) {
  nineEl.classList.add(".present");
}

let dayTime2 = moment("10:00", "hh:mm A");

if (currentTime.isAfter(dayTime1, "9:59 A")) {
  nineEl.classList.add("past");
} else if (currentTime.isBefore(dayTime1, "11:00 A")) {
  nineEl.classList.add("future");
} else if (currentTime.isBetween("10:00 A", "10:59 A")) {
  nineEl.classList.add(".present");
}

let dayTime3 = moment("11:00", "hh:mm A");

if (currentTime.isAfter(dayTime1, "10:59 A")) {
  nineEl.classList.add("past");
} else if (currentTime.isBefore(dayTime1, "12:00 A")) {
  nineEl.classList.add("future");
} else if (currentTime.isBetween("11:00 A", "11:59 A")) {
  nineEl.classList.add(".present");
}

let dayTime3 = moment("12:00", "hh:mm P");

if (currentTime.isAfter(dayTime1, "11:59 A")) {
  nineEl.classList.add("past");
} else if (currentTime.isBefore(dayTime1, "01:00 P")) {
  nineEl.classList.add("future");
} else if (currentTime.isBetween("12:00 P", "12:59 P")) {
  nineEl.classList.add(".present");
}

let dayTime3 = moment("01:00", "hh:mm P");

if (currentTime.isAfter(dayTime1, "12:59 P")) {
  nineEl.classList.add("past");
} else if (currentTime.isBefore(dayTime1, "02:00 P")) {
  nineEl.classList.add("future");
} else if (currentTime.isBetween("01:00 P", "01:59 P")) {
  nineEl.classList.add(".present");
}

let dayTime3 = moment("02:00", "hh:mm P");

if (currentTime.isAfter(dayTime1, "01:59 P")) {
  nineEl.classList.add("past");
} else if (currentTime.isBefore(dayTime1, "03:00 P")) {
  nineEl.classList.add("future");
} else if (currentTime.isBetween("02:00 P", "02:59 P")) {
  nineEl.classList.add(".present");
}

let dayTime3 = moment("03:00", "hh:mm P");

if (currentTime.isAfter(dayTime1, "02:59 P")) {
  nineEl.classList.add("past");
} else if (currentTime.isBefore(dayTime1, "04:00 P")) {
  nineEl.classList.add("future");
} else if (currentTime.isBetween("03:00 P", "03:59 P")) {
  nineEl.classList.add(".present");
}

let dayTime3 = moment("04:00", "hh:mm P");

if (currentTime.isAfter(dayTime1, "03:59 P")) {
  nineEl.classList.add("past");
} else if (currentTime.isBefore(dayTime1, "05:00 P")) {
  nineEl.classList.add("future");
} else if (currentTime.isBetween("04:00 P", "04:59 P")) {
  nineEl.classList.add(".present");
}

let dayTime3 = moment("05:00", "hh:mm P");

if (currentTime.isAfter(dayTime1, "04:59 P")) {
  nineEl.classList.add("past");
} else if (currentTime.isBefore(dayTime1, "06:00 P")) {
  nineEl.classList.add("future");
} else if (currentTime.isBetween("05:00 P", "05:59 P")) {
  nineEl.classList.add(".present");
}
