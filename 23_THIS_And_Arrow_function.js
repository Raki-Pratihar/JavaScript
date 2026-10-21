// 2️⃣3️⃣ THIS And Arrow Function in JavaScript

// 1. THIS in object  
const user = {
    username: "rocky",
    price: 999,
    welcomeMassage: function () {
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }
}
user.welcomeMassage()
user.username = "rony"
user.welcomeMassage()
console.log(this);

//⭐ The global object in browser is window

// 2. THIS inside a function 
const thisFunction = function () {
    let username = "rocky"
    console.log(this.username); // 'this' is global
    console.log(this);
}
thisFunction()

// 3. Create arrow function
const normalFunction = function () {
    let username = "rocky"
    console.log(this.username);
    console.log(this);
}
normalFunction()

const arrowFunction = () => {
    let username = "rocky"
    console.log(this.username);
    console.log(this);
}

// 4. Arroe function with parameter
const  addTwoNum=(num1,num2)=>{
    return num1+num2
}
console.log(addTwoNum(3,4));

// 5. Implicit return
const implicitReturn=(num1,num2)=> num1+num2
console.log(implicitReturn(3,4));
//⭐ also -- const implicitReturn = (num1 , num2) => (num1 +num2) 

// Implicit return of object
const implicitObject=()=>({username:"rocky"})
console.log(implicitObject());