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
    var array1=Array(11).fill(0);
    var dado1;
    var dado2;
    var sumaDados;
    for (let i = 0; i < 12; i++) {
        array1[i]=Array(3);
        array1[i][0]=0;
    }
    
    for (let i = 0; i < 36000; i++) {
        dado1=Math.floor(Math.random()*6+1);
        dado2=Math.floor(Math.random()*6+1);
        
        sumaDados=dado1+dado2;
        if (sumaDados==2) {
            array1[0][0]++;
            array1[0][1]=dado1;
            array1[0][2]=dado2;
        }else if(sumaDados==3){
            array1[1][0]++;
            array1[1][1]=dado1;
            array1[1][2]=dado2;
        }else if(sumaDados==4){
            array1[2][0]++;
            array1[2][1]=dado1;
            array1[2][2]=dado2;
        }else if(sumaDados==5){
            array1[3][0]++;
            array1[3][1]=dado1;
            array1[3][2]=dado2;
        }else if(sumaDados==6){
            array1[4][0]++;
            array1[4][1]=dado1;
            array1[4][2]=dado2;
        }else if(sumaDados==7){
            array1[5][0]++;
            array1[5][1]=dado1;
            array1[5][2]=dado2;
        }else if(sumaDados==8){
            array1[6][0]++;
            array1[6][1]=dado1;
            array1[6][2]=dado2;
        }else if(sumaDados==9){
            array1[7][0]++;
            array1[7][1]=dado1;
            array1[7][2]=dado2;
        }else if(sumaDados==10){
            array1[8][0]++;
            array1[8][1]=dado1;
            array1[8][2]=dado2;
        }else if(sumaDados==11){
            array1[9][0]++;
            array1[9][1]=dado1;
            array1[9][2]=dado2;
        }else if(sumaDados==12){
            array1[10][0]++;
            array1[10][1]=dado1;
            array1[10][2]=dado2;
        }
        
    }
    console.log(array1);
    
}