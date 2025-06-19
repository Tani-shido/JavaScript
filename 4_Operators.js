// #Operators

// Arithmetic Operators

let a = 25
let b = 16


console.log("a =" , a , "b =" , b);
console.log("a + b =" , a + b);
console.log("a - b =" , a - b);
console.log("a * b =" , a * b);
console.log("a / b =" , a / b);

// modulus is used to get remainder
console.log("a % b =" , a % b);

// To give power
console.log("a ** b =" , a ** b);

// Unary Operator
console.log("a =", a , "b =", b);
// increment
a = a + 1; //26 
a++; // ++ means +1 = 27 
console.log(a)
// Decrement
a = a - 1; // 26
a--; //25
console.log(a)
//Pre and post 
console.log("a =", a , "b =", b);

console.log("++a =", ++a ,"--b =", --b);
console.log("a++ =", a++ ,"b-- =", b--);

console.log("a =", a , "b =", b);

// Assignment operators
a += 5; //a = a + 5
console.log(a);
a -= 5;
console.log(a);
a *= 5;
console.log(a);
a /= 5;
console.log(a);
a **= 5;
console.log(a);

//Comparision operators
let c = 5;
let d = 9;
console.log("c =", c ,"d =", d);

console.log("c == d", c == d );
console.log("c != d", c != d );
console.log("c < d", c < d);
console.log("c > d", c > d);
console.log("c <= d", c <= d);
console.log("c => d", c >= d);

//Logical Operaters
// Logical AND if both conditions are true only then true  
let cond1 = c = 5;
let cond2 = c < d;
console.log(cond1 && cond2);

//Logical OR if any one condition is true then true 
let cond3 = d > 5;
let cond4 = c > d;
console.log(cond3 || cond4);

//Logical NOT Gives the opposite result
console.log(!(cond1 && cond3));