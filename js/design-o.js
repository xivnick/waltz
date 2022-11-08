
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

for(let i = 0; i < 12; i++){
	hours.innerHTML += `<div class="hour-box row-${Math.floor(i / 2)} col-${i % 2}"></div>`;
}

for(let i = 0; i < 60; i++){
	minutes.innerHTML += `<div class="minute-box row-${Math.floor(i / 10)} col-${i % 10}"></div>`;
}

for(let i = 0; i < 60; i++){
	seconds.innerHTML += `<div class="second-box row-${i % 30} col-${Math.floor(i / 30)}"></div>`;
}