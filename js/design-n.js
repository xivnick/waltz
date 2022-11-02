
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

for(let i = 0; i < 12; i++){
	hours.innerHTML += `<div class="hour-box rot-${i}"></div>`;
}

for(let i = 0; i < 60; i++){
	minutes.innerHTML += `<div class="minute-box rot-${i}"></div>`;
}

let group1 = "";
for(let i = 0; i < 15; i++){
	group1 += `<div class="second-box rot-${i} color-${i%5}"></div>`;
}
let group2 = "";
for(let i = 0; i < 15; i++){
	group2 += `<div class="second-box rot-${i} color-${i%5}"></div>`;
}
let group3 = "";
for(let i = 0; i < 15; i++){
	group3 += `<div class="second-box rot-${i} color-${i%5}"></div>`;
}
let group4 = "";
for(let i = 0; i < 15; i++){
	group4 += `<div class="second-box rot-${i} color-${i%5}"></div>`;
}

seconds.innerHTML = `
	<div class="second-group pos-top pos-right">${group1}</div>
	<div class="second-group pos-bottom pos-right">${group2}</div>
	<div class="second-group pos-bottom pos-left">${group3}</div>
	<div class="second-group pos-top pos-left">${group4}</div>
`