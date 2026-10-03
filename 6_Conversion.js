// 🚀 6. Conversion in JavaScript


// 1. Impotemce of Finding variable's data type.


// 2. Find data type of value.
let score=50;
console.log(typeof score);
console.log(typeof(score));

// 3. Numder can be inside string.
let num_in_str="10";
console.log(typeof num_in_str);

// 4. Convert string into numder.
let numstr_to_num= Number(num_in_str);
console.log( typeof numstr_to_num);

// 5. Conversion problem of numder in JS.
console.log(numstr_to_num);

// 6. NaN
/* Not a Number */

// 7. Convert null into numder.
let null_val=null;
let null_to_num= Number(null_val);
console.log(null_to_num);

// 8. Convert undefined into number.
let undefined_val=undefined;
let undefined_to_num=Number(undefined_val);
console.log(undefined_to_num);

// 9. Convert boolean into numder.
let false_val=false;
let true_val=true;
let false_to_num=Number(false_val);
let true_to_num=Number(true_val);
console.log(false_to_num);
console.log(true_to_num);

// 10. Convert string into number.
let str_val="rocky";
let str_to_num=Number(str_val);
console.log(str_to_num);

// 11. Convert 1 into boolean. 
let one=1;
let one_to_boolean= Boolean(one);
console.log(one_to_boolean);

// 12. Convert vacent string into boolean.
let vacent ="";
let vacent_to_boolean=Boolean(vacent);
console.log(vacent_to_boolean);

// 13. Convert string into boolean.
let str="nature";
let str_to_boolean=Boolean(str);
console.log(str_to_boolean);

// 14. Notes. 
/* 1 => true; 0 => false
"I' false
"hitesh" => true */

// 15. Convert number into string.
let num_val =33;
let num_to_str=String(num_val);
console.log(num_to_str);
console.log(typeof num_to_str);;