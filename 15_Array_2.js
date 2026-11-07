// 15. Array Part 2

// 1️⃣ Prototypw in array 
/* In JavaScript, every array inherits properties and methods from Array.prototype.

* Array.prototype is an object.
* It contains built-in array methods.
* Every array can access these methods through the prototype chain.
*/

// 2️⃣ arr.concat() 
const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

/*
marvel_heros.push(dc_heros)
console.log(marvel_heros);  --> [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] 

console.log(marvel_heroes[3])  --> [ 'superman', 'flash', 'batman' ]
console.log(mervel_heroes[3][0]) --> 'superman'

in this case we get an array inside an array not other array elments induvudually */

/*
* concat() does not modify the original arrays.
* It returns a new array.
* You can concatenate multiple arrays.
* It can also concatenate individual values.  */

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);


// 3️⃣ Spread Operator (...)
/* The spread operator (...) is used to expand elements of an array, object, or iterable into individual elements.

1. Spread operator uses three dots (...).
2. It expands iterable elements.
3. It creates shallow copies of arrays and objects.
4. It does not modify the original array or object.
5. Nested objects and arrays are not deeply copied.*/

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


// 4️⃣ arr.flat()
/* The flat() method is used to flatten a nested array by converting it into a single-level array or reducing its nesting depth.

♦️Important Points
1. flat() returns a new array.
2. It does not modify the original array.
3. Default flattening depth is 1.
4. You can specify the depth using a number.
5. Infinity flattens all nested levels. [⭐]
6. It removes empty slots (sparse elements) within the flattened levels.

🌟 Remember: flat() is a non-mutating array method. */
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [1, 2, 3]]]


// 5️⃣ Array.flat() & Array.from()
const flat_another_array = another_array.flat(2)
console.log(flat_another_array);

const collected_array = "rocky"
console.log(Array.isArray(collected_array));

const convert_colleted_array = Array.from(collected_array)
console.log(convert_colleted_array);

console.log(Array.from({ name: "rocky" }));  // --> [] empty array cause we don't instruct to convert key or value [⭐]

// 6️⃣ convert many numbers into a single string Array.of()
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));