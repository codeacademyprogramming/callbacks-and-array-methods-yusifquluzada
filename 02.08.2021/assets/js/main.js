"use strict";

/*

Concat

*/

// function customConcat(...value) {
//     const numArr = [];
//     for (let i = 0; i < value.length; i++) {
//         numArr.push(value[i]);
//     }
//     return numArr.flat(Infinity);
// }

// const result = customConcat(1, 2, 3, [4, 5, 6]);
// console.log(result);

/*
------------------------------------------------------------------------------------------------------------------------------------
*/


/*

Reverse

*/

// function customReverse(arr = []) {
//     const result = [];
//     for (let i = arr.length; i > 0; i--) {
//         result.push(arr[i - 1]);
//     }
//     return result;
// }

// console.log(customReverse([4, 5, 6]));


/*
------------------------------------------------------------------------------------------------------------------------------------
*/



/*

Filter

*/

// console.log("Custom Filter");

// function customFilter(arr = [], cb) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i], i, arr)) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// const filterThatBiggerThanTen = (value, index, array) => value > 10;


// console.log(customFilter([1, 2, 3, 4, 5, 88, 112], filterThatBiggerThanTen));


/*
------------------------------------------------------------------------------------------------------------------------------------
*/



/*

forEach

*/

// console.log("Custom ForEach");


// function customForEach(arr = [], cb) {
//     for (let i = 0; i < arr.length; i++) {
//         logger(arr[i]);
//     }
// }

// const logger = (value, index, array) => console.log(value);


// customForEach([1, 2, 3, 4, 5, 88, 112], logger);

/*
------------------------------------------------------------------------------------------------------------------------------------
*/



/*

Some

*/

// console.log("Custom Some");

// function customSome(arr = [], cb) {
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i])) {
//             return true;
//         }
//     }
//     return false;
// }


// const isAllBiggerThanFive = (value) => value > 5;

// console.log(customSome([1, 2, 3, 4, 6], isAllBiggerThanFive));

/*
------------------------------------------------------------------------------------------------------------------------------------
*/



/*

Every

*/

// console.log("Custom Every");

// function customEvery(arr = [], cb) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!cb(arr[i])) {
//             return false;
//         }
//     }
//     return true;
// }


// const isAllBiggerThanFive = (value) => value > 5;

// console.log(customEvery([8, 5, 6, 7], isAllBiggerThanFive));

/*
------------------------------------------------------------------------------------------------------------------------------------
*/


