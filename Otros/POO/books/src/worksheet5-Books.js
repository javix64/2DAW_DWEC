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
class View{
    constructor(){
        this.title;
        this.author;
        this.genre;
        this.readDate;
    }
    newBook(){
        //new elements in booklist
        const readingList = document.getElementsByClassName('readingList')[0];
        const article = document.createElement('article');
        const info = document.createElement('div');
        const pTitle = document.createElement('p');
        const other = document.createElement('other');
        const pAuthor = document.createElement('p');
        const pGenre = document.createElement('p');
        const pDate = document.createElement('p');
        //get text from inputs;
        let titleValue = document.getElementById('title').value;
        let authorValue = document.getElementById('author').value;
        let genreValue = document.getElementById('genre').value;
        //set attributes
        info.setAttribute('class','info');
        other.setAttribute('id','other');
        pTitle.setAttribute('id','pTitle');
        pAuthor.setAttribute('id','pAuthor');
        pGenre.setAttribute('id','pGenre');
        pDate.setAttribute('id','date');
        //set innerText
        this.title=titleValue;
        this.author=authorValue;
        this.genre=genreValue;
        const book=new Book(this.title,this.author,this.genre);
        pTitle.innerText=this.title;
        pAuthor.innerText=this.author;
        pGenre.innerText=this.genre;
        //append to class readinglist;
        readingList.append(article);
        article.append(info);
        info.append(pTitle);
        info.append(other);
        other.append(pAuthor);
        other.append(pGenre);
        article.append(pDate);
    }

}
const libro0 = new Book('El Metodo','Neil Strauss','Ficcion',true);
const libro1 = new Book('Inteligencia emocional','Daniel Goleman','Psicologia',true);
const libro2 = new Book('El Padrino','Mario Puzo','Novela negra',false);
const libro3 = new Book('El reino de la felicidad','Jiddu Krishnamurti','Filosofia',false);
let library=new BookList();
library.addBook(libro0);
library.addBook(libro1);
library.addBook(libro2);
library.addBook(libro3);
console.log(library);
const vista= new View();
document.getElementById('newBook').addEventListener('click',function(){vista.newBook();});