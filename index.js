//comparison operator

// let number1 = 11;
// let nmuber2 = 10;

// let outcome = number1 < nmuber2;
// console.log(outcome);

// //equal to comparison operator and negativity operator
// let outcomeEqual = number1 !== nmuber2;
// console.log(outcomeEqual);

// //<= or >= comparison operator

// let cutOffMark = 50;
// let damilolaScore = 80;

// let finalMark = damilolaScore >= cutOffMark;
// console.log(finalMark);

//conditional

// let damilolaScore = 40;
// let cutOffMark = 50;

// if (damilolaScore > cutOffMark) {
//   console.log("Damilola passed");
// } else {
//   console.log("Damilola failed");
// }

//&& is and || is or

// let cutOffMark = 240;
// let age = 18;
// let studentScore = 239;
// let studentAge = 17;

// if (studentAge >= age || studentScore >= cutOffMark) {
//   console.log("Congration you have been given an admission");
// } else {
//   console.log("You have not been given admission");
// }

//Strings operations
// strings are created with "" '' ``
// let fullName = "Emmanuel Anthony";
// let outcome = fullName.length;
// console.log(outcome);

// //length operator
// let password = "lllooooddslls";
// let passwordLength = password.length;
// console.log(passwordLength);

// //concatenation
// let studentName = "Prince";
// let studentScore = 65;

// let resultStatement = `Hello ${studentName} your score is ${studentScore}`;
// console.log(resultStatement);

// //comparing string
// let savedPassword = `emmanuel2468`;
// let enteredPassword = `emmanuel2468`;

// if (enteredPassword === savedPassword) {
//   console.log(`Log in successful`);
// } else {
//   console.log(`Incorrect password`);
// }

//storing data
//object literal: they are the way we record data of an object and store the data

// const carRecord = {
//   carName: "Honda",
//   carColor: "Black",
//   carModel: "Civic",
//   carYear: 2018,
// };

// console.log(carRecord);

// const bankRecord = {
//   customerName: `Joshua Malaks`,
//   customerNationality: `Nigerian`,
//   customerBvn: 330088899,
//   customerPhone: 09900837889,
//   customerState: `Osun`,
// };

// console.log(bankRecord);

// const studentRecord = {
//   studentName: `Emmanuel Anthony`,
//   studentClass: `Jss2`,
//   studentDepartment: `Chemistry`,
// };

// const carRecord = {
//   carName: "Honda",
//   carColor: "Black",
//   carModel: "Civic",
//   carYear: 2018,
//   carRegNumber: 12233004889,
//   carPlateNumeber: `EKY123BG`,
// };

// //Accesing object properties
// // using dot notation to access properties
// let carRecordYear = carRecord.carYear;
// console.log(carRecordYear);

// //bracket notation
// let carRc = carRecord["carColor"];
// console.log(carRc);

// // adding properties with dot notation
// carRecord.vinNumber = `HGUYY68899000`;

// // updating an existing property using dot notation
// carRecord.carName = `Toyota`;

// //delete properties using dot notation with delete keyword
// delete carRecord.carColor;
// console.log(carRecord);

// // Freezing an object literal
// Object.freeze(carRecord.carModel);

// //sealing an object literal
// Object.seal(carRecord);

//object nesting
// const studentRecord = {
//   fullName: `Andrew`,
//   age: 14,
//   studentClass: `Jss3`,
//   lastSemesterResult: {
//     english: "B",
//     maths: "A",
//     biology: "A",
//   },
// };

//FUNCTION
// they are use to add action to a data
// let age1 = 32;
// let age2 = 34;
// let age3 = 28;

// function averageAge() {
//   let average = (age1 + age2 + age3) / 3;
//   console.log(average);
// }

// averageAge(); //calling a function

//1

// let price1 = 50;
// let price2 = 100;
// let price3 = 30;
// let price4 = 100;

// function totalPrice(price1, price2, price3, price4) {
//   let total = price1 + price2 + price3 + price4;
//   let discount = (total * 10) / 100;
//   let finalPrice = total - discount;
//   console.log(`The total price is ${finalPrice}`);
// }
// totalPrice(3, 7, 8, 9);

// // 2
// let distance1 = 150; // km
// let time1 = 3; // hours

// let distance2 = 145;
// let time2 = 4;
// function averageSpeed() {
//   let speed1 = distance1 / time1;
//   let speed2 = distance2 / time2;
//   let finalSpeed = (speed1 + speed2) / 2;
//   console.log(`The average of both speed is ${finalSpeed}`);
// }

// averageSpeed();

// //3
// // Change the celsius value to test different temperatures.

// // Add another variable for city and print both city and temperature

// let celsius = 46;
// let country = "Korea";

// function convertToFahrenheit(celsius, country) {
//   let fahrenheit = (celsius * 9) / 5 + 32;
//   console.log(`The temperature in ${country} is ${fahrenheit}F`);
// }
// convertToFahrenheit(45, "Nija");
// convertToFahrenheit(34, "Kore");
// convertToFahrenheit(89, "Kore");
// convertToFahrenheit(7667, "Ajah");

