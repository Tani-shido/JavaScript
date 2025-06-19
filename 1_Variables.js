// #VARIABLES
// there are 3 types of variables
// var = sttoped using in 2015
// let = it can be updated not re-declared/over-written 
// const = it can neither be updated nor re-declared or over-written
Variables
var a = 6;
var b = 9;
var c = "Hi"
var d = "there"
console.log(a + b);
console.log(c + d);
// we don't use var for declaring variables because it is globally scoped.

{
{let e = 9;
let f = 9;
console.log("e + f = " , e + f);
}
var a = 100
console.log("because it is globally scoped a + f =" , a + f);

{let g = "Hi"
let h = "there"
console.log("h + g = " , h + g);
}
}
console.log("Because Let is an blocked scope varible e + f =" , e + f);

// Let is an blocked scope varible used to assign value in a variable for a particular block.

const i = 9;
const j = 9;
console.log("i + j = " , i + j);

// const i = 10; 
// console.log("Because i is const i =" , i , "and i + i = " , i + i)

// const is constant whoose value can not be changed
