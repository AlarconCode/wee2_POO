// class Library

import { Book } from "./Book"

export class Library {

    private books:Book[]
    private address:string
    private manager:string

    constructor (books:Book[], address:string, manager:string) {

        this.books = books
        this.address = address
        this.manager = manager

    }

    // Methods

    getBooks():Book[] {
        return this.books
    }

    getAddress():string {
        return this.address
    }

    getManager():string{
        return this.manager
    }

    setBooks(books:Book[]) {
        this.books.push(...books)
    }

    setOneBook(book:Book){
        this.books.push(book)
    }

    setAddress(address:string) {
        this.address = address
    }

    setManager(manager:string){
        this.manager = manager
    }

    toString():string {
        
        let arrResult:string[]=[]
        for (let i=0; i<this.books.length; i++) {
            
           arrResult.push(`
           Book${i+1}:
           ${this.books[i].toString()}
           ` ) 
        }
        return arrResult.join('')
    }

    getNumberOfBooks():number {
        return this.books.length
    
    }

    findByAuthor(author:string) {
        for (let book of this.books) {
            if (author == book.getAuthor()) {
                return book
            } else {
                return 'No hay libros de este autor'
            }
        } 
        
    }
    
}