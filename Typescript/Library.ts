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
        this.books = books
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

    toString() {
       
        this.books.forEach((value, index) => {
            return ` Book${index+1}:
            ${value}
            `
         })

    }

}