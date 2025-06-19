// #Strings
let str = "Tanishq Dehariya";
// To find the length of the string
console.log(str.length);
// To find the exact letter with their respective number (string starts from 0)
console.log(str[6]);

// Template literals
// Template string is a type of special string which
let specialstr = `Template string is a type of special string`;
console.log(specialstr);

let obj = {
    item : "pen",
    price : 10
};
console.log("The price for this", obj.item , "is" , obj.price , "rupees");
// Template style
let template = `The price for this ${obj.item} is ${obj.price} rupees`; 
console.log(template);

// Escape character for line break (\n) for tab space (\t)
let nameIs = "Tanishq\nDehariya\tusing this for understanidng";
console.log(nameIs);

// Practice question 1
// let fullName = prompt("Enter your name :");
// let username = ("@" + fullName + fullName.length);
// console.log(username);
// console.log(`@${fullName}${fullName.length}`);