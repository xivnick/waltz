
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

for(let i = 0; i < 12; i++){
	hours.innerHTML += `<div class="hour-box rot-${i}"></div>`;
}

for(let i = 0; i < 15; i++){
	minutes.innerHTML += `<div class="minute-box rot-${44-i} color-0"></div>`;
}
for(let i = 15; i < 30; i++){
	minutes.innerHTML += `<div class="minute-box rot-${74-i} color-1"></div>`;
}
for(let i = 30; i < 45; i++){
	minutes.innerHTML += `<div class="minute-box rot-${74-i} color-0"></div>`;
}
for(let i = 45; i < 60; i++){
	minutes.innerHTML += `<div class="minute-box rot-${44-i} color-1"></div>`;
}

for(let i = 0; i < 15; i++){
	minutes.innerHTML += `<div class="second-box rot-${44-i}"></div>`;
}
for(let i = 0; i < 30; i++){
	minutes.innerHTML += `<div class="second-box rot-${74-i}"></div>`;
}
for(let i = 0; i < 45; i++){
	minutes.innerHTML += `<div class="second-box rot-${44-i}"></div>`;
}
for(let i = 0; i < 60; i++){
	minutes.innerHTML += `<div class="second-box rot-${74-i}"></div>`;
}