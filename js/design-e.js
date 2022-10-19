
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

for(let i = 0; i < 12; i++){
	hours.innerHTML += `<div class="hour-box rot-${i}"></div>`;
}

for(let i = 0; i < 60; i++){
	minutes.innerHTML += `<div class="minute-grid level-${i % 5}"><div class="minute-box rot-${Math.floor(i / 5)} color-${i % 5}"></div>`;
}

for(let i = 0; i < 60; i++){
	seconds.innerHTML += `<div class="second-box rot-${i}"></div>`;
}
