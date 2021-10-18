const books = [
	{bookName: "Harry Potter and the Philosopher's Stone", movieName: "Harry Potter and the Sorcerer's Stone", bookYear: 1997, movieYear: 2001},
	{bookName: "Harry Potter and the Half-Blood Prince", movieName: "Harry Potter and the Half-Blood Prince ", bookYear: 2005, movieYear: 2009},
	{bookName: "Harry Potter and the Deathly Hallows", movieName: "Harry Potter and the Deathly Hallows: Part 1", bookYear: 2007, movieYear: 2010},	
	{bookName: "Harry Potter and the Prisoner of Azkaban", movieName: "Harry Potter and the Prisoner of Azkaban", bookYear: 1999, movieYear: 2004},
	{bookName: "Harry Potter And The Goblet Of Fire", movieName: "Harry Potter and the Goblet of Fire", bookYear: 2000, movieYear: 2005},
	{bookName: "Harry Potter and the Chamber of Secrets", movieName: "Harry Potter and the Chamber of Secrets ", bookYear: 1998, movieYear: 2002},
	{bookName: "Harry Potter And The Order Of The Phoenix", movieName: "Harry Potter and the Order of the Phoenix", bookYear: 2003, movieYear: 2007},
]

const characters = [
	'Hannah, Abbott', 'Katie, Bell', 'Phineas Nigellus, Black', 'Sirius, Black', 'Bathilda, Bagshot', 'Ron, Weasley',
	'Terry, Boot', 'Severus, Snape', 'Lavender, Brown', 'Cho, Chang', 'Vincent, Crabbe', 'Colin, Creevey', 'Barty, Crouch',
	'Fleur, Delacour',  'Cedric, Diggory', 'Albus, Dumbledore', 'Dudley, Dursley', 'Vernon, Dursley', 'Newt, Scamander',
	'Petunia, Dursley', 'Argus, Filch', 'Cornelius, Fudge', 'Hermione, Granger', 'Rubeus, Hagrid', 'Angelina, Johnson',
	'Bellatrix, Lestrange', 'George, Weasley', 'Neville, Longbottom', 'Luna, Lovegood', 'Remus, Lupin', 'Draco, Malfoy', 'Lucius, Malfoy',
	'Minerva, McGonagall', 'Viktor, Krum', 'Alastor (Mad-Eye), Moody', 'Harry, Potter', 'Thomas Marvolo, Riddle',  'Rita, Skeeter', 
	'Nymphadora, Tonks', 'Sybill, Trelawney', 'Dolores, Umbridge', 'Arthur, Weasley', 'Bill, Weasley', 'Charlie, Weasley',
	'Fred, Weasley', 'Dedalus, Diggle', 'Ginny, Weasley', 'Molly, Weasley', 'Percy, Weasley',  'Oliver, Wood',
]

//1.filter
// const after_2005 = books.filter(function(book) {
// 	if(book.bookYear >=2000 && book.bookYear < 2005){
// 		return true;
// 	}
// })

const after_2005 = books.filter(book => (book.bookYear >=2000 && book.bookYear < 2005));
console.table(after_2005);
//2.map
const bothNames = books.map(book => `${book.bookName} ${book.movieName}`);
console.log(bothNames);

//3.sort
// const newest = books.sort(function(a, b){
// 	if(a.bookYear < b.bookYear){
// 		return 1;
// 	}else{
// 		return -1;
// 	}
// })


const newest = books.sort((a, b) => a.bookYear < b.bookYear ? 1 : -1)
console.table(newest);

//4.reduce
const gap = books.reduce((total, book) => {
	return total + (book.movieYear - book.bookYear)
}, 0)

console.log(gap);

//5.
const biggestGap = books.sort(function(a, b){
	const smallest = a.movieYear - a.bookYear;
	const biggest = b.movieYear - b.bookYear;
	return biggest > smallest ? 1 : -1;
})
console.table(biggestGap);
//6.https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')];

// const de = links
// 				.map(link=>link.textContent)
// 				.filter(streetName => streetName.includes('de'));

//7.sort alphabeticaly

const alpha = characters.sort((lastOne, nextOne) => {
	const [aFirst, aLast] = lastOne.split(', ');
	const [bFirst, bLast] = nextOne.split(', ');
	return aFirst > bFirst ? 1 : -1;
})
console.log(alpha);

//8. 
const data = ['cat', 'owl', 'mouse', 'owl', 'cat', 'owl'];
const animals = data.reduce(function(obj, item){
	if(!obj[item]){
		obj[item] = 0
	}
	obj[item]++;
	return obj;
}, {})
console.log(animals)