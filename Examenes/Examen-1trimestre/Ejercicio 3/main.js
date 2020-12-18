let array=[2,2,4];
let ejercicio3 = function(array) {
  if (array.length === 1) {
    return array[0];
  }
  else {
    return array.pop() * ejercicio3(array);
  }
};
console.log(ejercicio3(array));