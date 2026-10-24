// 2️⃣7️⃣ For Loop With Break And Continue

// 1. For loop
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}
// console.log(index); --> error (index is not defined)
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// 2. For loop with condition
for (let i = 0; i <= 6; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(i);
}

// 3. Loop inside a loop
for (let i = 0; i <= 5; i++) {
    console.log(`outer loop value ${i}`)
    for (let j = 0; j <= 5; j++) {
        console.log(`inner loop value ${j} and outer loop ${i}`)
    }
}

// 4. 1 to 5 table
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 5. For loop on array
let forArray = ["ironman", "spyderman", "drstrange"]
console.log(forArray);
console.log(forArray.length);
for (let index = 0; index < forArray.length; index++) {
    console.log(forArray[index]);
}

// 6. break in loop
for (let i = 0; i <= 10; i++) {
    if (i==5) {
        console.log(`Detect 5`);
        break
    }
    console.log(`value of i is : ${i}`);
}

// 7. consinue in loop
for (let i = 0; i <= 10; i++) {
    if (i==5) {
        console.log(`Detect 5`);
        continue
    }
    console.log(`value of i is : ${i}`);
}