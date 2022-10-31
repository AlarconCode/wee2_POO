import { Library } from "./Library";
import { Book } from "./Book";

let book_1 = new Book('Un mundo feliz', 120, '9788423568425', 'Adolf Husley', 'Alfaguara')
let book_2 = new Book('1984', 250, '9788452369841', 'George Orwell', 'Castalia')

let myLibrary = new Library([book_1, book_2], 'Calle Juan Bravo, 212', 'Pedro Lopez')

myLibrary.toString()