
(() => {
const hours = document.querySelector('.k #hours');
const minutes = document.querySelector('.k #minutes');
const seconds = document.querySelector('.k #seconds');

for(let i = 0; i < 12; i++){
	hours.innerHTML += `<div class="hour-box level-${i} color-${Math.floor(i / 3)}"></div>`;
}

for(let i = 0; i < 60; i++){
	minutes.innerHTML += `<div class="minute-box rot-${i}"></div>`;
}

for(let i = 0; i < 60; i++){
	seconds.innerHTML += `<div class="second-box rot-${i}"></div>`;
}

})();