
/*
Assignment 5: Example 1 - Starting with the `websiteLinks` array, create an array called `secureUrls`.
`secureUrls` should be only the urls where the 'secure' property is 'yes', and should be prefixed
with `https://`.

For example:
const websiteLinks = [
	{ url: 'www.fvtc.edu', secure: 'yes' },
	{ url: 'www.fvtc.software', secure: 'no' }
]

Would result in:
[
	'https://www.fvtc.edu'
]


TO TEST:
You can run this example by running `node problems/example` in your terminal,
or you can run all by running `node run-all`.
*/

const { test } = require('../tester')

const websiteLinks = [
	{ url: 'www.google.com', secure: 'yes' },
	{ url: 'www.yahoo.com', secure: 'yes' },
	{ url: 'www.bing.com', secure: 'no' },
	{ url: 'www.duckduckgo.com', secure: 'yes' },
	{ url: 'www.ask.com', secure: 'no' }
]

const secureUrls = websiteLinks // append your array methods here
	.filter(link => link.secure === 'yes')
	.map(link => `https://${link.url}`)

test("Example", secureUrls)
