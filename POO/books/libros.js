import {Book, BookList} from './worksheet5-Books.js';
const libro0 = new Book('El Metodo','Neil Strauss','Male',true);
const libro1 = new Book('Inteligencia emocional','Daniel Goleman','Male',true);
const libro2 = new Book('El Padrino','Mario Puzo','Male',false);
const libro3 = new Book('El reino de la felicidad','Jiddu Krishnamurti','Male',false);
let library=new BookList();
library.addBook(libro0);
library.addBook(libro1);
library.addBook(libro2);
library.addBook(libro3);