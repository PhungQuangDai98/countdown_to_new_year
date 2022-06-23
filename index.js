const getDateTime = (endTime) => {
	const total = new Date(endTime).getTime() - new Date().getTime();
	const obj = {
		second: 1000,
		minute: 1000 * 60,
		hour: 1000 * 60 * 60,
		day: 1000 * 60 * 60 * 24,
	};

	const days = Math.floor(total / obj.day);
	const hours = Math.floor((total % obj.day) / obj.hour);
	const minutes = Math.floor((total % obj.hour) / obj.minute);
	const seconds = Math.floor((total % obj.minute) / obj.second);
	return { total, days, hours, minutes, seconds };
};
const getNewYear = () =>
	new Date(`${new Date().getFullYear() + 1}-1-1 00:00:00`);

const app = () => {
	const year = new Date().getFullYear() + 1;
	if (!(globalThis.__newYear === year)) {
		globalThis.__newYear = year;
		document.getElementsByTagName(
			"h2"
		)[0].innerHTML = `<span>Countdown to New Year</span>${globalThis.__newYear}`;
		console.log(globalThis.__newYear);
	}
	const date = getDateTime(getNewYear());

	document.getElementById("day").innerText = date.days;
	document.getElementById("hour").innerText = date.hours;
	document.getElementById("minute").innerText = date.minutes;
	document.getElementById("second").innerText = date.seconds;
};
setInterval(app, 1000);
