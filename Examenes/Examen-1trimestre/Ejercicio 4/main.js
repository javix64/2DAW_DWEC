let table;
////////////////
// APARTADO A //
////////////////
function ejercicio4(filas,columnas,color,nodoDom){
    table=document.createElement('table');
    let tr,td;
    for (let i = 0; i < filas; i++) {
        tr=document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
            td=document.createElement('td');
            td.innerText='Examen';
            tr.appendChild(td);
        }
        if(i%2==0){
            table.append(tr);
        }else{
            tr.setAttribute('style','background-color:'+color+';');
            table.append(tr);  
        }
        nodoDom.append(table);
    }
    return table;
}
let tablita=ejercicio4(5,12,'red',document.getElementsByTagName('div')[0]);
////////////////
// APARTADO B //
////////////////
let td=document.getElementsByTagName('td');
let a=[];
for (const i of td) {
    i.addEventListener('click',function(){i.innerText=''});
    a.push(i);
}
////////////////
// APARTADO C //
////////////////
function guardar(){
    let localTable=document.getElementsByTagName('table')[0];
    let tableOut=localTable.outerHTML;
    let tableData={'html':tableOut};
    let tableJson=JSON.stringify(tableData);
    localStorage.setItem('0',tableJson);
}
document.addEventListener('click',guardar);

////////////////
// APARTADO D //
////////////////

function aprobar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        for (let i = 0; i < td.length; i++) {
            td[i].innerText=this.responseText;
        }
      }
    };
    xhttp.open("GET", "aprobar.txt", true);
    xhttp.send();
  }
document.getElementsByTagName('button')[0].addEventListener('click',aprobar);
