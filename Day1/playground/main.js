console.log('hello world');

// Single line comments

/*
 * Multiline comments
 */

 // ES6 - Variables
let c = 5;
const q = 5; // constant

c = 6 // NO ERROR 

// ES5 - Variables
var p = 5; // old type, leads to hoisting
console.log(`${c},${q},${p}`);

console.log({c, p, q}); // ES6
console.log({
    c: c,
    p: p,
    q: q
}) // ES5 === console.log({c,p,q})

// ES6 - Ecmascript2017
c = 5
d = 5.6

// Datatypes
// Numbers
// Strings
// Objects
// Arrays

c = "5" // string
t = 5 // Number
p = { q: 8 } // object
arr_ = []

console.log("5" == 5) 
console.log("first line\nSecond line")

// Operator
// greater than: >
// less than: <
// + - * /
// greater than or equal to: >=
// less than or equal to: <=
// boolean operators: <<, >>, ||, &&, ~, !

// true, false => Boolean values
// Empty values => null, undefined, 0, "", [], {}

// Automatic type conversion
// ==: "5" == 5 == true
console.log(parseInt("5", 10) === 5) // type coercion

// Program Structure
// Expression and Evaluation and Side effects

// Functions
function sum(a, b) { // ES5
    return a + b;
}

sum(5, 4)

sum = (a, b) => a + b; // ES6

(function sum(a, b) {
    return a + b;
})(5,4);

if (1 != 2) {
    console.log('yeah');
} else if (1 != 3) {
    console.log('yeah again');
} else {
    console.log('yeah yeah again');
}

let i = 0
while(i != 10) {
    // console.log((i=i+1);
    i++
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

key = 5;
switch(key) {
    case 5:
        console.log('ole ole');
        break;
    default:
        console.log('yes');
}

do {
    console.log(i)
} while(i != 10);

// Arrays
let new_array = []; // new Array()
let arr = ["test", 5, 5, 6.7, {c: 5}];
console.log(arr[0]); // test

// Objects
let old_object = {}

// FizzBuzz
/*
Write a program that uses console.log to print all the numbers from 
1 to 100, with 2 exceptions. For numbers divisible by 3, print "Fizz"
instead of the number, and for numbers divisible by 5(and not 3),
print "Buzz" instead.
Your program should print "FizzBuzz" for numbers that are divisible
by both 3 and 5
*/