// 2️⃣8️⃣ While And Do-While Loop

// 1. While loop
let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

// 2. while loop on array
let whileArray = ["ironman", "spyderman", "drstrange"]
let arr = 0;
while (arr < whileArray.length) {
    console.log(`no ${arr + 1} hero is ${whileArray[arr]}`);
    arr = arr + 1
}

// 3. do-while loop
let score = 11
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);
//
//⭐ do-while execute at least one time.