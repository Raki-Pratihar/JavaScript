// 5. Data Type & ECMA script

// 1. Use strict.
"use strict"; //treat all js code in newer verson.

// 2. Use alert.
//alert("Hallo");

// 3. Readability of code.
/* Code shuld always clean and structured so that many developer can read and update the code */
console.log(2+3); console.log("Rocky");  // Not a good wya to write code 

console.log(5+5);       // Right way to write code.
console.log("Nature");

// 4. MDN
/* MDN (MDN Web Docs) is a free, reliable documentation website for web development.

HTML — elements, attributes, forms
CSS — properties, layouts, animations
JavaScript — syntax, APIs, methods
Web APIs — DOM, Fetch, Storage, etc.
Guides & examples — practical explanations and code. */

// 5. ECMA script.
/*
ECMAScript (ES) is the standard/specification that defines how JavaScript should work.

ECMAScript → The standard
JavaScript → An implementation of that standard
ES6 / ES2015 → A major version that introduced features like let, const, arrow functions, classes, etc.
*/

// 6. Data Types in JavaScript.
/* There are mainly seven types of data in JavaScript */

   // i.Number
   let dataNumber=10;
   console.log(typeof dataNumber);

   // ii.BigInt
   let dataBigInt=10n;
   console.log(typeof dataBigInt);

   // iii.String
   let dataString ="I am learning JS";
   console.log(typeof dataString);

   // iv.Boolean
   let dataBoolean1=true;
   let dataBoolean2=false;
   console.log(typeof dataBoolean1);

   // v.Null
   let dataNull=null;
   console.log(dataNull);
   
   // vi.Undefined
   let dataUndefined=undefined;
   console.log(dataUndefined);
   
   // vii.Symbol 
// 7. Object.
let myObject={
   fullName:"rocky",
   age:19
}

// 8. typeof.
/* typeof is a mathod that we use to find datatype  */
console.log(typeof myObject);

// 9. typeof null-->object
console.log(typeof dataNull);