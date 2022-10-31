import { Book } from "./Book";

let myBook = new Book('Introducción a Javascript', 233, '23443-BC23333', 'Joseph Smith', 'Now Editions')

console.log(myBook.toString());
console.log(myBook.getTitle());
console.log(myBook.getPages());
console.log(myBook.getIsbn());
console.log(myBook.getAuthor());
console.log(myBook.getEditorial());


myBook.setTitle('New Title')
myBook.setPages(333)
myBook.setIsbn('97884523584258')
myBook.setAuthor('New Author')
myBook.setEditorial('New Editorial')


console.log(myBook.getTitle());
console.log(myBook.getPages());
console.log(myBook.getIsbn());
console.log(myBook.getAuthor());
console.log(myBook.getEditorial());