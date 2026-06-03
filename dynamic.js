// const secondHand = document.querySelector(".sec-hand");

// const minsHand = document.querySelector(".min-hand");

// const hourHand = document.querySelector(".hour-hand");

// function setDate() {
//   const now = new Date();

//   const seconds = now.getSeconds();

//   const mins = now.getMinutes();

//   const hour = now.getHours();

//   const secondsDegrees = (seconds / 60) * 360 + 90;

//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//   const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;

//   minsHand.style.transform = `rotate(${minsDegrees}deg)`;

//   const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;

//   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// }

const secondHand = document.querySelector(".sec-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  const hourDegrees = (hours / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees})`;
}

function digitalClock() {
  const date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";

  if (hrs === 0) hrs = 12;
  if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  if (hrs == 12) period = "PM";

  hrs = hrs < 10 ? `0${hrs}:` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  document.getElementById("clock").textContent =
    `${hrs}${mins}:${secs} ${period}`;
}

function date() {
  const date = new Date();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();

  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  document.getElementById("date").textContent = `${day}/${month}/${year}`;
}

setDate();
date();
digitalClock();

setInterval(() => {
  setDate();

  digitalClock();
}, 1000);
