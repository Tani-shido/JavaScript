// Functions

function myFunction(){
    console.log("Hi there, Learning function here");
}
myFunction(); //For calling function (function call)
myFunction(xyz) //function (xyz) is Input/variables = Parameter (fn's parameter)
function myFunction(xyz) {
    console.log(xyz);
}
myFunction("Hakunamatata");  //function call's value is ("Hakunamatata") fn's argument 

// SUM Function
function sum(x, y) {
    s = x + y;
    return s;
}
    let val = sum(3, 4);
    console.log(val);

// Arrow function : It is a compact way of writing a function
function sum(a, b) {
        return a + b;
    }
const arrowFunction = (a, b) => {
        return a + b;
    };
    arrowFunction(55, 66);

const arrowMul = (b, c) => {
        console.log(b * c);
    };
    arrowMul(66, 66);

function nice(name) {
    console.log("Hi threre" , name);
    }
    nice("Tanishq");
    nice("Prachi");

function sum(a , b) {
    return a + b;
    }
    result = sum(11 , 12);
    console.log("The sum of these nombers is",result);

    const func = (x , y) => {
        console.log("This is an arrow function" ,  x + y)
        }
        func(44 , 55);

//  Practice question 1
function countVowels(str) {
    let count = 0;
    for(const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") 
            {
            count++;
        }
    }
    return count;
}

// Practice question 2 (using arrow function)
const countVow = (str) => {
       let count = 0;
    for(const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") 
            {
            count++;
        }
    }
    return count;
}

// Practice questions
studentMarks = {
"Rahul": 99,
"Prachi": 100,
"Tanishq": 90
};
for(let student in studentMarks) {
console.log(student , "-" , studentMarks[student]);
}

function correctWord(word) {
if(word == 310820) {
console.log("Correct word");
}
else{
console.log("Try again");
}
}
correctWord(310820);

// Practice project (Faulty Calculator)
// let random = Math.random()
// const a = prompt("Enter the number");
// const op = prompt("Enter the operator");
// const b = prompt("Enter the second number");

// if (random > 1) {
//     if (op == "+") {
//         console.log("Addition of two numbers is", a * b);
//     }
//     else if (op == "-") {
//         console.log("Subration of two numbers is", a / b);
//     }
//     else if (op == "*") {
//         console.log("Multiplication of two numbers is", a + b);
//     }
//     else if (op == "/") {
//         console.log("division of two numbers is", a ** b);

//     }
// }
// else{
//      if (op == "+") {
//         console.log("Addition of two numbers is", a + b);
//     }
//     else if (op == "-") {
//         console.log("Subration of two numbers is", a - b);
//     }
//     else if (op == "*") {
//         console.log("Multiplication of two numbers is", a * b);
//     }
//     else if (op == "/") {
//         console.log("division of two numbers is", a / b);

//     }
// }

// forEach loop in Array (callback function : it is passed in the argument and it executes for every element in the array)///////////////////////////
// let arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; //val is value of each index of array
// arr.forEach(function printVal(val) {
    // console.log(val);
    // console.log(val.toUpperCase());
// });  

// There are 3 ways to use use foreach function
// let arr = ["one", "two", "three", "four", "five", "six"];
// arr.forEach(function ways(val, idx, arr) {
//     console.log(val.toUpperCase(), idx, arr);
// });

// Practice question 1
// let arr = [2, 3, 4, 5, 6, 7, 8];
// arr.forEach(function squareVal(val) {
//     console.log(val**2);
// });

// Map Method (It is same as for each method except it gives a new array in return)////////////////////////////////////
// It is used to create a new array, using some returned value, which was/still is stored in the orignal array. 
// let square = [2, 3, 4, 5, 6, 7, 8];
// square.map((val) => {
//     console.log(val);
// });
// let square = [2, 3, 4, 5, 6, 7, 8];
// let newArr = square.map((val) => {
//     return val * val;
// });
// console.log(newArr);
// console.log(square);

// Filter method : it is used for filtering values //////////////////////////////////////////////
// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenArr = num.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArr);

// Reduce Method : If we want one value as a return (it can be sum, avereage anything)//////////////////////////////////////
// there are two inputs: result/previous(first value) and current 
// Process: result is compared to current on the basis of given condition 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let answerArr = arr.reduce((res, curr) => {
//     return res > curr ? res : curr; // (agar res curr se bada hai) ? (to res return) : (nahi to curr return) 
// });
// console.log(answerArr);

// Practice question 1
// let marks = [90, 91, 23, 89, 34, 82, 94, 84, 95, 34, 95, 89, 48, 39, 58, 34, 95, 94];
// let topMarks = marks.filter((val) => {
//     return val > 90;
// })
// console.log(topMarks);

// Practice question 2
// let n = prompt("Enter your number :");
// let arr = [];
// for(let i = 1; i <= n; i++) {
//     arr[i - 1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// })
// console.log(sum);

// let mul = arr.reduce((res, curr) => {
//     return res * curr;
// })
// console.log(mul);