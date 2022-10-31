// Class Book

export class Book {

    private title:string
    private nPages:number
    private isbn:string
    private author:string
    private editorial:string

    constructor (title:string, nPages:number, isbn:string, author:string, editorial:string) {

        this.title = title
        this.nPages = nPages
        this.isbn = isbn
        this.author = author
        this.editorial = editorial

    }

    
    // getters
    getTitle():string {
        return this.title
    }
    
    getPages():number {
        return this.nPages
    }
    
    getIsbn():string {
        return this.isbn
    }
    
    getAuthor():string {
        return this.author
    }
    
    getEditorial():string {
        return this.editorial
    }
    
    // setters
    
    setTitle(newTitle:string) {
        this.title = newTitle
    }
    
    setPages(newPages:number) {
        this.nPages = newPages
    }
    
    setIsbn(newIsbn:string) {
        this.isbn = newIsbn
    }
    
    setAuthor(newAuthor:string) {
        this.author = newAuthor
    }
    
    setEditorial(newEditorial:string) {
        this.editorial = newEditorial
    }
    
    // Methods
    
    toString():string {
        let result:string[]=[]
        for (let property in this) {
            if (typeof this[property] != 'function'){

                result.push(`
                ${property} - ${this[property]}`)

            }
                    
        }
        return result.join('')

    }
    
}