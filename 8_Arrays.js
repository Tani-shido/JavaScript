// Arrays: A collection of items 
// In array position/index matters

// let marks = [99,89,79,69,68];
// console.log(marks);
// let heroes = ["spiderman" , "hulk" , "thor" , "hawkeye" , "ironman" , "captainamerica"];
// console.log(heroes);

// For loop in array
// let hero = ["spiderman" , "hulk" , "thor" , "hawkeye" , "ironman" , "captainamerica"];
// for(let i = 0; i < hero.length; i++) {
//     console.log(hero[i]);
// }

// for of loop in array
// let cities = ["Bhopal" , "Indore" , "Ujjain" , "Betul" , "Chhindwara"];
// for (let city of cities) {
//     console.log(city.toUpperCase());
// }

// Practice question 1
// let marks = [85 , 97 , 44 , 37 , 76 , 60];
// let add = 0;
// for(let val of marks) {
//     add += val;
// }
// let avg = add / marks.length;
// console.log(`The average marks of the class = ${avg}`);

// Practice question 2
// let items = [250 , 645 , 300 , 900 , 50];
// let item = 0;
// for (let val of items) {
//     console.log(`The value at index ${item} = ${val}`);
//     let offer = val / 10;
//     items[item] = items[item] - offer;
//     console.log(`The price of items after offer = ${items[item]}`);
//     item++;
// }

// Array Methods
// Push method : adds more items in existing array
// let foodItems = ["Orange" , "Mango" , "Apple" , "Banana"];
// console.log(foodItems);
// foodItems.push("Kiwi" , "Dragon Friut" , "Avocado");
// console.log(foodItems);

// Pop method : Remove the last element and it can give that deleted element as well
// let foodItems = ["Orange" , "Mango" , "Apple" , "Banana"];
// console.log(foodItems);
// let deledItem = foodItems.pop();
// console.log(foodItems);
// console.log(`Deleted element : ${deledItem}`);

// toString method : Converts array (not the orignal) to string  
// let foodItems = ["Orange" , "Mango" , "Apple" , "Banana"];
// console.log(foodItems);
// console.log(foodItems.toString());

// concat() method : For joining arrays and 
// let marvelHeroes = ["Ironman" , "Captain America" , "Thor" , "Hulk" , "Natasha"];
// let dcHeroes = ["Superman" , "Batman" , "Falsh"];
// let indianHeroes = ["Krish" , "Flying Jat"];
// let heroes = marvelHeroes.concat(dcHeroes , indianHeroes);
// console.log(heroes);
// there are shift and unshift operators in which UNSHIFT ADDs ELEMENT in front and SHIFT REMOVES FIRST ELEMENT
// let shift = heroes.shift();
// console.log(shift);
// heroes.unshift("Zokkomon");
// console.log(heroes);

// slice method : it slice up the array acc to our need
// let heroes = ['Zokkomon', 'Captain America', 'Thor', 'Hulk', 'Natasha', 'Superman', 'Batman', 'Falsh', 'Krish', 'Flying Jat'];
// console.log(heroes.slice(1 , 9));

// Splice method : it is used for adding, deleting and replacing elements
// ex: heroes.splice(start(num of i),del(num of elements),add(replacing the deleted));
// let heroes = ['Zokkomon', 'Captain America', 'Thor', 'Hulk', 'Natasha', 'Superman', 'Batman', 'Falsh', 'Krish', 'Flying Jat'];
// heroes.splice(3 , 6 , "Hagimaru" , "Shinchan");
// console.log(heroes);

// Practice question 1
// let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];
// console.log(companies);
// 1st (Removing/Delete : front-shift , end-pop)
// companies.shift();
// console.log(companies);
// 2nd
// companies.splice(1, 1, "Ola");
// console.log(companies);
// 3rd (Adding : front-unshift , end-push)
// companies.splice(5, 0, "Amazon");
// console.log(companies);