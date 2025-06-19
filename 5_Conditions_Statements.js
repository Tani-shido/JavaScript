// #Conditional Statements
// IF (if we have multiple conditions and 1 is right the we use If statement)
// Age 18
let age = 15
if (age < 18) {
    canvote = "You cannot vote"
}
if (age > 18) {
    canvote = "You can vote"
}
console.log(canvote)

// If else (if If condition is not true else will be chosen) 
// let age = 20;
if (age >= 18) {
    canvote = " You can vote";
}
else{
    canvote = "You can not vote";
}
console.log(canvote);

// Odd even
let num = 15;
if (num % 2 === 0) {
    console.log(num, "is even");
} 
else {
    console.log(num, "is odd");
}

// Else If (if we have conditions in else as well we use else if)
let mode = "grey";
let color;
if (mode === "dark"){
    color = " black";
} else if (mode === "blue"){
    color = "blue";
}else if (mode === "grey"){
    color = "grey";
}else{
    color = "white";
}
console.log(color);

// Practice Question 1
// let num = prompt("Enter your number :");
if(num %  5 === 0){
    console.log(num , "is a multiple of 5")
}else{
    console.log(num , "is not a multiple of 5")
}

// Practice question 2
let grade; 
// let num = prompt("Enter your score :");
if (num <= 100 && num >= 90){
    grade = "A";
}else if (num <= 89 && num >= 70){
    grade = "B";
}else if (num <= 69 && num >= 60){
    grade = "C";
}else if(num <= 59 && num >= 50){
    grade = "D";
}else if (num <= 49){
    grade = "F";
}
console.log(grade);

// Assignment question- 1
// let fullName = prompt("Enter your name :")

// let age = prompt("Enter your age:")
// let canvote;
// if(age<18){
//     canvote = "you are not legal to vote";
// } else{
//     canvote = "you are legal to vote";
// }

// let gender = prompt("Enter you gender :")
// let prefix;
// if(gender === "male"){
//     prefix = "Mr";
// } else if(gender === "female") {
//     prefix = "Ms";
// }else{
//     prefix = gender 
// }
// let user = `Hi there, ${prefix} ${fullName} your age is ${age} and ${canvote}.`
// console.log(user)


