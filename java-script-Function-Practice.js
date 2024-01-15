//Call a function
function greet() {
  return "hello! good morning"
}

let greetings = greet();
console.log(greetings);



// return a value form a function (doubt)
function addNumbers(a, b) {
  var sum = a + b;
  return sum;
}
var result = addNumbers(99, 988);
console.log(result);

//create a Function
function Getbird() {
  let birdname = "peacock";
  return birdname;
}

let bird = Getbird();
console.log(bird);


//Passing an argument in a function {dobut}
function prem(name) {
  console.log("hello, " + name + "!")
}
prem("ram");
prem("raju");
prem("ramu");



//create a function using parameter
function calculateRectangleArea(length, width) {
  var area = length * width;
  return area;
}
var rectangle1Area = calculateRectangleArea(1990, 9990);
console.log("Area of Rectangle 1: " + rectangle1Area);

var rectangle2Area = calculateRectangleArea(159, 753);
console.log("Area of Rectangle 2: " + rectangle2Area);



//create a function expression(doubt)
var square = function (num) {
  return num * num;
};

var result = square(6);
console.log(result)
console.log("square of 5" + result);
