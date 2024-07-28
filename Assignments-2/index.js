/**  Create an arrow function called square that takes a number as an argument and returns its square Use
the arrow function to calculate the square of a given number and display the result.*/

const square =(num)=>num*num;
const num=10;
const squaredNumber=square(num)
console.log("square:",squaredNumber);


/**
 * 2 The following is an array of 10 students ages:
=> const ages = [19,22,19,24,20,25,26,24,25,24]
 Sort the array and find the min and max age
 Find the median age(one middle item or two middle items divided by two
 Find the average age(all items divided by number of items
 Find the range of the ages(max minus min
 Compare the value of (min - average) and (max - average)

use abs() method
 */

const ages = [19,22,19,24,20,25,26,24,25,24]
ages.sort((a,b)=>a-b);
const minAge=ages[0];
const maxAge=ages[ages.length-1];
let medianAge;
if(ages.length%2==0){
    const mid1=ages[Math.floor(ages.length/2)-1];
    const mid2=ages[Math.floor(ages.length/2)];
    medianAge=(mid1+mid2)/2;
}else{
    medianAge=ages[Math.floor(ages.length/2)]
}


const sumAges=ages.reduce((sum,age)=>sum+age,0);
const averageAge=sumAges/ages.length;

const ageRange=maxAge-minAge;

const minDifference=Math.abs(minAge-averageAge);
const maxDifference=Math.abs(maxAge-averageAge);

console.log("Sorted Ages:",ages)
console.log("Min age:",minAge)
console.log("Max age:",maxAge)
console.log("Median age:",medianAge)
console.log("Averege age:",averageAge)
console.log("Age Range:",ageRange)
console.log("Min-Averege Difference:",minDifference)
console.log("Max-Averege Difference:",maxDifference)

/**
 * 3. Create a Map to store contact information (name, age, email, location) and implement a function to
retrieve contact details by name.
 */
const contactMap=new Map();
contactMap.set("Shekhar",{
    age:20,
    email:"shekhartayde410@gmail.com",
    location:"Aurangabad"
});
function getContact(name){
    return contactMap.get(name);
}
console.log(getContact("Shekhar"));

/**
 * 4. Create two objects person1 and person2 with properties name and age. Create a function “introduce” that
prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself
using the introduce function.
 */

const person1={name:"shekhar",age:20};
const person2={name:"maya",age:18};

function introduce(){
    console.log('Hello , I am ${this.name} and  I am ${this.age} years old');
}
introduce.call(person2);

/**
 * 5. You are developing a program to manage a list of unique items. Write a JavaScript program that uses a
Set to store a collection of unique numbers. Use the Map object to associate each number with its square.
Finally, print both the unique numbers and their corresponding squares.
 */// Step 1: Create a Set to store unique numbers
const uniqueNumbers = new Set();

// Adding numbers to the Set
uniqueNumbers.add(5);
uniqueNumbers.add(3);
uniqueNumbers.add(9);
uniqueNumbers.add(2);
uniqueNumbers.add(7);
uniqueNumbers.add(3); // This will be ignored since 3 is already in the Set

// Step 2: Create a Map to associate each number with its square
const numberSquares = new Map();

// Populate the Map with the numbers and their squares
uniqueNumbers.forEach(number => {
    numberSquares.set(number, number * number);
});

// Step 3: Print the unique numbers and their squares
console.log("Unique Numbers:");
uniqueNumbers.forEach(number => {
    console.log(number);
});

console.log("\nNumber Squares:");
numberSquares.forEach((square, number) => {
    console.log(`The square of ${number} is ${square}`);
});


/**
 * Ceate a simple JavaScipt function named displayInfo that takes to paametes (name and ole) and
logs a message
 Use call to invoke the displayInfo function ith specific aguments
 Use apply to invoke the displayInfo function ith aguments passed as an aay
 Ceate anothe function named geet that logs a geeting ith this context
 Use bind to ceate a ne function boundeet ith a specific context and log the geeting.
 */
// 1. Create the displayInfo function
function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
}

// 2. Use call to invoke displayInfo with specific arguments
displayInfo.call(null, 'Alice', 'Engineer');

// 3. Use apply to invoke displayInfo with arguments passed as an array
displayInfo.apply(null, ['Bob', 'Designer']);

// 4. Create another function named greet
function greet() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.role}.`);
}

// 5. Use bind to create a new function bound with a specific context and log the greeting
const person = {
    name: 'Charlie',
    role: 'Developer'
};

const boundGreet = greet.bind(person);
boundGreet(); // This will use the context of `person` and log the greeting


/**
 * 7$ Tasks
 Create an object named calculator with methods add, subtract, and multily#
 Imlement the calculate method in the calculator object, which takes an oeration ('add', 'subtract', or
'multily') and two numbers#
 Use call to erform an addition oeration using the calculate method#
 Use aly to erform a multilication oeration using the calculate method with arguments as an array#
 Create another object named discountCalculator with a discount ercentage roerty and a method
alyDiscount#
 Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and
can be reused.
 */

// 1. Create the calculator object
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    // 2. Implement the calculate method
    calculate: function(operation, a, b) {
        if (this[operation]) {
            return this[operation](a, b);
        } else {
            throw new Error('Invalid operation');
        }
    }
};

// 3. Use call to perform an addition operation
const additionResult = calculator.calculate.call(calculator, 'add', 5, 3);
console.log(`Addition Result: ${additionResult}`); // Output: Addition Result: 8

// 4. Use apply to perform a multiplication operation with arguments as an array
const multiplicationResult = calculator.calculate.apply(calculator, ['multiply', 4, 6]);
console.log(`Multiplication Result: ${multiplicationResult}`); // Output: Multiplication Result: 24

// 5. Create the discountCalculator object
const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function(price) {
        return price - (price * this.discountPercentage / 100);
    }
};

// 6. Use bind to create a new function bound to discountCalculator
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

// Use the bound function
const originalPrice = 100;
const discountedPrice = calculateDiscount(originalPrice);
console.log(`Discounted Price: ${discountedPrice}`); 
