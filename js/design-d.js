
(() => {
const hours = document.querySelector('.d #hours');
const minutes = document.querySelector('.d #minutes');
const seconds = document.querySelector('.d #seconds');

for(let i = 0; i < 12; i++){
	hours.innerHTML += `<div class="hour-box level-${Math.floor(i / 4)} rot-${i % 4} color-${(Math.floor(i / 4) + i) % 2}"></div>`;
}

for(let i = 0; i < 60; i++){
	minutes.innerHTML += `<div class="minute-box rot-${i} color-${i % 2}"></div>`;
}

for(let i = 0; i < 60; i++){
	seconds.innerHTML += `<div class="second-box rot-${i} color-${i % 2}"></div>`;
}

})();