// function holler() {
//     console.log('HEY YOU');
// }

// const whisper = function() {
//     console.log('I have a secret');
// }

// function add(x,y) {
//     return x + y;
// }

// function subract(x,y) {
//     return x - y;
// }

// function multiply(x,y) {
//     return x * y;
// }

// function divide(x,y) {
//     return x / y;
// }

// const mathFuncs = [add, subtract, multiply, divide];
// // call a specific function like mathFuncs[3](4,5) = 0.8;
// // the most important thing to take away is that we can pass a function as an argument;

// function doMath(a,b,mathFunc) {
//     return mathFunc(a,b)
// };

//callbacks review

// function doAllMath(a,b,mathFuncs) {
//     for (let func of mathFuncs) {
//         console.log(func(a,b));
//     }
// };

//build our own forEach 

// let colors = ['red','green','blue','black'];

// function myForEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i);
//     }
// };

// myForEach(colors, function(color, i) {
//     console.log(color.toUpperCase, 'at index of: ', i);
// });


// map array method:

// map is a very useful array method:
// const numbers = [21, 37, 64, 99, 142];

// const negatives = numbers.map(function(num) {
//     return num * -1;
// });

// const doubles = numbers.map(function(num) {
//     return num * 2;
// });

// const todos = [
//     {
//         id: 1,
//         text: 'walk the dog',
//         priority: 'high',
//     },
//     {
//         id: 2,
//         text: 'feed the dog',
//         priority: 'medium',
//     },

// ];

// // const todoText = todos.map(function(todo) {
// //     return todo.text;
// // });

// // own version of Map

// function myMap(arr, callback) {
//     const mappedArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         mappedArr.push(callback(arr[i], i, arr));
//     }
//     return mappedArr;
// }

// const priorities = myMap(todos, function(todo) {
//     return todo.priority;
// })


// const numbers = [15, 25, 45, 33, 12, 66, 78, 99, 100]

// const greaterThanFifteen = numbers.filter(function(number) {
//     return number > 15;
// });

// function myFilter(arr, callback) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//        if (callback(arr[i], i, arr)) {
//            filteredArr.push(arr[i]);
//        }
//     }
//     return filteredArr;
// }

const nums = [2, 4, 6, 8, 10]

nums.forEach(num => {
    console.log(num ** 2);
});

// perform a specific task 'for each' element in the nums array.

nums.forEach(num => {
    console.log(num - 2);
});

nums.forEach((num, index) => {
    console.log(num, index);
});

//mutate the elements in an array and create a new array
// mappedOne => returns an array with each element of nums raised to power of 3

let mappedOne = nums.map(num => num ** 3);
console.log(mappedOne);

// mappedTwo will return a new array with the strings at each index
//sliced from index 0 to 3, non-inclusive. Grey will be 'gre'. 

const colors = ['grey', 'black', 'orange']
let mappedTwo = colors.map(color => color.split('').slice(0, 3).join(''));
console.log(mappedTwo);

//the fin() method below will return the value of the first element that's found
// which satisfies the provided condition, in this case it will be 10. Both
// of the examples below will return the same value, they're just written two
//different ways with the second method being the ES2015 preferred way of writing


let foundVar = nums.find(function (el) {
    return el % 5 === 0;
});
console.log(foundVar);

let otherFoundVar = nums.find(el => el % 5 === 0);
console.log(otherFoundVar);

// let's work with filter() now

let moreNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredNums = moreNums.filter(el => el % 2 == 0)
console.log(filteredNums);

//filteredNums returns an array of even numbers only

let moreFilteredNums = moreNums.filter(el => el + 1 === 7 || el + 1 == 8);
console.log(moreFilteredNums);

//moreFilteredNums will return an array of elements where el+1 === 7 or el+1 === 8 [6,7]

//what is the purpose in passing the array into the filter as a parameter?
let mostFilteredNums = moreNums.filter(el => el % 2 !== 0);
console.log(moreNums + ' --> ' + mostFilteredNums + ' after filtering');


let everyNum = moreNums.every(num => num % 2 == 0);
console.log(everyNum)
// this returns false as not all of the numbers in the moreNums array are even numbers

//let's work with some()
let someNums = nums.some(num => num === 4);
console.log(someNums);
//if none of the items in the some() method are true, the entire result is false and the return is false. 

//On to reduce()
let reducedNums = nums.reduce((acc, next) => {
    return acc + next;
}, 0);

console.log(reducedNums);
//returns 30, it adds all of the numbers in the array and returns a single value

let reducedMult = moreNums.reduce((mult, next) => {
    return mult * next;
}, 1);

console.log(reducedMult);
// reduce is a really good method for numeric computation and concatenation
// on all elements of the array.


//code wars problem 
function countPositivesSumNegatives(input) {
    let positives = input.filter(num => num > 0);
    let negatives = input.filter(n => n < 0);
    let negElement = negatives.reduce((negacc, negnext) => {
      return negacc + negnext;
    }, 0);
  
    
  
    return [positives.length, negElement]; 
};

//code wars problem: 
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.
// the solution below works for all test cases except for one. Upon further review, it appears to be
// a broken kata and this can't be completed due to the error on the page. 

function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        return arr.find(num => num !== arr[i]);
    }
}



