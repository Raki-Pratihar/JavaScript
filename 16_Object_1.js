// 16. Object Part 1

// 1️⃣ Objects in javascript
/* An object in JavaScript is a collection of properties stored as key-value pairs.

* Key: Property name.
* Value: Data associated with that property.
* Objects can store different data types, including strings, numbers, arrays, functions and other objects. 

🌟 Remember: Objects are used to represent real-world entities and organize related data.*/


// 2️⃣ Two ways to create object in JavaScript

// 1.  Object Literal (Non-singleton)
const user1 = {
    name: "rocky",
    age: 19
}
console.log(user1);

// 2. Using Constructor (Singleton Object)
const user2 = new Object();
user2.name = "jit"
user2.age = 19
console.log(user2);

/* ♦️ Key difference:
* Object literal: Creates an object directly.
* new Object(): Creates an object using the built-in Object constructor.

⭐ Note: Singleton means only one instance exists. new Object() does not automatically enforce the singleton pattern.*/


// 3️⃣ Concept of singleton 
/* A Singleton is a design pattern in which only one instance of an object is intended to exist throughout the application.

♦️Important points:
1. Singleton ensures only one instance of a particular object or class.

2. It is useful when one shared instance is required throughout an application.

3. JavaScript object literals do not automatically implement the Singleton pattern. */


// 4️⃣ Two ways to access values of keys inside an object
const jsUser = {
    name: "rocky",
    age: 19,
    email: "rocky@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["monday", "saturday"],
    "location": "kolkata"
}
//1. first method
console.log(jsUser.email);

//2. second method
console.log(jsUser["email"]);

//⭐ Note:
console.log(jsUser["location"]);  // we can't access this value using first method


// 5️⃣ Interasting case of symbol
const mySym = Symbol("key2")

const otherUser = {
    name: "ram",
    [mySym]: "myKey2"
}

console.log(otherUser[mySym]);
console.log(typeof otherUser[mySym]);


// 6️⃣ Change  value of key inside an object and freeze Object
const myFriend = {
    name: "jit",
    age: 18,
    location: "Medinipur"
}

myFriend.age = 19;
console.log(myFriend);

Object.freeze(myFriend)
myFriend.location = "raipur"
console.log(myFriend);


// 7️⃣ Add function to an object
const myObject = {
    name: "rocky",
    age: 19,
    location: "raipur",
    email: "rocky@gmail.com"
}

myObject.greeting = function () {
    console.log("Hallo js user");
}

console.log(myObject);
console.log(myObject.greeting);
console.log(myObject.greeting());


// 8️⃣ This keyword in object
myObject.description = function () {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
}

console.log(myObject.description());