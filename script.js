const title = document.querySelector('title');
const days = document.querySelector('.day');
const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');
const nextYear = document.querySelector('.next-year');
const nextYear2 = document.querySelector('.h');

const newYearTime = new Date('January 1, 2026 00:00:00');

title.innerText = '2026 Countdown';
nextYear.innerText = 2026;
nextYear2.innerText = 2026;

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = `${d} Days`;
  hours.innerHTML = `${h < 10 ? '0' + h : h} Hours`;
  minutes.innerHTML = `${m < 10 ? '0' + m : m} Minutes`;
  seconds.innerHTML = `${s < 10 ? '0' + s : s} Seconds`;
}

setInterval(updateCountdown, 1000);
