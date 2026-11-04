// 1️⃣3️⃣ Date And Time In JavaScript

// 1. Date object in javascript
/*The Date object in JavaScript is used to work with dates and times. It allows you to create, access, modify, and format dates.

♦️ Remember:
* Date is a built-in JavaScript object.
* new Date() creates a Date object.
* Date.now() returns a number, not an object.
* JavaScript Date objects represent time as milliseconds since January 1, 1970 UTC.

🌟 Remember: JavaScript months start from 0, not 1.
* January = 0
* February = 1
* ...
* November = 10
* December = 11

*/

// 2. Create date
let myDate = new Date()
console.log(myDate);  //--> 2026-11-02T10:51:33.290Z

// 3. Using toString()
console.log(myDate.toString());  //--> Mon Nov 02 2026 16:21:33 GMT+0530 (India Standard Time)

// 4. toDateString
console.log(myDate.toDateString());  //--> Mon Nov 02 2026

// 5. toISOString
console.log(myDate.toISOString());  //--> 2026-11-02T10:51:33.290Z

// 6. toJSPN
console.log(myDate.toJSON());  //--> 2026-11-02T10:51:33.290Z

// 7. toLocaleDateString
console.log(myDate.toLocaleDateString());  //--> 2/11/2026

// 8. toLocaleString
console.log(myDate.toLocaleString());  //--> 2/11/2026, 4:21:33 pm

// 9. toLocaleTimeString
console.log(myDate.toLocaleTimeString());  //--> 4:21:33 pm

// 10. toTimeString
console.log(myDate.toTimeString());  //--> 16:21:33 GMT+0530 (India Standard Time)

// 11. typeof Date
console.log(typeof myDate);  //--> object

// 12. Declare a specific date
let myCreatedDate= new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

// 13. Declare a specific date and time
let myDateTime= new Date(2026,0,25,10,30,10)
/*                         |  |  |  |  |  |
                           Y  M  D  h  m  s  */  
console.log(myDateTime.toLocaleString());

// 14. Dates with other formates
    // i. yy-mm-dd
    let otherDate1=new Date("2026-01-15")
    console.log(otherDate1.toDateString());
    
    // ii. mm-dd-yy
    let otherDate2=new Date("01-15-2026")
    console.log(otherDate2.toDateString);

// 15. Time stamp
let myTimeStamp=Date.now() 

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

// 16. Time stamp in seconds
console.log(Math.floor(Date.now()/1000));

// 17. Some other methods of date
let newDate=new Date()

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getMonth());
console.log(newDate.getSeconds());
console.log(newDate.getTime());
console.log(newDate.getTimezoneOffset());

// 18. Customise toLocaleString
newDate.toLocaleString('default',{
    weekday:"long"  // Monday instead mon
})