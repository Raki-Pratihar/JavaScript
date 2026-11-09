// 1️⃣7️⃣ Object Part 2


// 1️⃣ Create object using object constructure 
const appUser= new Object()

console.log(appUser);  //--> empty object 

appUser.id="123abc"
appUser.name="rocky"
appUser.isLoggedIn=false

console.log(appUser);


// 2️⃣ Nested object (Object inside object)
const appUser2={
    email:"rocky@gmail.com",
    identity:{
        userName:{
            firstName:"rocky",
            lastName:"pratihar"
        },
        age:19,
        gender:"male"
    },
    logInId:"420leKja"
}

console.log(appUser2);
console.log(appUser2.identity);
console.log(appUser2.identity.userName);
console.log(appUser2.identity.userName.firstName);


// 3️⃣ Combine Objects Object.assign()
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//  const returnTerget = Object.assign(target , source )
    const obj3=Object.assign({},obj1,obj2)  // {} optional , an empty object used as target and make other object source.

console.log(obj3);


// 4️⃣ Combien objects using spread operator
const obj4={...obj1,...obj2}
console.log(obj4);


// 5️⃣ Array of objects cames from DataBase
const users=[
    {
        id:"001",
        email:"ram@gmail.com"
    },
    {
        id:"002",
        email:"sham@gmail.com"
    },
    {
        id:"003",
        email:"raju@gmail.com"
    },
    {
        id:"004",
        email:"piter@gmail.com"
    },
]

console.log(users[0].email);
console.log(users[1].id);


// 6️⃣ Make array with keys and values of an object
const user = {
    name:"rocky",
    email:"rocky@gmail.com",
    isLoggedIn:true
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


// 7️⃣ Ensure particuler key in an object
console.log(user.hasOwnProperty('isLoggedIn'));  //--> true
console.log(user.hasOwnProperty('age'));  //--> false    