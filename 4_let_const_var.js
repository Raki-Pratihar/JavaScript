// 4.let, var & const

//1. Goal of learning javaScript.

/* We shuld allways learn Javascript to build something */

//2. Variable and constant.
user1="ram"
console.log(user1);

const user2="sham"
console.log(user2);

let user3= "jadu"
console.log(user3);
user3="laxman"
console.log(user3);

//3. Reserved keyword in javascript.
/* Some words are reserved for javascript syentax thats call reserved keywords  */

//4. Run file in terminal.
/* node file path */

//5. Comment in JavaScript.
/* comment are those line in code that can read by developers but don't exicute in code
   "//" is for singel line commit & "/*../" for multipal line comment.
*/

//6. console.table([...,...])
let numder1=50;
let number2=60;
let nunber3=70;
console.table([numder1, number2,nunber3]);

//7. Let and var.
let letNumber=100;
var varNumber=200;
var varNumder=300;
console.log(letNumber);
console.log(varNumber);

//8. Scope.
{
    let a=10;
    console.log(a);
    
}
{
    let a=20;
    console.log(a);
}
console.log(a);

//9. You can declear a variable without value and assign value later 
let name;
let email=undefined;