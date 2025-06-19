// Object : Key:value pair's combination

let o = {
   KEY: "VALUE",
   firstName: "Tanishq",
   "last Name" : "Dehariya"
}
console.log(o);
o.role = "Web Developer"
console.log(o);

const student = {
    fullName: "Tanishq Dehariya", 
    age: 20,
    Marks: 7.8,
    isPass: true
}; 
console.log(student);

// To print something specific
console.log(student.age);
console.log(student["age"]);


// practice questions

//1. add a string and a number
let a = "string"
a = a + 5
console.log("a = string + 5 =", a);
console.log("Data Type of a =", typeof a);

// 2. try assigning an object same name as an key and print, check if it works or not 
const j = {
    j : 10,
    b : 5 + 6,
    c : 7 + 8
}
console.log(a);
a = 10;
console.log(a + b + c);
// 3. Create a Dictionary of 5 words
const E = {
   Help: "If a person is trying to solve your problem without anything in return it is called help",
   Friend: "A family member which we can choose",
   Money: "To get any materialistic thing we need money to trade it for",
   Chai: "A hot drink which refreshes a person",
   Library: "A place to learn"
}
console.log(E);