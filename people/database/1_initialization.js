
let data = cat('./1_initialization.csv');
let people = data.split(new RegExp('[\r\n]'));

console.log(people.length, people);