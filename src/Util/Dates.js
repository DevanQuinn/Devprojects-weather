const setMonth = month => {
	const monthInt = parseInt(month % 12);
	const monthArr = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	return monthArr[monthInt - 1];
};
const formatDate = date => {
	const [, month, day] = date.split('-');
	return `${setMonth(month)} ${day}`;
};

export default formatDate;
