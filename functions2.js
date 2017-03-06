// Step 2

console.log(typeof catFunction);
catFunction();

// declared
function catFunction() {
  console.log("Meow");
}

console.log(typeof dogFunction);
dogFunction();

// expression
var dogFunction = function() {
  console.log("Woof");
};

console.log(typeof dogFunction);
dogFunction();

// sandwhichType is an argument
function makeSandwhich(sandwhichType) {
  // var sandwhichType = "ham";
}

makeSandwhich("pbandj");
makeSandwhich("ham");

function makeCompleteSandwhich(fill, breadType) {
  // var fill = "ham";
}

makeCompleteSandwhich("ham"); // This will work breadType would be undefined
