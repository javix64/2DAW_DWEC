function exerciseBook(){
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
        get nextBookToRead(){
            /* let nextBook=this.books.findIndex(libro =>{return !libro.read;});
            return this.books[nextBook+1]; */
            //conocer la posicion donde esta el ultimo libro leido
            //sumarle uno
            // devolver el libro.
            //A reference to the next book to read (book object)
            
        }
        get currentBook(){
            
            //A reference to the current book being read (book object)
        }
        get lastBookRead(){
            //A reference to the last book read (book object)
            
        }
        get allBooks(){

        }
        
    }
    const libro = new Book('El Metodo','Neil Strauss','Male',true);
    const libro1 = new Book('El Metodo1','Neil Strauss','Male',false);
    const libro2 = new Book('El Metodo2','Neil Strauss','Male',false);
    const library=new BookList();
    library.addBook(libro);
    library.addBook(libro1);
    library.addBook(libro2);
    console.log("Libros leidos = " + library.nextBookToRead);
    console.log(library);
/*
//document.getElementById("id").value;
//document.getElementById("id").innerHTML+=__;
*/
}