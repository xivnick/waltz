
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

for(let i = 0; i < 12; i++){
	hours.innerHTML += `<div class="hour-box rot-${i}"></div>`;
}

hours.innerHTML = `<div class="hour-turn">${hours.innerHTML}</div>`;

group1 = '';
for(let i = 0; i < 15; i++){
	group1 += `<div class="minute-box rot-${44-i} color-0"></div>`;
}

group2 = '';
for(let i = 15; i < 30; i++){
	group2 += `<div class="minute-box rot-${74-i} color-1"></div>`;
}

group3 = '';
for(let i = 30; i < 45; i++){
	group3 += `<div class="minute-box rot-${44-i} color-0"></div>`;
}

group4 = '';
for(let i = 45; i < 60; i++){
	group4 += `<div class="minute-box rot-${74-i} color-1"></div>`;
}

minutes.innerHTML = `
	<div class="minute-turn">
		<div class="minute-group pos-top pos-right">${group1}</div>
		<div class="minute-group pos-bottom pos-right">${group2}</div>
		<div class="minute-group pos-bottom pos-left">${group3}</div>
		<div class="minute-group pos-top pos-left">${group4}</div>
	</div>
`;

group1 = '';
for(let i = 0; i < 15; i++){
	group1 += `<div class="second-box rot-${44-i} color-0"></div>`;
}

group2 = '';
for(let i = 15; i < 30; i++){
	group2 += `<div class="second-box rot-${74-i} color-1"></div>`;
}

group3 = '';
for(let i = 30; i < 45; i++){
	group3 += `<div class="second-box rot-${44-i} color-0"></div>`;
}

group4 = '';
for(let i = 45; i < 60; i++){
	group4 += `<div class="second-box rot-${74-i} color-1"></div>`;
}

seconds.innerHTML = `
	<div class="second-group pos-top pos-right">${group1}</div>
	<div class="second-group pos-bottom pos-right">${group2}</div>
	<div class="second-group pos-bottom pos-left">${group3}</div>
	<div class="second-group pos-top pos-left">${group4}</div>

`;