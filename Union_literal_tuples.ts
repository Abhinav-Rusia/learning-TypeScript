//* Unions
// a union type is a type that can be one of several possible types. it allows you to represent a value that can have more than one possible type.

type union = string | number 

let union1 : union = "Abhinav"
union1 = 25

// console.log(union1);

// union1 = true //! Error (because true is not a string or number)

type data = string | boolean
let data1 : data = true
data1 = "somePassword"
// console.log(data1);

//-------------------------------------

//* Literal Type
// a literal type is a type that is a specific value. it allows you to represent a value that has a specific value.

type colors = "red" | "green" | "blue"
let color : colors = "blue"

// console.log(color);
color = "red" //assignable
color = "green" //assignable

// color = "yellow"  //! Error 
// (because yellow is not a valid color in literal type)


//2nd example

type size = "small" | "medium" | "large"
let tshirtSize : size = "medium"

// console.log(tshirtSize);

// tshirtSize = "XXL" //? Error (can only assign small, medium, large)

//--------------------------------

//* Tuples - tuples are similar to arrays, but they have a fixed length and each element has a specific type and can be used to model finite sequence with known length.

let myTuple : [number, string] = [6260, "Abhinav"]
// console.log(myTuple);
// console.log(myTuple[0]);
// console.log(myTuple[1]);

//destructuring

let [number,username] = myTuple

//  console.log(number);
//  console.log(username);


//* Enums - Enums are a way to define a set of named constants that can be used to represent a fixed set of values.

enum weatherConditions {
    sunny = "sunny",
    rainy = "rainy",
    cloudy = "cloudy",
    snowy = "snowy"
}

let todayWeather : weatherConditions = weatherConditions.sunny

// console.log(todayWeather);

let tomorrowWeather : weatherConditions = weatherConditions.cloudy

// console.log(tomorrowWeather);
