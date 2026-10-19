// 2️⃣1️⃣ Global And Local Scope In JavaScript

// 1. let , const and var
let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);

// 2. Importence of {} in scope in javascript
/*
In JavaScript, {} is important for creating scope because it defines where variables are accessible.
*/


// 3. Difference in scope in let, const and var  
/*
if (true) {
    let x = 10;
    const y = 20;
    var z = 30;
}

console.log(x); --> x is not defined ( let have block scope)
console.log(y); --> y is not defined ( const have block scope )
console.log(z); --> 30 ( var have global scope )
*/


// ⭐ check scope in tarminal with node and check scope in browser are different.