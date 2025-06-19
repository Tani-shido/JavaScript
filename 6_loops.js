// #Loops
// For loop
for (let count = 1; count <= 9; count++){
    console.log("Hi there!!!");
}
console.log("Loop has ended");  

// sum frmo 1 to 5
let sum = 0;
for (let i = 0; i <= 5; i++) {
    console.log("i =", i);
}
console.log("sum is", sum );
console.log("loop has ended")

// While loop
let i = 1;
while (i <= 9) {
    console.log("i = ", i);
    i++;
}

// Do While loop
let n = 1;
do {
    console.log("n =", n);
    n++;
} while (n <= 6);

// For of loop
// let str = "javascript";
// let length = 0;
// for(let i of str) {
//     console.log("i = ", i);
//     length++;
// }
// console.log("lenght = ", length );

// For In loop
let sstudent = {
    name: "Tanishq",
    age: 20,
    cgpa: 7.8,
    isPass: true,
};

for(let key in sstudent) {
    console.log("key =", key, "value =", sstudent[key]);
}

// Practice question 1
for(let i = 0; i <= 10; i++) {
    if(i % 2 === 0){
        console.log( i , "is even");
    }

}

// Practice question 2
// let gameNum = 25;
// let userNum = prompt("Enter your number : ");
// while (userNum != gameNum) {
//     userNum = prompt("You have entered wrong number. Enter the number again");
// }
// console.log("Congratulations. You have entered correct number..........");