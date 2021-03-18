const setMonth = (length, month) => {
	const monthInt = parseInt(month % 12);
	const monthArr =
		length === 'short'
			? [
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
			  ]
			: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December',
			  ];
	return monthArr[monthInt - 1];
};
const formatDate = (length, date) => {
	if (length === 'short') {
		const [, month, day] = date.split('-');
		return `${setMonth('short', month)} ${day}`;
	}
	const [year, month, day] = date.split('-');
	return `${setMonth('long', month)} ${day}, ${year}`;
};

export default formatDate;
