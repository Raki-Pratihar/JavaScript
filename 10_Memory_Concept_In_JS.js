// 1️⃣0️⃣ Memory Concept in JavaScript.


// 1. Memory and thread concept in JS.
/*
JavaScript memory management involves allocating, using, and freeing memory. Stack memory generally handles function execution contexts and local execution data, while heap memory generally stores objects and dynamically allocated data. JavaScript automatically manages memory through garbage collection, which reclaims memory that is no longer reachable.
*/

// 2. Memory in JS.

/*3. Stack Memory [Premitive]
   Heap Memory [non-premitive]*/

// 4. Concept of stack memory.
/*
⭐ Stack memory stores primitive values and function execution contexts.

⭐ It follows LIFO (Last In, First Out).

⭐ Each function call creates a stack frame, which is removed when the function finishes.

⭐ It is generally fast and automatically managed by the JavaScript engine.

⭐ Example
let a = 10;
let b = 20;

function add() {
  let sum = a + b;
  return sum;
}

add();
*/

// 5. Concept of heap memory.
/*
⭐ Heap memory stores objects and other dynamically allocated data.

⭐ It is used for objects, arrays, and functions.

⭐ It is managed automatically by the JavaScript engine using Garbage Collection.

⭐ Variables may store references to objects in heap memory.

⭐ Example
let user = {
  name: "Raki",
  age: 20
};
*/