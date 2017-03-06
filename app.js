var x = 5;
var y = "cat";

console.log(x);

// Method of Number
console.log(x.toString());

// Property of String
console.log(y.length);

// Built in functions
parseInt("42");

var z = [4,3,2,1];

// Adds to the end
z.push(0);

function someFunction(array) {
  for(var i = 0; i < array.length; i++) {
    console.log(i);
  }
}

someFunction(z);
