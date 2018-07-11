/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 1.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null,
};

startBtn.addEventListener("click", startTimer)

function startTimer() {
  const startTime = Date.now();
  let deltaTime = timer.deltaTime;
  timer.id = setInterval(timerIncrementionFn(startTime), 100)
}

function timerIncrementionFn(startTime) {
  deltaTime = Date.now() - startTime; 
  updateClockface(clockface, deltaTime)
}

function updateClockface(elem, time) {
  elem.textContent = getFormattedTime(time);
}

function getFormattedTime(time) {
  const date = new Date(time);

  let dateMinutes = date.getMinutes();
  let dateSeconds = date.getSeconds();
  let dategetMilliseconds = String(date.getMilliseconds()).substring(2);

  if (dateMinutes < 10) dateMinutes = "0" + dateMinutes;
  if (dateSeconds < 10) dateSeconds = "0" + dateSeconds;

  return `${dateMinutes}:${dateSeconds}.${dategetMilliseconds}`;
}





// ===============================

/*
* Подсветка активной кнопки
*/
function setActiveBtn(target) {
  if (target.classList.contains("active")) {
    return;
  }

  startBtn.classList.remove("active");
  stopBtn.classList.remove("active");

  target.classList.add("active");
}
