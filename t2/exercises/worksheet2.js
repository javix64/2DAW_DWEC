function exercise1(){
    var number= Math.random();
    console.log("Number between 0 and 1:"+number);
    //100 y 200
    
    console.log(number * (200-100+1) + 100);
    //Two values
    var num1=parseInt(prompt("Enter first number"));
    var num2=parseInt(prompt("Enter last number"));
    for (let i = 0; i < 100; i++) {
        document.body(number * (num2-num1+1)+num1);    
    }
}

function exercise2(){
    //INCOMPLETO
    var angle=parseInt(prompt("Enter angle: "));
    var pi=Math.PI;
    var cos=Math.cos((angle*pi)/180);
    //var sen=;
    //var tan=;
    console.log(cos);
}

function exercise3(){
    var cat1=parseInt(prompt("Enter hick: "));
    var cat2=parseInt(prompt("Enter hick: "));
    var hypotenuse=Math.sqrt(cat1**2+cat2**2);
    console.log(hypotenuse);
}

function exercise4(){
    do {
        var enter_numbers=prompt("Do you want Calculate hypotenuse? push yes or no");
        if(enter_numbers=="no"){break;}
        var cat1=parseInt(prompt("Enter hick: "));
        var cat2=parseInt(prompt("Enter hick: "));
        var hypotenuse=Math.sqrt(cat1**2+cat2**2);
        console.log(hypotenuse);
    } while (enter_numbers=="yes");
}

function exercise5(){
    var a=parseInt(prompt("Enter first term: "));
    var b=parseInt(prompt("Enter second term: "));
    var c=parseInt(prompt("Enter third term: "));
    
    var sol1=(-b+Math.sqrt((b**2)-(4*a*c)))/(2*a);
    var sol2=(-b-Math.sqrt((b**2)-(4*a*c)))/(2*a);

    console.log("The first solution is:"+sol1+"\n"+"The second solution is: "+sol2);
}

function exercise6(){
    var base=parseInt(prompt('Enter the base'));
    var exponent=parseInt(prompt('Enter the exponent'));

    var sol=base**exponent;
    console.log(sol);
}

function exercise7(){
    var table=document.createElement('table');
    document.getElementById('tabla').appendChild(table);
    table.setAttribute('border',1);
    for (let i = 0; i < 20; i++) {
        var tr=document.createElement('tr');
        var td1=document.createElement('td');
        var td2=document.createElement('td');
        var sin=Math.sin(i);        
        table.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        td1.append(i);
        td2.append(sin);
    }
    
}

function exercise8(){
    var random=Math.floor(Math.random()*3+1);
    var div_Picture=document.getElementById('picture');
    var src =document.createElement('img');
    switch (random) {
        case 1:
            src.setAttribute('src','logo1.png');
            div_Picture.appendChild(src);
            break;
        case 2:
            src.setAttribute('src','logo2.png');
            div_Picture.appendChild(src);
            break;
        case 3:
            src.setAttribute('src','logo3.png');
            div_Picture.appendChild(src);
            break;
    
        default:
            break;
    }
}