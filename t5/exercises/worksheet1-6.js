const img = document.getElementsByTagName('img')[0];
const ant = document.getElementById('ant');
const sig = document.getElementById('sig');
const arrImg = [];
var i=0;
const localidades = ['aldeire','albunuelas','albunol','albunan','albondon','albolote','alamedilla','agron'];
for (const i of localidades) {
    arrImg.push('1.granada_'+i+'.jpg');
}
function atras(){
    if(i<9){
        img.removeAttribute('src');
        img.setAttribute('src','src/'+arrImg[i]);
        i--;
        if(i<0){
            i=8;
        }
    }
}

function siguiente(){
    if(i<8){
        img.removeAttribute('src');
        img.setAttribute('src','src/'+arrImg[i]);
        i++;
    }else{
        i=0;
        img.removeAttribute('src');
        img.setAttribute('src','src/'+arrImg[i]);
        }
}
ant.addEventListener('click',atras);
sig.addEventListener('click',siguiente);