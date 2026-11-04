// 1️⃣4️⃣ Array Part 1

// 1. Array 
/* An Array in JavaScript is a special type of object used to store multiple values in a single variable.

♦️ Key Points:
* Arrays store multiple values.
* Elements are stored in an indexed order.
* Indexing starts from 0.
* Arrays can store different data types.
* Arrays are mutable (their elements can be changed). 
*/

// 2. Declare array in JS
const myArray = [0, 1, 2, 3, 4, 5]  // 0,1,2...are elements of array 

const myArray1 = [0, 1, 2, true, "rocky"]  // we can store myltupal data type in same array 

console.log(myArray);
console.log(myArray1);

// 3. Index of array 
/* In JavaScript, an array index is the numerical position of an element in an array.

♦️Key Points:
    i. Array indexing starts from 0.
    ii. The first element has index 0.
    iii. The second element has index 1.
    iv. The last element's index is array.length - 1.
*/

// 4. Access eliment of index inside an array
const indexArray = ["Apple", "Mango", "Banana", "Orange"]
console.log(indexArray[0]);
console.log(indexArray[1]);
console.log(indexArray[2]);
console.log(indexArray[3]);

// 5. sallow and deep copy
/* In JavaScript, Shallow Copy and Deep Copy are two ways of copying objects or arrays.

♦️ Shallow Copy:
A shallow copy creates a new object or array, but nested objects are still referenced from the original.

let original = [10, 20, [30, 40]];

let copy = [...original];

copy[0] = 100;
copy[2][0] = 300;

console.log(original); // [10, 20, [300, 40]]
console.log(copy);     // [100, 20, [300, 40]]

🌟 Remember:
* Creates a new outer array.
* Nested objects or arrays share references.
* Changes to nested elements affect the original.

♦️ Deep Copy:
A deep copy creates a completely independent copy, including nested objects and arrays.

let original = [10, 20, [30, 40]];

let copy = structuredClone(original);

copy[0] = 100;
copy[2][0] = 300;

console.log(original); // [10, 20, [30, 40]]
console.log(copy);     // [100, 20, [300, 40]]

🌟 Remember:
* Creates an independent copy.
* Nested arrays and objects are also copied.
* Changes to the copy don't affect the original

⭐ Note:
Important JavaScript methods:

* Shallow Copy: slice(), Object.assign(), spread operator (...).
* Deep Copy: structuredClone().

Interview Tip: The spread operator (...) creates a shallow copy, NOT a deep copy.
*/

// 6. Create array using array constructor
const myArray2 = new Array("ram", "sam", "rohit")
console.log(myArray2);

// 7.  Array Methods
/* In JavaScript, Array Methods are built-in functions used to manipulate, access, search, and modify array elements. */

// 8. arr.push()
const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr);

myArr.push(6)
myArr.push(7)
console.log(myArr);

// 9. arr.pop()
myArr.pop()
console.log(myArr);

// 10. arr.unshift()
myArr.unshift(9)   //--> add 9 at start of the array
console.log(myArr);

/*⭐Note: after using that method indices of all elements are reassigned. So try to avoide this method.
*/

// 11. arr.shift()
myArr.shift()
console.log(myArr);

// 12. arr.includes()
console.log(myArr.includes(9));  //--> false
console.log(myArr.includes(0));  //--> true

// 13. arr.indexOf()
console.log(myArr.indexOf(3));
console.log(myArr.indexOf(10));

// 14. arr.join()
const newArray = myArr.join()

console.log(myArr);
console.log(newArray);

console.log(typeof myArr);
console.log(typeof newArray);

// 15. slice() and splice()
console.log("A", myArr);

const myNewArr1 = myArr.slice(1, 3)
console.log(myNewArr1);
console.log("B", myArr);

const myNewArr2 = myArr.splice(1, 3)
console.log(myNewArr2);
console.log("C", myArr);