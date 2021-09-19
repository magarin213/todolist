
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");


function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const sethours = hours - 12;
  const amOrpm = hours >= 12 ? "pm" : "am"
  clockTitle.innerText = amOrpm + ` ${hours < 10 ? `${hours}` : hours > 12 ? `0${sethours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {

setInterval(getTime, 1000)


}


init();