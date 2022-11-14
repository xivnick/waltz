
const GEN_TIME_INTERVAL = 20 // ms

const divs = document.querySelectorAll('.hour-box, .minute-box, .second-box');
const hidden = [];

const init = () => {
	for(let div of divs) {
		div.classList.add('hidden');
	}

	for(let i = 0; i < divs.length; i++){
		hidden.push(i);
	}
}

const structure = () => {

	const sel = Math.floor(Math.random() * hidden.length);
	const idx = hidden[sel];
	divs[idx].classList.remove('hidden');

	hidden.splice(sel, 1);

	if(hidden.length === 0) return;

	setTimeout(() => structure(), GEN_TIME_INTERVAL);
} 

init();
structure();