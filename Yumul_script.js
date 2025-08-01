// Yumul, Randel Angelo L.
// CS - 301
// IMODSIM
const clock = document.getElementById('clock');

for (let i = 1; i <= 12; i++) {
  const number = document.createElement('div');
  number.className = 'number';
  number.innerText = i;

  let angleInDegrees = i * 30;
  let angleInRadians = angleInDegrees * (Math.PI / 180);
  let radius = 120;
  let centerX = 150;
  let centerY = 150;
  let x = centerX + radius * Math.sin(angleInRadians);
  let y = centerY - radius * Math.cos(angleInRadians);

  number.style.left = x + "px";
  number.style.top = y + "px";

  clock.appendChild(number);
}

function updateClock() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDeg = second * 6;
  const minuteDeg = minute * 6 + second * 0.1;
  const hourDeg = (hour % 12) * 30 + minute * 0.5;

  document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
