// 2️⃣5️⃣ Control Flow In JavaScript
 
// 1. if statement
if(true){
    console.log(`code will cxecute`);
}
if(false){
    // code will not execute
}

// 2. Comparesion Oprators
// < , > , <= , >= , == , != , === , !== 

// 3. Check Conditions with if statement
const isUserLoggedIn=true;
if(isUserLoggedIn){
    console.log(`user is logged in `);
}

// 4. if-else statement
const temperature=42;
if(temperature<50){
    console.log(`temperature is less than 50`);
}else{
    console.log(`temperatyre is grater than 50`);
}

console.log(`temperature is declared`); // it will always exicute

// 5. Scope of conditional if statement 
const score=200;
if(score>100){
    const power="fly"
    console.log(`user power: ${power}`);
}
//console.log(`user power: ${power}`); --> error(block scope)

// 6. Implicit Scope 
const balance=1000
if(balance>0) console.log(`Your balance is ${balance}`);

// else-if (for multipal conditions )
let plan=1000
if(plan<=500){
    console.log(`you have basic plan worth ${plan}`)
}else if(plan<=1000){
    console.log(`you have pro plan worth ${plan}`);
} else if(plan<=2000){
    console.log(`you have elite plan worth ${plan}`);
} else{
    console.log(`you are not subscribed yet `);
}

// 7. Logical operators 
/*
i. AND (&&)
    true && true --> true
    true && false --> false
    false && false --> false

ii. OR (||)
    true || true --> true
    true || false --> true
    false || false --> false
   
iii. NOT (!)    
    !true --> false 
    !false --> true
    
iv Nulish Coalescing (??)
    null ?? default --> default
    undefined ?? default --> default
    0 ?? 10 --> 0
*/

// 8. Use logical operator in if statement 
const haveId=true
const haveDebitCard=true
if(haveId&&haveDebitCard){
    console.log("You can buy course");
}

const haveFacebookPage=false
const haveInstagramPage=true
const haveYoutubeChanel=true
if(haveFacebookPage||haveInstagramPage||haveYoutubeChanel){
    console.log("creater can participate");
}

// Switch statement
/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/
const month=2
switch (month) {
    case 0:
        console.log("month is january ");
        break;
    case 1:
        console.log("month is feb ");
        break;
    case 2:
        console.log("month is march ");
        break;
    case 3:
        console.log("month is apr ");
        break;
    
    default:
        console.log("not a mounth");
        break;
}
/*⭐ i.break is used to stop execution
      ii. ue can also use string and other data types as case value. */

      