//Ternary Operators
// a ternary operator will always have an outcome
// let votingAge = 18;
// let votersAge = 34;

// if (votersAge >= votingAge) {
//   console.log("Let them vote");
// } else {
//   console.log("Let them not vote");
// }

// votersAge >= votingAge
//   ? console.log("They can vote")
//   : console.log("They can't vote");

// let store = 20 > 40 ? "Hot" : "cold";
// console.log(store);

// //object destructuring

// //method are function inside object
// const carRecord = {
//   carName: "Honda",
//   carColor: "Black",
//   carModel: "Civic",
//   carYear: 2018,
//   milage: 50000,
//   carRegNumber: 12233004889,
//   carPlateNumeber: `EKY123BG`,
//   roadWorthiness: function () {
//     let value = 100000 - this.milage;
//     let roadW = value > 60000 ? "Not road worthy" : "Road worthy";
//     return roadW;
//   },
// };

// //aliases in destructuring
// const { carName: et } = carRecord;
// console.log(et);

// let result = carRecord.roadWorthiness();
// console.log(result);

/// practice

// function getAverageScore(score1, score2, score3) {
//   let average = (score1 + score2 + score3) / 3;
//   let result = `The average score is ${average}`;
//   return result;
// }

// getAverageScore(80, 90, 100);

// const student = {
//   name: "Emmanuel",
//   age: 12,
//   country: "Nigeria",
//   introduce: function () {
//     return `Hi i'm ${this.name} from ${this.country} and I'm ${this.age} years old`;
//   },
// };
// console.log(student.introduce());

// function checkAgeStatus(age) {
//   return age >= 18 ? "You are an adult" : "You are a minor";
// }
// console.log(checkAgeStatus(20));
// console.log(checkAgeStatus(15));

// const cartItem = {
//   name: "Headphones",
//   price: 300,
//   quantity: 2,
//   getTotalPrice: function () {
//     let total = this.price * this.quantity;
//     return total >= 500
//       ? `${total} price You get free shipping 🚚`
//       : `${total} price shipping not included`;
//   },
// };

// console.log(cartItem.getTotalPrice());

// const smoothieOrder = {
//   fruit1: "Banana",
//   fruit2: "Mango",
//   fruit3: "Strawberry",
//   hasIce: true,
//   size: "large", // "small" or "large"
//   blend() {
//     // method you will define
//   },
// };
// function makeSmoothie(smoothieOrder) {}

//

//Function expression are used in a variable

// const sayMyName = function () {
//   return "say my name";
// };

// console.log(sayMyName());

// arroww function

// const sumAb = (a, b) => a + b;

// console.log(sumAb(2, 6));

// //arrays
// const club = ["Manchester united", " Chelsea", "Arsenal", "Mardrid"];
// club[1] = "West ham";
// console.log(club);

// const country = ["Angola", "Nigerai"];

// country[1] = "Ghana";
// console.log(country);

// //array method
// //.push method help us add item to the end of our list
// const names = ["Emmanuel", "Chioma"];
// names.push("Anthony");
// console.log(names);

// //.pop is used to remove the last item on the array
// const items = ["pen", "book", "bag"];
// items.pop();
// console.log(items);

// //.unshift is used to add an item to the beginning of our list
// names.unshift("Manny");
// console.log(names);

// //.shift is the opposite the unshift
// items.shift();
// console.log(items);
// ["book"]

//indexOF used to know the position of an array

//concat is used to concatenate
// const twoList = country.concat(items);
// console.log(twoList);

// const double = (a) => a * 2;
// console.log(double(7));

// const arr = ["Apple", "Watermelon", "Gauva", "Pineapple", "PawPaw"];
// function getEnds(arr) {
//   return `The first fruit is ${arr[0]} and the last fruit is ${arr[4]}`;
// }
// console.log(getEnds(arr));

// let cart = ["bread", "milk"];
// const addToCart = (items) => cart.push(items);

// addToCart("Milo");
// addToCart("Fanta");
// console.log(cart);

// let numbers = [12, 5, 8, 130, 44];

// const getBigNumbers = (arr) => {
//   return arr.filter((num) => num > 10);
// };

// console.log(getBigNumbers(numbers));

// const classroom = {
//   students: ["Manny", "Sarah", "John"],
//   addStudent: function (name) {
//     this.students.push(name);
//     return `name added. total student: ${this.students.length} `;
//   },
// };
// console.log(classroom.addStudent("Helen"));
// console.log(classroom.students);

// const taskList = {
//   tasks: ["wash", "run", "learn"],
//   addTask: function (tasks) {
//     return `${tasks.push(tasks)} added`;
//   },
//   removeLast: function () {
//     return this.tasks.pop() > 0
//       ? `${this.tasks} removed`
//       : "No tasks to remove";
//   },
// };

//Loop

//For loop

// const arrayNames = ["Amaka", "Tosin", "Divine", "Lola"];

// for (let x = 0; x < 3; x++) {
//   let items = arrayNames[x];
//   console.log(items);
// }

