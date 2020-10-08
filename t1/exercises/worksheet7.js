function exercise1() {
    var arraySum=[];
    var total=0;
    var arrayLength=parseInt(prompt('Enter how much numbers do you want enter.'));
    for (let i = 0; i < arrayLength; i++) {
        arraySum.push(
            parseInt(
                prompt('Enter a number')
            )
        );
    }

    function sumArray(...arraySum){
        for (num of arraySum) {
            total+=num;
        }
        return total;
    }
    document.getElementById('exercise1').append('The total is: '+sumArray(...arraySum));
}

function exercise2(){
    var notOnlyNums;
    var onlyNums= new Array;
    var total = 0;
    var notOnlyNumsLength=parseInt(prompt('How many arguments do you want enter?'));
    for (let i = 0; i < notOnlyNumsLength; i++) {
        notOnlyNums=prompt('Enter whatever you want, int or str: ');
        if (parseInt(notOnlyNums)){
            onlyNums.push(notOnlyNums);
        }
    }
    function addOnlyNums(...onlyNums){
        
        for (num of onlyNums) {
            total+=parseInt(num);
        }
        return total;
    }
    addOnlyNums(...onlyNums);
    console.log(total);
}

function exercise3(){
    var arrayLength=parseInt(prompt('Enter the number of arguments to count:'));
    var arguments=[];
    for (let i = 0; i < arrayLength; i++) {
        arguments.push(prompt('Enter the argument'));
    }
    console.log(arguments.length);
}

var array1=[1,2,3,4];
var array2=[5,6,7,8];
function exercise4(array1,array2){
    var totalArray=[];
    totalArray=[...array1,...array2];
    console.log('The total array is: '+totalArray);
}