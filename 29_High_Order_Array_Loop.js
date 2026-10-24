// 2️⃣9️⃣ High Order Array Loop

// 1. for-of loop 
/*
for(const iterator of object){

}
⭐ iterator --> variable just lile i 
⭐ object --> string , array , object etc.
*/

// 2. for-of loop on array 
const numArray = [1, 2, 3, 4, 5]
for (const num of numArray) {
    console.log(num);
}

// 3. for-of loop on string 
const forofstring = "Hallo world!"
for (const character of forofstring) {
    console.log(`character is ${character} `)
}

// 4. Maps in javascript
/*
In JavaScript, Map is a built-in data structure that stores key-value pairs, where each key is unique and can be of any data type. It maintains insertion order and provides methods like set(), get(), has(), and delete() to manage entries.
*/
const MapInJS = new Map()
MapInJS.set('IN', "India")
MapInJS.set('USA', "United States of Anerica")
MapInJS.set('FR', "France")
MapInJS.set('IN', "India") //⭐

console.log(MapInJS);
//⭐ India is stored only one time cause Map stores only unique key.

// 5. for-of loop on map 
for (const key of MapInJS) {
    console.log(key);
}  // print array ['key',"value"]

for (const [key] of MapInJS) {
    console.log(key);
}  // print only key

for (const [key, val] of MapInJS) {
    console.log(key, ':-', val);
}  // array destructure print key and value

// 6. for-of loop on object

/* we cannot directly use for...of on a normal JavaScript object because objects are not iterable by default.

However, we can use Object.entries() to loop through an object's keys and values using for...of.*/

const forofObject = {
    hero1: "ironman",
    hero2: "spydweman",
    hero3: "thor"
}
for (const [key, val] of Object.entries(forofObject)) {
    console.log(key, val);
}

// 7. for-in loop 
/*In JavaScript, the for...in loop iterates over the enumerable property keys of an object, allowing you to access each key and its corresponding value. */

// 8. for-in loop on object
const myObject = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    java: "java"
}
for (const key in myObject) {
    console.log(`${key} for ${myObject[key]}`)
}

// 9. for-in loop on array 
let programLang = ["js", "py", "cpp", "java"]
for (const key in programLang) {
    console.log(programLang[key])
}

// 10. for-each loop 
/* The forEach() loop in JavaScript is an array method that executes a callback function once for each element of an array. It does not work directly with ordinary objects.
forEach is a higher order function

::code::
const arr = [10, 20, 30];

arr.forEach((value) => {
    console.log(value);
});

array --> prototype --> forEach
*/

// 11. callback function
/* A callback function is a function passed as an argument to another function, which is then called inside that function. */
function greet(name) {
    console.log("Hello, " + name);
}

function process(callback) {
    callback("Raki");
}

process(greet);

// 12. forEach loop on array
const coding = ["js", "py", "cpp"]

coding.forEach(function (val) {
    console.log(val);
})

// 13. forEach loop with arraw function
coding.forEach((val) => {
    console.log(val);
})

// 14. forEach loop using callback function refarence
function printMe(val) {
    console.log(val)
}
coding.forEach(printMe);  // only give referance don't execute

// 15. Other parameter of forEach loop
coding.forEach((val, index, arr) => {
    console.log(val, index, arr);
})

// 17. forEach on array having object inside
const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
]

myCoding.forEach((item) => {
    console.log(`${item.languageName} : ${item.languageFile}`)
})