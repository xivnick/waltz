
const hour_boxes = document.querySelectorAll('.hour-box');
const minute_boxes = document.querySelectorAll('.minute-box');
const second_boxes = document.querySelectorAll('.second-box');

const getTimeCurrent = () => {
	const time = new Date();
	const hour = time.getHours() % 12;
	const minute = time.getMinutes();
	const second = time.getSeconds();

	return { hour, minute, second };
}

const getTimeOffset = (ho = 0, mo = 0, so = 0) => {
	const time = new Date();

	let hour = time.getHours() + ho;
	let minute = time.getMinutes() + mo;
	let second = time.getSeconds() + so;

	if(second >= 60) {
		minute += parseInt(second / 60);
		second = second % 60;
	}
	if(minute >= 60) {
		hour += parseInt(minute / 60);
		minute = minute % 60;
	}
	if(hour >= 12) {
		hour = hour % 12;
	}

	return { hour, minute, second };
}

const fillTime = (hour, minute, second) => {

	for(let i = 0; i < hour; i++) hour_boxes[i].classList.add('on');
	for(let i = 0; i < minute; i++) minute_boxes[i].classList.add('on');
	for(let i = 0; i < second; i++) second_boxes[i].classList.add('on');
}

const clearClockwise = (level, cur) => {

	if(level === 0){
		if(cur === 12) return;

		hour_boxes[cur].classList.remove('on');	
	}

	if(level === 1){
		if(cur === 60) return;

		minute_boxes[cur].classList.remove('on');	
	}

	if(level === 2){
		if(cur === 60) return;

		second_boxes[cur].classList.remove('on');
	}

	setTimeout(() => clearClockwise(level, cur+1), 50);
}

const tick = () => {

	// const { hour, minute, second } = getTimeCurrent();
	const { hour, minute, second } = getTimeOffset(0, 0, 0);

	if(hour === 0 && minute === 0 && second === 0) {

		fillTime(12, 60, 60);

		clearClockwise(0, 0);
		clearClockwise(1, 0);
		clearClockwise(2, 0);
	}

	else if(minute === 0 && second === 0) {
		fillTime(hour, 60, 60);

		clearClockwise(1, 0);
		clearClockwise(2, 0);
	}

	else if(second === 0) {
		fillTime(hour, minute, 60);

		clearClockwise(2, 0);
	}

	else fillTime(hour, minute, second);
}

setInterval(tick, 1000);
tick();