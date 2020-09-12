// rest parameters
// const double = (...nums) => {
//     // do something
//     return nums.map(num => Math.pow(num, 2));
// };

// const results = double(1, 5, 5, 7, 4, 9, 2, 3, 4, 7, 9);
// console.log(results);

// // spread syntax (arrays)
// const people = ['mario', 'luigi', 'toad', 'bowser'];
// const members = ['dhrubo', 'sagnik', 'sourav', 'sagar', ...people];

// console.log(...members);

// // spread syntax (objects)
// const person = { name: 'dj', age: 22, job: 'tcs' };
// const personClone = { ...person, location: 'kolkata' };

// console.log(personClone);

// sets
// const nameArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
// console.log(nameArray);

// const nameSet = new Set(nameArray);
// console.log(nameSet);

// const uniqueNames = [...nameSet];
// const uniqueNames = [...new Set(nameArray)];
// console.log(uniqueNames);

// const ages = new Set();
// ages.add(20);
// ages.add(25).add(30);
// ages.add(20);
// ages.delete(25);

// console.log(ages, ages.size);
// console.log(ages.has(25));

// ages.clear();
// console.log(ages);


// const ninjas = new Set([
//     { name: 'shaun', age: 30 },
//     { name: 'crystal', age: 29 },
//     { name: 'chun-li', age: 32 }
// ]);

// ninjas.forEach(ninja => {
//     console.log(ninja.name, ninja.age);
// });

// Symbols
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const ninja = {};

ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';

console.log(ninja);