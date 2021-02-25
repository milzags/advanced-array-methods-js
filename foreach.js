// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
function doubleValues(array) {
    let doubledArray = [];
    array.forEach(el => {
        doubledArray.push(el*2);
    });
    return doubledArray;
};

// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
function onlyEvenValues(array) {
    let evensArray = [];
    array.forEach(el => {
        if (el % 2 == 0) {
            evensArray.push(el);
        };
    });
    return evensArray;
};

// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
function showFirstAndLast(array) {
    let newStrings = []
    array.forEach(el => {
        newStrings.push(el[0]+el[el.length -1])
    })
    return newStrings;
}

// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object
function addKeyAndValue(objArr,key,val) {
    let newObjArr = [];
    objArr.forEach(obj => {
        newObjArr.push([{ ...obj, key:val }]);
    });
    return newObjArr
}

// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
function vowelCount(string) {
    let counter = {};
    let str = Array.from(string.toLowerCase());
    let vowels = 'aeiou';

    str.forEach(letter => {
        if (!counter[letter] && vowels.includes(letter)) {
            counter[letter] = 1
        } else if (counter[letter] && vowels.includes(letter)){
            counter[letter] += 1
        }
    })

    return counter;
}

// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
function doubleValuesWithMap(array) {
    let newArray = [];
    array.map(val => {
        newArray.push(val*2);
    });

    return newArray;
}

// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
function valTimesIndex(array) {
    let newArr = [];
    array.map((el,i) => {
        newArr.push(el*i);
    });

    return newArr;
}

// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
function extractKey(objArr, key) {
    let newArr = [];
    objArr.map(obj => {
        newArr.push(obj[key]);
    });
    return newArr;
}

// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.
function extractFullName(objArr) {
    return objArr.map(obj => (obj.first + ' ' + obj.last))
}

// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
function filterByValue(arrObjs, key) {
    let newArr =[];
    arrObjs.filter(obj => {
        if (obj[key]) {
            newArr.push(obj);
        }
    })
    return newArr;
}

// Write a function called find which accepts an array and a value and returns the first element in the array that has tthat has the same value as the second parameter or undefined if the value is not found in the array.
const find = (array, value) => {
   return array.filter(item => (item === value))[0]
}

// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
const findInObj = (objArr,key,val) => {
    return objArr.filter(obj => {
        if (obj[key] == val) {
            return obj[key]
        }
    })[0]
}

// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
const removeVowels = (string) => {
    let str = string.toLowerCase().split('') //turn into an array
    let vowels = 'aeiou';
    let newStr = '';
    str.filter(st => {
        if (!(vowels.includes(st))) {
            newStr += st;
        }
    })

    return newStr;
}

// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
const doubleOddNumbers = (array) => {
    return array.filter(number => {
        return number % 2 !== 0
    }).map(val => val*2)
}

// Write a function called findUserByUsername which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

const findUserByUsername = (arrObjs, str) => {
    return arrObjs.find(obj => {
        return obj.str === str;
    });
}

// Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined.

const removeUser = (arrObjs, string) => {
    
}

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
};

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!


// the only solution that works is the recusion solution
function getSum(a,b) {
    if (a === b) return a;

    if (a < b) {
        return a + getSum(a+1, b)
    } else {
        return a + getSum(a-1,b);
    }

}



// //object literals and classes
// const book = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     },
// };

// //what if we wanted to create more than one book? We could copy the book object and change the
// // relevant information 

// const bookTwo = {
//     title: 'Book Two',
//     author: 'Jane Doe',
//     year: '2016',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     },
// };

// console.log(Object.keys(book)); // returns keys of the object passed in
// console.log(Object.values(book)); //returns values of the object pass in

// // this way there is a lot of repeated code, use classes and constructors to only write code once
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }    

// //instantiate object:
// const bookThree = new Book();
// //when you create a new object, it runs whatever is in the Book constructor.
// const bookFour = new Book('Title', 'Author', '2013')

// //summary prototype method
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`
// }

// Book.prototype.getAge = function() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} was written ${years} years ago.`
// }

// Book.prototype.revise = function(newYear) {
//     this.year = newYear;
//     this.revise = true;
// }

// console.log(bookFour.getSummary())
// console.log(bookFour.getAge())
// console.log(bookFour.revise('2015'));

// //Inheritance


// //magazine constructor 
// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);
//     this.month = month;
// }
// //to inherit prototype of books:
// Magazine.prototype = Object.create(Book.prototype);


// //instantiate Magazine Object:
// const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge() {
        return `${this.title} was written ${years} years ago.`
    }

    revise(newYear) { 
        this.year = newYear;
        this.revise = true;
    }

    static topBookStore() {
        return 'Barnes & Noble';
    }
}

//instantiate object:
const bookThree = new Book();
//when you create a new object, it runs whatever is in the Book constructor.
const bookFour = new Book('Title', 'Author', 'year')


//instantiate an object:
const bookOne = new Book('Book One', 'John', '2013')
//static methods --> method in a class that can be used without instantiating an object. The stati method can't be run on an object, it is instead run on the class. 

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title,author,year);
        this.month = month;
    }
}

const mag1 = new Magazine('Mag One', "Jeff", "2018", 'Jan');

console.log(Book.topBookStore()); //prints out B&N from above 
console.log(mag1);
console.log(mag1.getSummary());
