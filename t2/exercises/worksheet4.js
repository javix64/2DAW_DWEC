function exercise1(){
    var table=document.createElement('table');
    table.setAttribute('border',1);
    var tablita=document.getElementById('tablita');
    tablita.appendChild(table);
    var navegador=window.navigator;
    var tr=document.createElement('tr');
    var td1=document.createElement('td');
    var td2=document.createElement('td');
    for(propiedad in navegador){
        //he intentado escribirlo, pero el array me aparece solo en un td.
        table.append(tr);
        td1.append(propiedad)
        td2.append(navegador[propiedad]);
        tr.appendChild(td1);
        tr.appendChild(td2);
    }
    
}
/*
tabla

*/
function exercise2(){
    var table=document.createElement('table');
    table.setAttribute('border',1);
    var tablita=document.getElementById('tablita2');
    tablita.appendChild(table);
    var pantalla=window.screen;
    var tr=document.createElement('tr');
    var td1=document.createElement('td');
    var td2=document.createElement('td');
    for(propiedad in pantalla){
        table.append(tr);
        td1.append(propiedad)
        td2.append(pantalla[propiedad]);
        tr.appendChild(td1);
        tr.appendChild(td2);
    }
}