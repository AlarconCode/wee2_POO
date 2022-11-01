import { Library } from "./Library";
import { Book } from "./Book";

let book_1 = new Book('Un mundo feliz', 120, '9788423568425', 'Adolf Husley', 'Alfaguara')
let book_2 = new Book('1984', 250, '9788452369841', 'George Orwell', 'Castalia')
let book_3 = new Book('Roma soy yo: Julio Cesar', 800, '9788425642635', 'Santiago Posteguillo', 'Alfaguara')
let book_4 = new Book('Las Legiones Malditas', 900, '9788452354128', 'Santiago Posteguillo', 'De Bolsillo')

let myLibrary = new Library([book_1, book_2], 'Calle Juan Bravo, 212', 'Pedro Lopez')

console.log(myLibrary.toString());
console.log(myLibrary.getNumberOfBooks());
console.log(myLibrary.findByAuthor('Adolf Husley'));

console.log(myLibrary.getAddress());
console.log(myLibrary.getBooks());
console.log(myLibrary.getManager());
myLibrary.setAddress('new address')
console.log(myLibrary.getAddress());
myLibrary.setOneBook(book_3)
console.log(myLibrary.toString());
myLibrary.setBooks([book_1, book_2, book_3, book_4])
console.log(myLibrary.toString());
myLibrary.setManager('Juan Perez')
console.log(myLibrary.getManager());

