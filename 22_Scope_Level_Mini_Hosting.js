// 2️⃣2️⃣ Scope Level And Mini Hosting In JavaScript

// 1. Nested scope in function
function one() {
    const username = "rocky"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); --> error (website is not defined in global scopde)
    
    two() // after coment out this nothing would print
}
one()
// ⭐ Child can use parent's variable but parent can't use child's variable.(closer)

// 2. Nested scope in if-else
if (true){
    const username="rocky"
    if(username==="rocky"){
        const website=" youtube"
        console.log(username+website);
    }
    //console.log(website); -->error (not defined in global scipe)
}    
//console.log(username); --> error (not defined in global scope)

// 3. Hosting
console.log(addone(5));
function addone(num){
    return num+1
}
addone(5)
console.log(addone(5));

//console.log(addTwo(5)); --> error [can't access before initialozation]
const addTwo=function(num){
    return num+2
}
addTwo(5)
console.log(addTwo(5));