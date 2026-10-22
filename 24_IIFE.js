// 2️⃣4️⃣ Immediately Invoked Function Expression (IIFE)

// 1. IIFE
/*An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that executes immediately after it is defined. It is commonly used to create a private scope and prevent variables from polluting the global scope. */

// Normal
function DB1(){
    console.log(`Database 1 connected`);
}
DB1();
// Using IIFE
(function DB2(){
    console.log(`Database 2 connected`);
})();   //⭐We always have to use ';' to execute more than 1 iife 

(function DB3() {
    console.log(`Database 3 connected`);
})();

// 2. IIFE with arrow function
(()=>{
    console.log("this is an arrow function ");
})();  // without parameter 

((name)=>{
    console.log(`this is an arrow function created by ${name}`)
})("rocky");  // with parameter

// 3. Named IIFE and Unnamed IIFE
(function namedIIFE(){
    console.log(`this is a named IIFE`);
})()  // Named IIFE

(()=>{
    console.log(`this is an unnamed IIFE`);
    
})  // Unnamed IIFE