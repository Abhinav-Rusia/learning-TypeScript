//*  Objects

// an object in TS is a structured data type that represents a collection of properties, each with a key and a associated value. the properties of an object can have specific types, and the object itself can have a specific type as well, often defined using an interface or type alias.

const car : { type : string, model : string, year : number} = {
    type : "sedan",
    model : "Toyota",
    year : 2022
}

// console.log(`type : ${car.type}, model :  ${car.model}, makeYear : ${car.year}`);


//------------------------------

function printUser(): {name : string, age : number, location : string}   
{
    return{
        name : "Abhinav",
        age : 26,
        location : "Delhi"
    }
} 

// const user = printUser()
// console.log(user);


//-----------------------------

//* Type Aliases
// A type alias is a way to create a new name for an existing type. it allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name.

// type aliases are defined using the //* type keyword
// followed by the name of the alias , an equal sign(=), and the type it refers to

//? for ex- 

// type Mystring = string;
// let myName : Mystring = "Abhinav"
// console.log(myName);


type User = {
    name : string
    age : number
    location : string
}

const printUserInfo = (user : User) =>{
    return (`name : ${user.name}, age : ${user.age}, location : ${user.location}`);
}

const res = printUserInfo({
    name : "Abhinav",
    age : 26,
    location : "Indore"
}) 
// console.log(res);


//-------------


//* Optional Properties

// you can make a certain property optional in an object type by adding a question mark(?) after the property name.

type Person = {
    name : string
    age : number
    email? : string
}

function printPerson(person : Person) {
    return (`name : ${person.name}, age : ${person.age}`);
}

const Person1 = printPerson({
    name : "Abhinav",
    age : 26
})

// console.log(Person1);

//it will not throw an error because email is optional but if we try to access it it will print undefined.

//* Intersection type

type admin = {
    name : string
    privileges : string[]
}

type employee = {
    name : string
    startDate : Date
}

type elevatedEmployee = admin & employee

const employee1 : elevatedEmployee ={
    name : "Abhinav",
    privileges : ["create-server"],
    startDate : new Date()
}

// console.log(employee1);

// this will print all the properties of admin and employee

//* 2nd example of intersection type

type user =  {
    first : string
    last : string
    age : number
}

type details =  {
    age : number
    location : string
}

type userAndDetails = user & details

const user1 : userAndDetails = {
    first : "Abhinav",
    last : "Rusia",
    age : 26,
    location : "Indore"
}
// console.log(user1);


