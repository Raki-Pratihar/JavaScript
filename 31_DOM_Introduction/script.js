// 31. DOM Introduction

// 1️⃣ window object in javascript
/* The window object in JavaScript represents the browser window. It is the global object in a browser environment.

It provides access to browser-related features such as alerts, timers, browser history, and the DOM.

♦️Important points:
1. window is the global object in browsers.
2. It contains objects like document, location, and history.
3. Global variables declared with var become properties of window in classic scripts.
4. You can often omit window when accessing its methods.

window.alert("Hello");  |---> these two are eqeivalent
alert("Hello");         |
*/
console.log(window);


// 2️⃣ document object in JavaScript 
/* The document object in JavaScript represents the HTML document (webpage) loaded in the browser.

It is part of the DOM (Document Object Model) and allows JavaScript to access, modify, add, or delete HTML elements and CSS styles.

♦️Important points
1. document represents the webpage.
2. It provides access to HTML elements.
3. It allows you to modify HTML content and CSS styles.
4. It is the entry point to the DOM.*/
console.log(window.document);
console.log(document);


// 3️⃣ Tree structure of DOM
/*                     document
                       |
                      html
                    /      \
                  head      body
                  /          |
               title        div
                |          /   \
           My Website    h1     p
                          |      |
                     Hello!   Welcome 
*/