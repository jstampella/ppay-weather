export function getNamberDate(date: string): string {
	const days = [
		'Lunes',
		'Martes',
		'Miercoles',
		'Jueves',
		'Viernes',
		'Sabado',
		'Domingo',
	];
	const dateConv = new Date(date);
	return days[dateConv.getDay()].toString();
}

export function getNextSevenDays(): string[] {
	const days = [
		'Domingo',
		'Lunes',
		'Martes',
		'Miercoles',
		'Jueves',
		'Viernes',
		'Sabado',
	];
	const next7Days = [];
	for (let i = 0; i < 7; i++) {
		next7Days.push(
			days[new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).getDay()]
		);
	}
	return next7Days;
}

export const formatDate = function (dateString: string) {
	const MONTHS: any = {
		'01': 'Enero',
		'02': 'Febrero',
		'03': 'Marzo',
		'04': 'Abril',
		'05': 'Mayo',
		'06': 'Junio',
		'07': 'Julio',
		'08': 'Agosto',
		'09': 'Septiembre',
		'10': 'Octubre',
		'11': 'Noviembre',
		'12': 'Diciembre',
	};
	const splitDateString = dateString.split('-');

	const year = splitDateString[0];
	const month = splitDateString[1];
	const day = splitDateString[2];

	const formattedDate = `${MONTHS[month]} ${day}, ${year}`;

	return formattedDate;
};

export const formatTime = function (timeIn24HrFormat: string) {
	const splitTime = timeIn24HrFormat.split(':');

	const hour = splitTime[0];
	const minutes = splitTime[1];

	let formmattedHour;
	let dayNight;

	if (+hour <= 11) {
		// use "+" to force as a number
		if (+hour <= 10) {
			if (+hour === 0) {
				formmattedHour = '12';
			} else {
				formmattedHour = hour[1]; // don't take the beginning zero
			}
		} else {
			formmattedHour = hour;
		}

		dayNight = 'AM';
	} else {
		formmattedHour = +hour - 12;
		if (formmattedHour === 0) {
			formmattedHour = '12';
		}
		dayNight = 'PM';
	}

	return `${formmattedHour}:${minutes} ${dayNight}`;
};
