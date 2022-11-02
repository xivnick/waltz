
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

for(let i = 0; i < 12; i++){
	hours.innerHTML += `<div class="hour-box level-${i} color-${i}"></div>`;
}

for(let i = 0; i < 60; i++){
	minutes.innerHTML += `<div class="minute-box row-${Math.floor(i/15)} col-${i%15}"></div>`;
}

for(let i = 0; i < 60; i++){
	seconds.innerHTML += `<div class="second-box row-${Math.floor(i/30)} col-${i%30}"></div>`;
}