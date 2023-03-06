// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // // // a) Create a test with expect statements for each of the variables provided.
// describe("greaterthan2", () => {
//   it("fibonacci sequence", () => {
//     expect(fibonacci(6)).toEqual("[1, 1, 2, 3, 5, 8]")
//     expect(fibonacci(10)).toEqual("[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]")
//   })
// })

// const fibLength1 = 6

// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// // b) Create the function that makes the test pass.

// // psuedo code
// // Input : a number that will be used in the length of a the squeance 
// // Output: a sequeace of numbers add to each other
// // Create a function that will 
// const greaterthan2 = (array) =>{
// let array = [1,1]
// for(let i=2; i<array.length ; i++) 
// array.push(array[i-1] + array[i-2])  
// } return

// Psuedocode:create a function that will count that number an fibnoccia squ.
// input: is a number
// Output : is a sqeunce that is fibnoccio

// Comments: i dont realy understnad how to make it pass , ive looked at tr few examples on line and i even got it to work on my other computer but using jest and trying to test a dynamic function is getting the best of me. 



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.


// describe("sorter", () => {
//   it("sorted from least to greatest", () => {
//     expect(sorter(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//     expect(sorter(studyMinutesWeek2)).toEqual([10, 15, 18, 20, 45, 60, 65])
//   })
// })


// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }
// // Expected output: [15, 15, 20, 30, 30, 60, 90]

// const studyMinutesWeek2 = {
//   sunday: 18,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// // Expected output: [10, 15, 18, 20, 45, 60, 65]

// // b) Create the function that makes the test pass.
// // pseudo code :input an object 
//   // Output and ordered array from least to greatest 
//   // create a function that can take and turn an Object into an array, using the Object.Values(array) .
//   // and then sorting them from least to greatest using the .sort

// const sorter = (array)=> {
// return Object.values(array).sort()
  
// }


// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// describe("accumulatedSum", () => {
//   it("add it all up ", () => {
//     expect(accumulatedSum(accountTransactions1)).toEqual([100, 83, 60, 51])
//     expect(accumulatedSum(accountTransactions2)).toEqual([250, 161, 261, 165])
//     expect(accumulatedSum(accountTransactions3)).toEqual([])
//   })
// })
// // a) Create a test with expect statements for each of the variables provided.



// const accountTransactions1 = [100, -17, -23, -9]
// // Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// // Expected output: []

// // b) Create the function that makes the test pass.

// // pseudo code: 
// // Input and array of numbers
// // Output: the total sum of all the numbers inside of a array.
// // use the .reduce method and return in a new array


// const accumulatedSum = (array)=>{
// var new_array = [];
//  array.reduce(function(a,b,i) { return new_array[i] = a+b; },0);
// return new_array

// }

