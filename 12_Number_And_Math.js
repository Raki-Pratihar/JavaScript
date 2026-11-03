// 1️⃣2️⃣ Number and Math in JavaScript.


// 1. Strict for number.
const score = 400
console.log(score);

const balance = new Number(400)
console.log(balance);

// 2. Proparties of number.
/*JavaScript provides several built-in properties through the Number object.
🌟 Example:
1. Number.MAX_VALUE
2. Number.MIN_VALUE
3. Number.MAX_SAFE_INTEGER
4. Number.MIN_SAFE_INTEGER
5. Number.POSITIVE_INFINITY
6. Number.NEGATIVE_INFINITY
7. Number.NaN */

// 3. num.toString()
const numToString = balance.toString()
console.log(numToString);
console.log(numToString.length);

// 4. num.toString().length
console.log(balance.toString().length);

// 5. num.toFixed(1/2/3/4...)
console.log(balance.toFixed(2));

const totalPrice = 15500.49876549
console.log(`Total price to pay ${totalPrice.toFixed(2)}`);
console.log(typeof totalPrice.toFixed(2));
// ⭐Note: toFixed return number after round off. And it's a string.

// 6. num.toPrecision(3)
const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(2));

// 7. num.toLocalString()
const hundreds = 1000000
console.log(hundreds.toLocaleString());

// 8. ('en_in')
console.log(hundreds.toLocaleString('en-IN'));

// 9. Maximum value of number in javascript.
console.log(Number.MAX_VALUE);

// 10. Minimum value of number in javascript.
console.log(Number.MIN_VALUE);

// 11. Max_safe_integer
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// 12. Math in javascript.
console.log(Math);
/*In JavaScript, Math is a built-in object that provides properties and methods for performing mathematical operations.

Unlike Number, Math is not a constructor. You don't need to create an object to use it.

♦️ Important Math Properties:
Property    Description                 Result
Math.PI     Value of π                  3.14159...
Math.E      Euler's number              2.71828...
Math.LN2    Natural logarithm of 2      0.693...
Math.LN10   Natural logarithm of 10     2.302...
Math.SQRT2  Square root of 2            1.414...

♦️ Important Math Methods:
Method         Description
Math.round()   Rounds to nearest intege 
Math.floor()   Rounds down 
Math.ceil()    Rounds up 
Math.trunc()   Removes decimal part 
Math.abs()     Returns absolute value 
Math.sqrt()    Square root 
Math.cbrt()    Cube root 
Math.pow()     Power 
Math.min()     Smallest value
Math.max()	   Largest value 
Math.random()  Random number between 0 and 1 

⭐ Note: 
i. Math is a built-in JavaScript object.
ii. You don't need new Math() to use it.
iii. Math methods generally return numbers.
iv. Math.random() is useful for games, OTP-like random values (though not secure for real OTPs), and random selections.
 */

// 13. Math.abs(-4)
console.log(Math.abs(-4));  // only changes sign of negetive values

// 14. Math.round(4.6)
console.log(Math.round(4.6));
console.log(Math.round(4.59));
console.log(Math.round(4.32));

// 15. Math.ceil(4.2)
console.log(Math.ceil(4.2));

// 16. Math.floor(4.9)
console.log(Math.floor(4.9));

// 17. Math.min(4,3,6,8)
console.log(Math.min(4, 3, 6, 8));

// 18. Math.max(4,3,6,8)
console.log(Math.max(4, 3, 6, 8));

// 19. Math.random()   0<-->1
console.log(Math.random());

// 20. (Math.random()*10)+1
console.log((Math.random() * 10) + 1);  // minimum number never become 0

// 21. value between our min and max
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

let numberBetween = Math.floor(Math.random() * (max - min + 1)) + min
console.log(numberBetween);