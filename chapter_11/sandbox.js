// // dates & times

// const now = new Date();

// console.log(now);
// console.log(typeof now);

// // year, months, days, time

// console.log('getFullYear', now.getFullYear());
// console.log('getMonth', now.getMonth());
// console.log('getDate', now.getDate());
// console.log('getDay', now.getDay());
// console.log('getHours', now.getHours());
// console.log('getMinutes', now.getMinutes());
// console.log('getSeconds', now.getSeconds());

// // date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// timestamp (miliseconds since 1970/01/01)

// console.log('timestamp', Math.round(now.getTime() / (1000 * 3600 * 24 * 365)));

// const before = new Date('February 1 2020 12:00:00');
// const now = new Date();

// const diff = now.getTime() - before.getTime()
// console.log(diff);

// const mins = Math.round(diff / (1000 * 60));
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);
// const months = Math.round(days / 28);
// console.log(mins, hours, days, months);

// console.log(`the blog was written ${days} days ago`);

// // converting timestamps into date objects

// const timestamp = 1597129655802;
// console.log(new Date(timestamp));

// date-fns

const now = new Date();

// console.log(dateFns.isToday(now));

// formatting options

console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd DD MMMM YYYY'));

// comparing dates

const before = new Date('February 1 2020 12:00:00');

console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));