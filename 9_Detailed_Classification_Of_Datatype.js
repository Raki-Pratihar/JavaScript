// 9️⃣ Detailed classification Of Datatype.

// 1. Primitive and non-primitive/reference data type.
// 2. Primitive --> call by value
// i. String 
let str="Rocky";
console.log(str);

// ii. Number
let num=10;
console.log(num);

// iii. Boolean
let tr=true;
let fl=false;
console.log(tr);
console.log(fl);

// iv. Null
let nl=null;
console.log();

// v. Undefined
let unfnd1=undefined;
let unfnd2;
console.log(unfnd1);
console.log(unfnd2);

// vi. BigInt
let bigNumber=1425546475875874n;
console.log(bigNumber);


// 3. Reference [non-primitive]
// i. Array
  const heroes=["spiderman","saktiman","ironman"];
  console.log(heroes);
  
// ii. Object
let myObject={
    name:"rocky",
    age:19
}
console.log(myObject);

// iii. Function
const myFunction=function(){
    console.log("Hallow world");
}
myFunction();
// 4. Static vs Dynamically typed.
/* Programming languages are classified into Statically Typed and Dynamically Typed languages based on when variable types are checked.

1. Statically Typed Language:
A language in which the variable's data type is determined at compile time.
* You must declare the data type of a variable.
* Type checking happens before program execution.
* Changing a variable's type is generally not allowed without explicit conversion.
Examples: C, C++, Java, Go.

2. Dynamically Typed Language:
A language in which the variable's data type is determined at runtime.
* You don't need to declare the data type explicitly.
* The type is determined automatically based on the assigned value.
* A variable can hold different data types during execution.
Examples: JavaScript, Python, Ruby, PHP
*/
// 5. JS is dynamically typed.