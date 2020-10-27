function exercise5(){
    var array1=[];
    var array2=[];
    var array3=[];
    var arrayOrdenado=[];
    for (let i = 0; i < 100; i++) {
        var numero=Math.floor(Math.random()*1000+1);
        array1.push(numero);
        
    }
    console.log("array sin ordenar: "+array1);
    for (let i = 0; i < array1.length; i++) {
        if(array1[i]%2==0){
            array2.push(array1[i]);
        }else{
            array3.push(array1[i]);
        }
    }
    arrayOrdenado=array2+array3;
    console.log("El array ordenado es: "+arrayOrdenado);
}

function exercise7(){
    array1= Array(10).fill(1);
    //array1= Array(10).fill(0).map(x => x++);
    console.log(array1);
    console.log(array1.join(" "));
}

function exercise9(){
    
}