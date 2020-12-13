class Vista{
    constructor(){
        this.section;
        this.article;
        this.id1=0;
    }
    newNote(){
        // essential elements.
        this.section=document.getElementsByTagName("section")[0];
        this.article=document.createElement("article");
        this.section.appendChild(this.article);

        //new elements
        this.input=document.createElement('input');
        this.textarea=document.createElement('textarea');
        this.divFooter=document.createElement('div');
        this.pFecha=document.createElement('p');
        this.button=document.createElement('button');
        //set attributes
        this.input.setAttribute('type','text');
        this.input.setAttribute('name','titulo');
        this.textarea.setAttribute('name','contenido');
        this.divFooter.setAttribute('class','footer');
        this.pFecha.setAttribute('class','fecha');
        this.pFecha.innerText='fecha actual';
        this.button.setAttribute('id','borrar');
        this.button.innerText='Borrar';
        //this.article.setAttribute('id',this.id);
        //add elements created.
        this.article.append(this.input);
        this.article.append(this.textarea);
        this.divFooter.append(this.pFecha);
        this.divFooter.append(this.button);
        this.article.append(this.divFooter);
        //falta autoincrementar id
        //y tampoco falta porque puedo hacer un getelementsbytagname.
        
    }

    
}//fin vista

class Modelo{
    //donde van las notas, lo que se almacena
    constructor(){
        this.titulo;
        this.fecha;
        this.contenido;
        this.arrNote=[];
    }
    getAllNotes(){

    }
    
}// fin modelo

class Controlador{
    constructor(){
        this.titulo;
        this.fecha;
        this.contenido;
        this.arrNote=[];
        this.jsonNotes;
    }
    objectStickyNote(){
        var controla=new Controlador();
        return controla;
    }
    getStickyNotes(){
        //primero tengo que crear objeto-nota
        //en name, poner a que campo corresponde
        //en value, poner el valor.
        var allArticle=document.getElementsByTagName('article');
        this.arrNote=[["","",""]];
        for (let i = 0; i < allArticle.length; i++) {
            if(this.arrNote[i][0]!==document.getElementsByName('titulo')[i]){
                this.titulo=document.getElementsByName('titulo')[i].value;
                this.fecha=new Date();
                this.contenido=document.getElementsByName('contenido')[i].value;
                this.jsonNotes={
                    "Titulo":this.titulo,
                    "Fecha":this.fecha,
                    "Contenido":this.contenido
                }
                this.arrNote.push(this.jsonNotes);

                console.log(this.jsonNotes);
            }
        }
        this.arrNote.shift();
        return this.arrNote;
    }
    setStickyNotes(){

    }
    deleteNote(){

    }
} //fin controlador
class DarkMode{
    constructor(){
        this.section;
        this.header;
        this.back-article;
        this.h2;
        //section               #5297a0
        //header                #008a64
        //back-article          #008a64
        //h2                    #003425
    }
    changeStyle(){

    }
}


let vista= new Vista();
//para crear nueva nota
var newNote=document.getElementById('newNote');
newNote.addEventListener('click',vista.newNote);
let controla=new Controlador();
//para almacenar notas
var saveNote=document.getElementById('saveNotes');
saveNote.addEventListener('click',controla.getStickyNotes);