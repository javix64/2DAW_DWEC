function exercise2() {
    return Math.floor(Math.random()*6);
    
}
console.log(exercise2());

function exercise3(){
    var arrayLanzamiento=[0,0,0,0,0,0];
    for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 6; j++) {
            arrayLanzamiento[exercise2()]++;
        }
    }
    console.log(arrayLanzamiento);
    console.log("El numero 1 ha salido:"+arrayLanzamiento[0]);
    console.log("El numero 2 ha salido:"+arrayLanzamiento[1]);
    console.log("El numero 3 ha salido:"+arrayLanzamiento[2]);
    console.log("El numero 4 ha salido:"+arrayLanzamiento[3]);
    console.log("El numero 5 ha salido:"+arrayLanzamiento[4]);
    console.log("El numero 6 ha salido:"+arrayLanzamiento[5]);
}

function exercise6(){
    var potencia=parseInt(prompt("Introduce la potencia"));
    var base=parseInt(prompt("Introduce la base"));
    console.log(base**potencia);
}

function exercise7(){
    var tabla= document.createElement('table');
    var tr=document.createElement('tr');
    
    var divi=document.getElementById('exercise7');
    function factorial (n) {
        var total = 1; 
        for (i=1; i<=n; i++) {
            total = total * i; 
        }
        return total;
    }
    divi.append(tabla);
    tabla.append(tr);
    

    for (let i = 0; i < 10; i++) {
        var td1=document.createElement('td');
        var td2=document.createElement('td');
        tr.append(td1);
            
        td1.append(i);
        tr.append(td2);
        td2.append(factorial(i));
    }

}