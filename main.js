'use strict';

const DOM = {
  // CLOCK
  clock: document.querySelector('.clock'),
  hour: document.querySelector('.clock__hour'),
  min: document.querySelector('.clock__min'),
  sec: document.querySelector('.clock__sec'),

  // WEATHER
  icon: document.querySelector('.area__icon'),
  iconHolder: document.querySelector('.area__icon-holder'),
  name: document.querySelector('.area__name'),
  temperature: document.querySelector('.area__temperature'),
  degrees: document.querySelector('.area__degrees'),
  humidity: document.querySelector('.area__humidity'),
  humidityDiv: document.querySelector('.area__humidity-div'),
};

function clock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  DOM.sec.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  DOM.min.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  DOM.hour.style.transform = `rotate(${hourDegrees}deg)`;

  setTimeout(clock, 1000);
}


function letFly() {
  clock();
}

letFly();
