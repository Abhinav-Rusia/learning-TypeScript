//* Arrays types

// array are a type of object that hold a list of values of the same type. array in typescript are typed, which means you can specify the type of values that are allowed in the array.

const carMakers: string[] = ['ford', 'toyota', 'chevy']
const numbers: number[] = [1, 2, 3, 4, 5]

// console.log(carMakers);
// console.log(numbers);

const items : string[] = []

items.push("mouse") 
// this will work fine but if i add a number or boolean it will throw an error
// items.push(1) //! Error

// console.log(items);

const nums : number[] = []

nums.push(1)
// console.log(nums);

// this will work fine but if i add a string or boolean it will throw an error
// nums.push("1") //! Error

//* Multi Dimensional Arrays(array of arrays)

const carMakers2 : string[][] = [
    ['ford', 'toyota', 'chevy'],
    ['bmw', 'mercedes', 'audi'],
]

// console.log(carMakers2);

const multiDimensional : number[][] =
 [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// console.log(multiDimensional);


