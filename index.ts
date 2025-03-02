//// Annotation (we can assign the type of variable to it)

// *String Annotation

let myName : string = "Abhinav"
myName = "AbhiR"

// console.log(myName);

//! Error

// myName = 123;

//----------------------

//* Number Annotation

let myAge : number = 26

// console.log(myAge);

//! Error

// myAge = "26"
// cannot assign string or boolean to number


//----------------------


// * Boolean Annotation

let isHuman : boolean = true

// console.log(isHuman);

//! Error
// isHuman = 123
// isHuman = "true"
// cannot assign number or string to boolean


//// Type Inference (it will automatically infer the type of variable based on the value assigned to it)

let myName1 = "Abhinav"
// myName1 = 25
// (cannot assign number or boolean to string when we assigned string to myName1 it is infered as string type)

let myAge1 = 26
// myAge1 = "26"
// (cannot assign string or boolean to number when we assigned number to myAge1 it is infered as number type)

let isHuman1 = true
// isHuman1 = "true"
// (cannot assign string or number to boolean when we assigned boolean to isHuman1 it is infered as boolean type)



//// Any Type(we can assign any type of variable to it but it is not recommended)

let userName: any = "Abhinav"

userName = 123

// console.log(userName);



//*function parameters annotation

function add(num : number){
    return num + 1
}
// let res = add(2)
// console.log(res);

const square = (num : number) => {
    return num * num
}

// let res = square(5)
// console.log(res);


//* function default parameters

function greet(name : string = "Anonymous"){
    console.log(`Hello ${name}`);
}

// greet()
// greet("Abhinav")

//*  function return annotation

function double1(num : number): number{
    return num * num
}

// const res = double1(5)
// console.log(res);

//arrow func

const double2 =(num : number):number => num * num

// const res = double2(5)
// console.log(res);


//* void annotation

function print(message : string){
    console.log(message);
}

print("Hello World")