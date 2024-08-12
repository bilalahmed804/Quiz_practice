// Ternary Opreator

let age2 = 17
let ternary = age2 >= 18 ? "come in" : "sorry";

console.log(ternary);

function checkResult(score){
    return score >= 70 ? "pass" : "fail"
}
console.log(checkResult(60));
console.log(checkResult(70));


function number(num){
    return num % 2 === 0 ? "Odd" : "Even"
}

console.log(number(4));
console.log(number(3));

function decideActivity(weather){
    const activity = weather === "sunny" ? "go out" : "stay in";    
    
    console.log(activity)
 
 }
 
 // Usage
 console.log(decideActivity("raining")); // Output: "stay in"
 console.log(decideActivity("snowing")); // Output: "stay in"
 console.log(decideActivity("sunny"));

function checkNumber(number) {
    const result = number > 0 ? "positive" : "non-positive";
    return result;
  }
  
  // Usage
  console.log(checkNumber(5)); // Output: "positive"
  console.log(checkNumber(-2)); // Output: "non-positive"

function checkNumber2(num2){
    let check = num2 > 0 ? "positive" : num2 === 0 ? "zero" : "negative" ;
    return check
}
console.log(checkNumber2(5));
console.log(checkNumber2(0));
console.log(checkNumber2(-5));


function getDrink(age) {
  return age >= 21
    ? "Enjoy a cocktail"
    : age >= 18
    ? "Have a beer"
    : age >= 16
    ? "Grab a soft drink"
    : "Sorry, you're too young to drink";
}

// Usage
console.log(getDrink(25)); // Output: "Enjoy a cocktail"
console.log(getDrink(19)); // Output: "Have a beer"
console.log(getDrink(16)); // Output: "Grab a soft drink"
console.log(getDrink(10)); // Output: "Sorry, you're too young to drink"


// closure topics

function numberGenerator() {
    // Local “free” variable that ends up within the closure
    let num = 1;
    function checkNumber() { 
      console.log(num);
    }
    num++;
    return checkNumber;
  }
  
  var number = numberGenerator();
  number(); // 2

function sayHello() {
    var say = function() { console.log(hello); }
    // Local variable that ends up within the closure 
    var hello = 'Hello, world!';
    return say;
  }
  var sayHelloClosure = sayHello(); 
  sayHelloClosure(); // ‘Hello, world!’

let x1 = 10;

function foo(){
    let y = 20;

    function bar(){
        let z = 30;
        let outPut = x1 + y + z;
        console.log(outPut);
        
    }
    return bar()
}
foo()

var x = 10;
function foo(a) {
    var b = 20;
    function bar(c) {
      var d = 30;
      return boop(x + a + b + c + d);
    }
    
    function boop(e) {
      return e * -1;
    }
    
    return bar;
    
}

var moar = foo(5); // Closure  
/* 
  The function below executes the function bar which was returned 
  when we executed the function foo in the line above. The function bar 
  invokes boop, at which point bar gets suspended and boop gets push 
  onto the top of the call stack (see the screenshot below)
*/
moar(15)
console.log(moar(15));



let hobbies2 = ["Reading", "Coding", "Hiking"];
let [firstHobby,secondHobby,thirdHobby] = hobbies2
console.log(firstHobby); // Output: Reading
console.log(secondHobby); // Output: Coding
console.log(thirdHobby); // Output: Hiking

let nestedArray = [1, [2, 3], 4];
let [firstValue, [secondValue, thirdValue], fourthValue] = nestedArray;
console.log(firstValue); // Output: 1
console.log(secondValue); // Output: 2
console.log(thirdValue); // Output: 3
console.log(fourthValue); // Output: 4

let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    occupation: "Software Engineer",
    hobbies: ["Reading", "Coding", "Hiking"]
  };

let {one,tow,...three} = person

console.log(person);
let { name,age,city,hobbies} = person;
console.log(name); // Output: New York
console.log(age);
console.log(city);
console.log(hobbies);