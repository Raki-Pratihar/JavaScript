// 2️⃣4️⃣ Code Execution Steps & Call Stack in JS

/*
 1. JavaScript Code Execution

JavaScript executes code using an Execution Context. When JavaScript code runs, it creates an execution context and processes the code in two phases:

* Memory Creation Phase: Allocates memory for variables and functions.
* Execution Phase: Executes code line by line and assigns values to variables.

Types of Execution Context

* Global Execution Context (GEC)
* Function Execution Context (FEC)
* Eval Execution Context

 2. JavaScript Call Stack

The Call Stack is a mechanism that tracks function execution using the LIFO (Last In, First Out) principle.

How It Works

* The Global Execution Context is pushed onto the stack.
* When a function is called, its execution context is pushed onto the stack.
* When the function finishes, its context is popped from the stack.
* Execution continues until the stack becomes empty.

Example

```javascript
function first() {
    second();
}

function second() {
    console.log("Hello World");
}

first();
```

Execution Order:

1. Global Execution Context is created.
2. `first()` is called and pushed onto the stack.
3. `second()` is called and pushed onto the stack.
4. `second()` finishes and is popped.
5. `first()` finishes and is popped.
6. The Global Execution Context remains until the script finishes.

Key Concept: The Call Stack manages function execution, while Execution Contexts provide the environment in which JavaScript code run

JavaScript Call Stack
=====================

Step 1: Global Execution Context
┌──────────────────────┐
│         GEC          │
└──────────────────────┘

Step 2: first() is called
┌──────────────────────┐
│       first()        │
├──────────────────────┤
│         GEC          │
└──────────────────────┘

Step 3: second() is called
┌──────────────────────┐
│       second()       │  <-- TOP
├──────────────────────┤
│       first()        │
├──────────────────────┤
│         GEC          │
└──────────────────────┘

Step 4: second() finishes
┌──────────────────────┐
│       first()        │  <-- TOP
├──────────────────────┤
│         GEC          │
└──────────────────────┘

Step 5: first() finishes
┌──────────────────────┐
│         GEC          │  <-- TOP
└──────────────────────┘

Step 6: Script finishes
┌──────────────────────┐
│     Stack Empty      │
└──────────────────────┘
*/