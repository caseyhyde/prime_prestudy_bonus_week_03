

function add(value){
  return value+2;
}

function multiply(value){
  return value*3;
}

function subtract(value){
  return value-4;
}

var x = add(multiply(subtract(10)));

console.log(x);
