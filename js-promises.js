// //"I Promise a Result!"
// JavaScript Promises were created to make asynchronous JavaScript easier to use.

// A Promise object represents the completion or failure of an asynchronous operation.

// A Promise can be in one of three exclusive states:

// pending	operation started (not finished)
// rejected	operation failed
// fulfilled	operation completed
// Why Promises?
// Many callbacks become hard to read and hard to maintain.

// Example
// step1(function(r1) {
//   step2(r1, function(r2) {
//     step3(r2, function(r3) {
//       console.log(r3);
//     });
//   });
// });
// The style above is often called callback hell.

// Promises let you write the same logic in a cleaner way.

// A Promise acts as a placeholder for a value that will be available at some point in the future, allowing you to handle asynchronous code in a cleaner way than traditional callbacks.

// Promise States
// A promise can be in one of three exclusive states:

// Pending:
// The initial state; the operation has started but is neither fulfilled nor rejected.

// Fulfilled:
// The operation completed successfully, and a value is available.

// Rejected:
// The operation failed, and a reason (error) is available.

// A promise is considered settled if it is fulfilled or rejected (not pending).

// Creating a Promise
// Syntax
// let myPromise = new Promise(function(resolve, reject) {

// // Code that may take some time

//   resolve(value); // when successful
//   reject(value);  // when error
// });

// The promise constructor takes a function with two parameters.

// Parameter	Description
// resolve	function to run if finishes successfully
// reject	function to run if finishes with an error
// Promises How To
// Here is how to use a Promise:

// Example
// myPromise.then(
//   function(value) { /* code if success */ },
//   function(value) { /* code if error */ }
// );
// then() takes two arguments, one callback function for success and another for failure.

// Both are optional, so you can add a callback function for success or failure only.

// Examples
// // Create a Promise Object
// let myPromise = new Promise(function(resolve, reject) {
//   ok = true;

// // Code that may take some time

//   if (ok) {
//     resolve("OK");
//   } else {
//     reject("Error");
//   }
// });

// // Using then() to display the result
// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(value) {myDisplayer(value);}
// );

// // Create a Promise Object
// let myPromise = new Promise(function(resolve, reject) {
//   ok = false;

// // Code that may take some time

//   if (ok) {
//     resolve("OK");
//   } else {
//     reject("Error");
//   }
// });

// // Using then() to display the result
// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(value) {myDisplayer(value);}
// );

// A promise represents a value that will be available later.

// A promise is a container for a future result.

// The result can be a value or an error.

// REMOVE ADS

// The JavaScript Promise Object
// A Promise contains both the producing code and calls to the consuming code:

// Promise Syntax
// let myPromise = new Promise(function(resolve, reject) {

// // "Producing Code" (May take some time)

//   resolve(value); // when successful
//   reject(value);  // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function(value) { /* code if success */ },
//   function(value) { /* code if error */ }
// );
// When the producing code obtains the result, it should call one of the two callbacks:

// When	Call
// Success	resolve(value)
// Error	reject(value)
// A promise can resolve or reject only once.

// Promise Object Properties
// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

// myPromise.state	myPromise.result
// "pending"	undefined
// "fulfilled"	a result value
// "rejected"	an error object
// You cannot access the Promise properties state and result.

// You must use a Promise method to handle promises.

// Core Methods and Usage
// Promises are consumed using methods attached to the promise object:

// .then(onFulfilled, onRejected):
// This method attaches handlers for both the fulfillment and rejection cases. It returns a new promise, which enables method chaining.

// .catch(onRejected):
// This is a shorthand for .then(null, onRejected) and is typically used to handle errors at the end of a promise chain.

// .finally(onFinally):
// This handler is called when the promise is settled (either fulfilled or rejected), regardless of the outcome. It's useful for cleanup operations.

// Using then and catch
// You do not read a promise result immediately.

// You attach code that runs when the promise finishes.

// then() runs when a promise is fulfilled.

// catch() runs when a promise is rejected.

// Examples
// let promise = Promise.resolve("OK");

// promise
// .then(function(value) {
//   console.log(value);
// })
// .catch(function(value) {
//   myDisplayer(value);
// });

// let promise = Promise.reject("Error");

// promise
// .then(function(value) {
//   console.log(value);
// })
// .catch(function(value) {
//   myDisplayer(value);
// });

// When a promise is fulfilled, the then() function runs.

// Returning a Promise
// Promises become powerful when you return a promise from then().

// This creates a clean chain.

// Example
// // Three functions to run in steps
// function step1() {
//   return Promise.resolve("A");
// }
// function step2(value) {
//   return Promise.resolve(value + "B");
// }
// function step3(value) {
//   return Promise.resolve(value + "C");
// }

// // Run the three functions in steps
// step1()
// .then(function(value) {
//   return step2(value);
// })
// .then(function(value) {
//   return step3(value);
// })
// .then(function(value) {
//   myDisplayer(value);
// });

// The chain runs step by step as each promise finishes.

// Where to Put catch
// You can handle errors at the end of the chain.

// A single catch() can catch errors from any step above.

// Example
// step1()
// .then(function(value) {
//   return step2(value);
// })
// .then(function(value) {
//   return step3(value);
// })
// .catch(function(error) {
//   console.log(error);
// });
// This is one reason promises are easier than many nested callbacks.

// Common Beginner Mistakes
// Forgetting to return a promise breaks the chain.

// Example
// step1()
// .then(function(value) {
//   step2(value);
// })
// .then(function(value) {
//   console.log(value);
// });
// The second then() runs too early.

// It runs because nothing was returned from the first then().

// If you start an async step in then(), return it.

// Promises and Real JavaScript
// Many web APIs return promises.

// fetch() is a common example.

// Example
// fetch("data.json")
// .then(function(response) {
//   return response.json();
// })
// .then(function(data) {
//   console.log(data);
// })
// .catch(function(error) {
//   console.log(error);
// });
// This is promise-based async programming.

// REMOVE ADS

// Promise API Static Methods
// JavaScript also provides static methods on the Promise object for handling multiple promises at once:

// Promise.all(iterable):
// Fulfills when all promises in the iterable are fulfilled; rejects immediately if any promise rejects.

// Promise.allSettled(iterable):
// Waits for all promises to settle (either fulfill or reject) and returns an array of their results.

// Promise.race(iterable):
// Settles (fulfills or rejects) as soon as any of the promises in the iterable settles.

// Promise.any(iterable):
// Fulfills as soon as any promise in the iterable fulfills; rejects if all promises reject.

// Learn More:
// Full Promises Reference

// JavaScript Promise Examples
// To demonstrate the use of promises, we will use the callback examples from the previous chapter:

// Waiting for a Timeout
// Waiting for a File
// Waiting for a Timeout
// Example Using Callback
// setTimeout(function() { myFunction("I love You !!!"); }, 3000);

// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }

// Example Using Promise
let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});

Waiting for a file
Example using Callback
function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(req.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer);

// Example using Promise
// let myPromise = new Promise(function(myResolve, myReject) {
//   let req = new XMLHttpRequest();
//   req.open('GET', "mycar.html");
//   req.onload = function() {
//     if (req.status == 200) {
//       myResolve(req.response);
//     } else {
//       myReject("File not Found");
//     }
//   };
//   req.send();
// });

// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );

