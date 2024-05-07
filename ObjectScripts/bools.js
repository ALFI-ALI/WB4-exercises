//Array of objects
let books = [
    {
        title: 'The Thief Lord',
        pages: 345,
        author: 'Cornelia Funke',
        genre: ['Fantasy', 'Adventure'],
        price : 50,
        isbn: '978-0545227704'
    },
    {
        title: 'The Go-Giver',
        pages: 123,
        author: 'Bob Burg',
        price : 40,
        genre: ['self help','psychology'],  // No genre provided; initialize with empty array
        isbn: ''    // No ISBN provided; initialize with an empty string
    }
];
console.log("the title of the second book "+books[1].title);
console.log("the author "+books[0].author);

//Temperal literal string `
console.log(`Genre of the first book: ${books[0].title} is ${books[0].genre[1]} the cost fro the book $${books[0].price}`);