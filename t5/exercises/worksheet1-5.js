const button=document.getElementsByTagName('button')[0];
var iType;
function ex5(){
    var iFile=document.createElement('input');
    iType=iFile.setAttribute("type","file");
    var div = document.getElementsByTagName('div')[0];
    div.append(iFile);
}
button.addEventListener('click',ex5);