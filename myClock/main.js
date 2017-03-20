"use strict";

function initialClocks() {
  var d = new Date();
  var seconds = d.getSeconds();
  var minutes = d.getMinutes();
  var hours = d.getHours();

  var currentSeconds = document.querySelectorAll("div")[1];
  var secondsDegree = seconds * 6;
  currentSeconds.style.cssText = "transform: rotate(" + secondsDegree + "deg);";

  var currentMinutes = document.querySelectorAll("div")[3];
  var minutes60 = minutes % 60;
  var minutesDegree = 360 * minutes60 / 60;
  currentMinutes.style.cssText = "transform: rotate(" + minutesDegree + "deg);";

  var currentHour = document.querySelectorAll("div")[5];
  var hours12 = hours % 12;
  var hoursDegree = 360 * hours12 / 12;
  currentHour.style.cssText = "transform: rotate(" + hoursDegree + "deg);";
}
setInterval(initialClocks, 1000);
