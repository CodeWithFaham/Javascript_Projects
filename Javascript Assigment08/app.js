Example 1:
let number = prompt("please enter the number")

if (number % 3 === 0) {
    alert("this number is divisible by 3")
} else {
    alert("this number is not divisible by 3")
}

Example 2: 
let evenOrOdd = prompt("please enter the number")

if (evenOrOdd % 2 === 0) {
    alert("this number is even")
} else {
    alert("this number is odd")
}

Example 3: 

let age = 13;

if (age > 18 ) {
    console.log("old enough")
} else {
    console.log("Too young")
}
Example 20:

function myFunction() {
    if (isNaN(age)) {
       voteable = "Input is not a number";
     } else {
       voteable = (age < 18) ? "Too young" : "Old enough";
     }  let voteable;
     let age = Number(document.getElementById("age").value);
    
     document.getElementById("demo").innerHTML = voteable + " to vote";
   }






Example 12:
var greeting;
var hour = 19;
if (hour < 18) {
greeting = "Good day";
console.log(greeting)
 }
else {
    greeting = "Good evening";
    console.log(greeting)
}

Example 7:

const problem = "3 add 16";
const calculate = opr => {
   const [num1, operation, num2] = opr.split(" ");
   switch (operation) {
      case "add":
         return +num1 + +num2;
      case "divide":
         return +num1 / +num2;
      case "subtract":
         return +num1 - +num2;
      case "multiply":
         return +num1 * +num2;
      case "modulo":
         return +num1 % +num2;
      default:
         return 0;
   }
}
console.log(calculate(problem));

Example 19:

switch(prompt('please enter the month number')) {
    case 0: 
    alert('invalid month number');
    break;

    case 1: 
    alert('jan');
    break;

    case 2: 
    alert('feb');
    break;

    case 3: 
    alert('mar');
    break;

    case 4: 
    alert('apr');
    break;

    case 5: 
    alert('may');
    break;

    case 6: 
    alert('june');
    break;

    case 7: 
    alert('july');
    break;

    case 8: 
    alert('aug');
    break;

    case 9: 
    alert('sep');
    break;

    case 10: 
    alert('oct');
    break;

    case 11: 
    alert('nov');
    break;

    case 12: 
    alert('Dec');
    break;
}
 Example 18:

if (10 !== 8) {
    return true;
}
else {
    return false;
// }
Exmaple 04:

var name = prompt("please enter a name");

if(name === "ali"){
    alert("welcome ali");
}
else {
    alert("hello world");
}


 Example 13:


var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }

Example 14:
var number = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        alert("The number is zero");
    } else {
        alert("The number is positive");
    }
} else {
    alert("The number is negative");
}

Example 11: 

var firstname = prompt("please enter a name")
if(firstname === "Fahad"){
    document.write("Hello Fahad")
}else{
    document.write("You Are Not Fahad")
}

Example 9:

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(100));
console.log(leapyear(98));

Example 06:

let char = prompt('please enter the character');

if (char !== String) {
    console.log('the character is the number')
} else {
    console.log('the character is not the number')
}
Example 10:

var correctPassword = "BangBang";

var enterThePassword = prompt('please enter the password');

if (enterThePassword === null) {
    prompt('please enter the password')
} else if (correctPassword === enterThePassword) {
    alert('Correct! The password you have entered matched with the original password')
} else if (correctPassword !== enterThePassword) {
    alert('you have enter the wrong password')
}
Example 17;

let findVowel = prompt('please enter the vowels');

if (vowel ==="a", "e", "i", "o", "u") {
    console.log('true');
} else {
    console.log('false');
}
    
   
    