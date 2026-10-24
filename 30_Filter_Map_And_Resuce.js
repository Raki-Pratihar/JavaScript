// 3️⃣0️⃣ Filter , map and Reduce

// 1. Return value from forEach
const coding = ["js", "py", "cpp"]
const returnForEach = coding.forEach((item) => {
    return item
})
console.log(returnForEach); // undefined (forEach method don't return values)

// 2. filter method
const myNum = [1, 2, 3, 4, 5]
const newNum1 = myNum.filter((num) => num > 2)
const newNum2 = myNum.filter((num) => {
    return num > 4
})
console.log(newNum1);
console.log(newNum2); // can return items with conditions

const books = [
    { bookname: "Atomic", genre: "Self-help", edition: 1 },
    { bookname: "Rich Dad", genre: "Finance", edition: 2 },
    { bookname: "Deep Work", genre: "Productivity", edition: 1 },
    { bookname: "Ikigai", genre: "Self-help", edition: 3 },
    { bookname: "Psych", genre: "Psychology", edition: 2 },
    { bookname: "Zero", genre: "Finance", edition: 1 },
    { bookname: "1984", genre: "Fiction", edition: 3 },
    { bookname: "Sapiens", genre: "History", edition: 2 },
    { bookname: "Dune", genre: "Fiction", edition: 1 },
    { bookname: "Think", genre: "Psychology", edition: 3 }
];

const fictionBooks = books.filter((bk) => bk.genre === "Fiction")
console.log(fictionBooks);

const firstEdtnBooks = books.filter((bk) => bk.edition === 1)
console.log(firstEdtnBooks);

const favBook = books.filter((bk) => {
    return bk.genre === "Fiction" && bk.edition === 1
})
console.log(favBook);

// 3. map method
const myNumbers = [1, 2, 3, 4, 5]

const newNumbers = myNumbers.map((num) => num + 10)
console.log(newNumbers);

// 4. Chaining
const chainNumbers = myNumbers.map((num) => num * 10)
    .map((num) => num + 5)
    .filter((num) => num > 30)
console.log(chainNumbers);

// 5. reduce method
/* The reduce() method in JavaScript executes a callback function on each array element and reduces the array to a single value, such as a number, string, or object.

const arr = [10, 20, 30];
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); --> 60

🌟 acc = Accumulator that stores the result.
🌟 curr: Current array element.
🌟 0: Initial value of the accumulator.
*/

const rdcNums = [1, 2, 3]
const rdcTotal = rdcNums.reduce((acc, curr) => {
    console.log(`acc:${acc} and curr ${curr}`);
    const newAcc = acc + curr
    console.log("new acc :", newAcc);
    return newAcc
}, 0)
console.log("grand total is", rdcTotal);

// 6. reduce method on array having object inside
const shopingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: " gen ai course",
        price: 10999
    },
    {
        itemName: "ML course",
        price: 29999
    }
]
const totalPrice = shopingCart.reduce((acc, item) => acc + item.price, 0)
console.log("total price to pay", totalPrice);