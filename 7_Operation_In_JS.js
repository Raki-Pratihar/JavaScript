// 7️⃣ Operations In JavaScript


// 1. Operations.
/*
* Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`
* Assignment: `=`, `+=`, `-=`, `*=`, `/=`
* Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
* Logical: `&&`, `||`, `!`
* Increment/Decrement: `++`, `--`
* Bitwise: `&`, `|`, `^`, `~`, `<<`, `>>`
* Ternary: `condition ? true : false`
* Nullish Coalescing: `??`
* Optional Chaining: `?.`
 */

// 2. Negative value of number.
let value1 = 5;
let neg_value1 = -value1;
console.log(neg_value1);
let value2 = -10;
let psvt_value2 = -value2;
console.log(psvt_value2);

// 3. Other operations.
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 3);

// 4. Addition of string.
let str1="trust";
let str2=" me";
let str_1_2=str1+str2;
console.log(str_1_2);

// 5. Addition of string and number.
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

// 6. To primitive
/*

**ToPrimitive** is the internal JavaScript operation that **converts an object into a primitive value**.

* Uses `valueOf()`
* Then `toString()` (depending on the conversion hint)
* Hints: **`"number"`**, **`"string"`**, **`"default"`**

Example:

```js
const obj = {
  valueOf() { return 10; }
};

console.log(obj + 5); // 15
```

**In short:** `Object → Primitive value`

*/

// 7. Use multipal operation at a time.
console.log(2+18/5-4); // Bade way write code.
console.log(((2+18)/5)-4); // Right way to write code.

// 8. console.log(+true)
console.log(+true);

// 9. console.log(true+)
// eror

// 10. console.log(+"")
console.log(+"");
// 11. pre incriment and post incriment.