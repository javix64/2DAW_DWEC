class Book{
    constructor(title,author,genre,read=false){
        this.title=title;
        this.author=author;
        this.genre=genre;
        this.read=read;
        this.readDate=null;
        }
    }


class BookList{
    constructor(){
        //si no pones el this da error
        this.books=[];
    }
    addBook(libro){
        this.books.push(libro);
    }
    finishCurrentBook(libro){
        libro.read=true;
        libro.readDate=new Date(Date.now());
    }
    get booksRead(){
        let oneMore=0;
        for(let libro of this.books){
            if(libro.read){
                oneMore++;
            }
        }
        return oneMore;
    }
    get booksNotRead(){
        return this.books.length - this.booksRead;
    }
    get currentBook(){
        return this.books[this.booksRead];
        
    }
    get nextBookToRead(){
        return this.books[this.booksRead+1];
    }
    get lastBookRead(){
        return this.books[this.booksRead-1];
    }
    get allBooks(){
        return this.books;
    }
}
export{Book, BookList};