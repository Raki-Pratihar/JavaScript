// 1️⃣1️⃣ String.


// 1. Addition of string.
/*In JavaScript, the + operator is used to concatenate (join) strings.*/
console.log("tony" + "stark");

// 2. String in variable.
const myName = "rocky"
const myRepoCount = 50

// 3. Concatinet with "+"
console.log("Hallo my name is " + myName + " and my repo count is " + myRepoCount);
// ⭐ don't use this type of syntex.Instide this we can use string interpulation

// 4. String interpulation with ``
console.log(`Hallo my name is ${myName} and my repo count is ${myRepoCount}`);

// 5. Decleared string with string constructer. [object constructer]
const gameName = new String('RDR2')
console.log(gameName);

// 6. Key value pair in string created by string constructor.
/* If we create a string using the String constructor (new String()), it returns a String object, not a primitive string.

When we create a string using the String constructor, JavaScript creates a String object that behaves like an object and provides indexed access to its characters.

* String objects have indexed characters.
* Indexes start from 0.
* Strings are immutable (we cannot change individual characters).
* length gives the total number of characters.

⭐ Note: Primitive strings also support indexing and .length because JavaScript automatically wraps them temporarily when accessing properties. we don't need new String() to use these features. */

// 7. Method in of string.
/*In JavaScript, String methods are built-in functions used to perform operations on strings, such as searching, modifying, extracting, and converting text.*/

// 8. Print string key.
const primitiveString = "Hello"
const nonprimitiveString = new String('World')

console.log(primitiveString[0]);
console.log(nonprimitiveString[0]);

// 9. Print string _ _ proto_ _
console.log(gameName.__proto__); // in browser

// 10. String length.
const fullName = "rocky"
console.log(fullName.length); //--> 5

// 11. toUppercasse().
console.log(fullName.toUpperCase()); //--> ROCKY

// 12. Method don't change original string .
/* Strings are immutable in JavaScript. It means once a string is created, you cannot change its individual characters.
All the methods returns a new string instead of modifying the original.
🌟 You can reassign a variable to a new string.  */

// 13. charAt(2)
console.log(fullName.charAt(2)); //--> c

// 14. indexof('t')
console.log(fullName.indexOf('k')); //--> 3
console.log(gameName.indexOf('R')); //--> 0 not (0 and 2)

// 15. str.substring(sftart,end) 
const subName = fullName.substring(0, 5)
console.log(subName);

// 16. str.slice(0/-5 , 5)
const sliceName = fullName.slice(-5, 5)
console.log(sliceName);

// 17. str.substring vs str.slice
/* Both methods extract parts of a string.Both exclude the ending index.
slice() supports negative indexes.substring() does not support negative indexes. */

// 18. str.trim()
const spaceSrting = "   rocky  "
const trimString = spaceSrting.trim()

console.log(spaceSrting);
console.log(trimString);

// 19. str.replace('before' , 'after')
const url = "https://rocky.com/good%20programer"
console.log(url.replace('%20', '-'));

// 20. str.includes('search')
console.log(url.includes('rocky'));
console.log(url.includes('jit'));;

// 21. str.split('separator')
const dasString = "ram_sam_rahit"
const space_string = "ram sam rahit"
const hyphenStrinh = "ram-sam-rahit"
const aString = "ramsamrahit"

console.log(dasString.split('_'));
console.log(space_string.split(' '));
console.log(hyphenStrinh.split('-'));
console.log(aString.split('a'));