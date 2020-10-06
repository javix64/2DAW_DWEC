function exercise1() {
/*     function sum(...numeros) {
        let total =0;
        for (num of numeros)
          total += num;
      
          return total;
      }
      
      
      
      sum (...arrayNumeros) */

    var arraySum=[];
    var arrayLength=parseInt(prompt('Enter how much numbers do you want enter.'));
    for (let i = 0; i < arrayLength; i++) {
        arraySum.push(
            parseInt(
                prompt('Enter a number')
            )
        );
    }
    var total=0;
    for (let i = 0; i < arraySum.length; i++) {
        total+=arraySum[i];
    }
    document.getElementById('exercise1').append('The total is: '+total);
}

function exercise2(){
    
}