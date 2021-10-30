// UI variables

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('mins');
const secondsEl = document.getElementById('secs');
const eventTitle = document.querySelector('.event-title');
const eventName = document.querySelector('.event-input');
const eventDate = document.querySelector('.event-date');
const setCountDown = document.querySelector('.btn-event');
const navbar = document.querySelector('.nav');
const header = document.querySelector('.header');

let newYear, newEvent;

setCountDown.addEventListener('click', (e) => {
  e.preventDefault();
  // if (!eventName.value || !eventDate.value) return alert('cant be blank');

  newYear = eventDate.value;
  newEvent = String(eventName.value);
  countdown();
  header.classList.remove('hidden');
  navbar.classList.add('hidden');
});

function countdown() {
  const newYearDate = new Date(newYear);
  const curDate = new Date();
  const totalSecs = (newYearDate - curDate) / 1000;

  const days = Math.floor(totalSecs / 3600 / 24);
  const hours = Math.floor(totalSecs / 3600) % 24;
  const mins = Math.floor(totalSecs / 60) % 60;
  const secs = Math.floor(totalSecs) % 60;

  if (days <= 0) {
    document.querySelector('.countdown-container').style.visibility = 'hidden';
    clearInterval(countdownInterval);
  } else {
    eventTitle.innerHTML = newEvent;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formateTime(hours);
    minutesEl.innerHTML = formateTime(mins);
    secondsEl.innerHTML = formateTime(secs);
  }
  function formateTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}

// Initial call
countdown();

const countdownInterval = setInterval(countdown, 1000);
