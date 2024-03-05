
/*
Assignment 5: Problem 1 - Turn the `people` array into an array of strings,
where each string is in the format: "Name: [full name], Age: [age]".

For example:
const people = [
	{ firstName: 'John', lastName: 'Doe', age: 25 },
	{ firstName: 'Jane', lastName: 'Doe', age: 22 }
]

Would result in:
[
	'Name: John Doe, Age: 25',
	'Name: Jane Doe, Age: 22'
]

TO TEST:
You can run this example by running `node problems/problem-1` in your terminal,
or you can run all by running `node run-all`.
*/

const { test } = require('../tester')

const people = [
	{ firstName: 'William', lastName: 'Shakespeare', age: 52 },
	{ firstName: 'Albert', lastName: 'Einstein', age: 76 },
	{ firstName: 'Isaac', lastName: 'Newton', age: 84 },
	{ firstName: 'Marie', lastName: 'Curie', age: 66 }
]

const peopleStrings = people.map(people => "Name: " + people.firstName + " " + people.lastName + ", Age: " + people.age) // append your array methods here

test("Problem 1", peopleStrings)