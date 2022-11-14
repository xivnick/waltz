
(() => {
const hours = document.querySelector('.o #hours');
const minutes = document.querySelector('.o #minutes');
const seconds = document.querySelector('.o #seconds');

for(let i = 0; i < 12; i++){
	hours.innerHTML += `<div class="hour-box row-${Math.floor(i / 2)} col-${i % 2}"></div>`;
}

for(let i = 0; i < 60; i++){
	minutes.innerHTML += `<div class="minute-box row-${Math.floor(i / 10)} col-${i % 10}"></div>`;
}

for(let i = 0; i < 60; i++){
	seconds.innerHTML += `<div class="second-box row-${i % 30} col-${Math.floor(i / 30)}"></div>`;
}
})();