// const arrOfNum = [1, 2, 3, 4, 5, 6];
// const emptyArray = [];
// for (let x = 0; x < 6; x++) {
//   let result = arrOfNum[x] * 2;
//   emptyArray.push(result);
// }
// console.log(emptyArray);

// const carDetails = [
//   {
//     name: "Toyota",
//     colour: "Black",
//     year: 2008,
//     regNo: "UUUDBB99878888",
//   },
//   {
//     name: "Lexus",
//     colour: "Green",
//     year: 2090,
//     regNo: "990000dmnmndn",
//   },
//   {
//     name: "Volvo",
//     colour: "Red",
//     year: 1998,
//     regNo: "YYHBJW889999000",
//   },
// ];

// for (let x = 0; x < 3; x++) {
//   let carDetils = carDetails[x];
//   console.log(carDetils);
// }

//higher order array methods
//foreach

// let colors = ["red", "blue", "green", "yellow"];

// colors.forEach((colors) => {
//   console.log(colors);
// });

// let nums = [2, 4, 6, 8];

// let tripled = nums.map((nums) => nums * 3);
// console.log(tripled);

// let ages = [10, 25, 17, 30, 12, 40];
// let adult = ages.filter((ages) => ages > 18);
// console.log(adult);

// let foods = ["rice", "beans", "yam"];
// for (let food of foods) {
//   console.log(food);
// }

// arr = [4, 5, 6];

// const getLast = (arr) => {
//   return arr[arr.length - 1];
// };

// let numbers = [5, 10, 15, 20, 25];

// let result = numbers.filter((num) => num > 10).map((num) => num * 2);

// console.log(result);

//concatenation of Array and Object

// const first = [1, 2, 3, 4, 5, 6];
// const second = [6, 7, 8, 9, 10];

// let newArr = first.concat(second);
// console.log(newArr);

// const firstEx = [1, 2, 3, 4, 5, 6];
// const secondEX = [6, 7, 8, 9, 10];
// const thirdEx = [2, 4, 8, 0, 90];

// let newArrEx = [...firstEx, ...secondEX, ...thirdEx];
// console.log(newArrEx);

// const name = {
//   firstName: "Emmanuel",
//   lastName: "Anthony",
// };

// const size = {
//   Height: 45,
//   Waist: 67,
//   Lenght: 90,
// };

// const nameSize = {
//   ...name,
//   ...size,
// };

// console.log(nameSize);

// const getLast = (arr) => {
//   return arr[arr.length - 1];
// };
// console.log(getLast([10, 20, 39, 90]));

// let tasks = ["wash", "cook"];
// const addTask = (task) => {
//   tasks.push(task);
//   return tasks;
// };
// addTask("Write");
// console.log(tasks);

// let names = ["Ann", "Manny", "Uzo", "Sarah", "Tom"];
// let resultName = names.filter((name) => {
//   return name.length > 4;
// });
// console.log(resultName);

// let nums = [2, 5, 10];
// let stringNum = nums.map((num) => {
//   return num.toString();
// });
// console.log(stringNum);

// let fruits = ["apple", "banana", "pear"];
// fruits.forEach((fruit) => {
//   console.log(`Fruit: ${fruit}`);
// });

//reduce array
// const numbers = [2, 3, 6, 78, 789];
// const tot = numbers.reduce(function (accumalator, current) {
//   return accumalator + current;
// }, 10);

// console.log(tot);

//Dom manipulation

// function number(a) {
//   return a * 2;
// }

// let result = number(4);
// console.log(result);

// let count = 5;
// function countFunction(count) {
//   return count + 1;
// }

// console.log(countFunction());

// const multiply = (a, b) => a + b;

// const checkScore = (score) => (score >= 50 ? "Pass" : "fail");

// console.log(checkScore(50));

// let price = 1000;
// function addTax(price) {
//   return price * 1.075;
// }

// function formatPrice(price) {
//   return `₦${price}`;
// }

// let taxedPrice = addTax(price);
// let finalPrice = formatPrice(taxedPrice);

// console.log(finalPrice); // ₦1075

// let balance = 1000;

// function deposit(balance, amount) {
//   return balance + amount;
// }

// function withdraw(balance, amount) {
//   if (amount <= balance) {
//     return balance - amount;
//   } else {
//     return balance;
//   }
// }

// function getBalanceLabel(balance) {
//   if (balance < 500) {
//     return "Low";
//   } else if (balance < 2000) {
//     return "Okay";
//   } else {
//     return "Healthy";
//   }
// }

// console.log(getBalanceLabel(balance));

const newPrice = (price) => {
  return price + price * 0.1;
};
console.log(newPrice(4));

const greet = (name) => {
  return "Hello " + name;
};

const addTwenty = (number) => number + 20;
console.log(addTwenty(10));

const multiply = (a, b) => a * b;

let score = 10;

function increaseScore(points) {
  score + points;
}
increaseScore(5);
console.log(score);

function discount(price) {
  return price - 5;
}
