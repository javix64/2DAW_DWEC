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
        this.button.setAttribute('class','delete');
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
        let view=new Vista();
        view.idBorrar();
        view=null;
    }

    changeStyle(){
        //<link rel="stylesheet" href="src/darkMode.css">
        let stylesheet=document.getElementsByTagName('link')[0];
        stylesheet.setAttribute('rel','stylesheet');
        let style=stylesheet.getAttribute('href');
        let buttonText=document.getElementById('style');

        if(style=='src/lightMode.css'){
            stylesheet.setAttribute('href','src/darkMode.css');
            buttonText.innerText='Dark Mode';
        }else if(style=='src/darkMode.css'){
            stylesheet.setAttribute('href','src/lightMode.css');
            buttonText.innerText='Light Mode';
        }
        
        
    }
    idBorrar(){
        let borrar=document.getElementsByClassName('delete');
        for (let i = 0; i < borrar.length; i++) {
            borrar[i].setAttribute('id','borrar'+i);
            
        }
    }
}//fin vista

class Modelo{
    //donde van las notas, lo que se almacena
    constructor(){
        this.titulo;
        this.fecha;
        this.contenido;
        this.arrNote=[];
        this.loadJson;
    }

    saveAllNotes(guardar){
        let stringify=JSON.stringify(guardar);
        localStorage.setItem('0',stringify);
    }

    loadAllNotes(){
        let storage=localStorage.getItem('0');
        return this.loadJson=JSON.parse(storage);
    }
    
}// fin modelo

class Controlador{
    constructor(){
        this.titulo;
        this.fecha;
        this.contenido;
        this.arrNote=[];
        this.note;
    }

    saveStickyNotes(){
        //primero tengo que crear objeto-nota
        //en name, poner a que campo corresponde
        //en value, poner el valor.
        localStorage.clear();
        var allArticle=document.getElementsByTagName('article');
        this.arrNote=[["","",""]];
        for (let i = 0; i < allArticle.length; i++) {
            if(this.arrNote[i][0]!==document.getElementsByName('titulo')[i]){
                this.titulo=document.getElementsByName('titulo')[i].value;
                this.fecha=new Date();
                this.contenido=document.getElementsByName('contenido')[i].value;
                this.note={
                    "Titulo":this.titulo,
                    "Fecha":this.fecha,
                    "Contenido":this.contenido
                }
                this.arrNote.push(this.note);
            }
        }
        this.arrNote.shift();
        let model=new Modelo();
        model.saveAllNotes(this.arrNote);
        model=null;
    }

    loadStickyNotes(){
        let view=new Vista();
        let model=new Modelo();
        //crear tantas vista-notas como elementos en el json existan.
        if(localStorage.getItem(0)==null) localStorage.setItem(0,0);
        var notes= model.loadAllNotes();
        let article=document.getElementsByTagName('article');

        for (let i = 0; i < notes.length; i++) {
            view.newNote();
            //meter cada modelo-nota en su correspondiente vista-nota.
            for(let j=0;j<article.length;j++){
                document.getElementsByName('titulo')[j].value=notes[j].Titulo;
                document.getElementsByName('contenido')[j].value=notes[j].Contenido;
                document.getElementsByClassName('fecha')[j].innerText=notes[j].Fecha;
            }
        }
        view=null;
        model=null;
    }

    deleteStickyNote(){
        //tengo que detectar que boton he pulsado.
        //comprobar si estoy dentro de un article
        //registrar el boton que he pulsado y borrarlo
        let modelo=new Modelo();
        let borro;
        let article=document.getElementsByTagName('article');
        for (let i = 0; i < article.length; i++) {
            function clear(){
                let borrar=document.getElementById('borrar'+i);
                borrar.addEventListener('click',function(){borrar.parentElement.parentElement.remove();borro=i});
                /* let save=modelo.loadAllNotes().splice(i, 1);
                modelo.saveAllNotes(save);
                console.log(i); */
            }
            article[i].addEventListener("mouseenter", clear);
        }
    }
} //fin controlador

let vista= new Vista();
//para cambiar CSS
let stlye=document.getElementById('style');
style.addEventListener('click',vista.changeStyle)
//crea una nueva nota
let newNote=document.getElementById('newNote');
newNote.addEventListener('click',vista.newNote);
let controla=new Controlador();
//para almacenar notas
let saveNote=document.getElementById('saveNotes');
saveNote.addEventListener('click',controla.saveStickyNotes);
//carga las notas que esten en local storage
window.addEventListener('load',controla.loadStickyNotes);
//borar notas

window.addEventListener('click',controla.deleteStickyNote);