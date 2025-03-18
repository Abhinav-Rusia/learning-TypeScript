

//* Access Modifiers
// in TS, we can use access modifiers to control the visibility of class members(properties and methods).Access modifiers determine the ways in which class members can be accessed from outside the class.

//* Public Access Modifier
// The public access modifier is the default access modifier in TS. It allows class members to be accessed from anywhere, both inside and outside the class.

class person{
    public first : string;
    public last : string
    constructor(first : string, last : string ){
        this.first = first;
        this.last = last
    }
}

const p1 = new person("John", "Doe") 
// console.log(p1);
// console.log(p1.first);
// console.log(p1.last);


//* Private Access Modifier
// The private access modifier restricts class members to be accessed only within the class. It prevents class members from being accessed from outside the class.

class man {
    private firstName : string;
    public lastName : string;
    constructor(firstName : string, lastName : string){
        this.firstName = firstName; 
        this.lastName =lastName
    }

    getFirstName(){
        return `${this.firstName}`
    }
}


const m1 = new man("John","Doe")
// console.log(m1.getFirstName()); // this will work fine because getFirstName is public and can be accessed outside the class

// console.log(m1.firstName); this will throw an error because firstName is private and cannot be accessed outside the class.


//* Protected Access Modifier
// The protected access modifier allows class members to be accessed within the class and its subclasses. It restricts class members from being accessed from outside the class or its subclasses.

class animal {
    protected name : string;
    public breed : string;
    constructor(name : string, breed : string){
        this.name = name;
        this.breed = breed;
    }
}

class dog extends animal {
    constructor(name : string, breed : string){
        super(name, breed);
    }
}

const a1 = new animal("goofy", "retriever")
// console.log(a1);
// console.log(a1.breed);  // this will work fine because breed is public and can be accessed outside the class
// console.log(a1.name); // this will throw an error because name is protected and cannot be accessed outside the class


const d1 = new dog("Fido", "bulldog")
// console.log(d1);
// console.log(d1.breed); // this will work fine because breed is public and can be accessed outside the class
// console.log(d1.name); // this will throw an error because name is protected and cannot be accessed outside the class



//* Getter and Setter

class myClass{
    private _myProperty : number = 0

    get myProperty(): number {
        return this._myProperty
    }

    set myProperty(value : number){
        this._myProperty = value
    }
}

const obj = new myClass()
// console.log(`current value : ${obj.myProperty}`);

obj.myProperty = 5
// console.log(`current value : ${obj.myProperty}`);

obj.myProperty = 10
// console.log(`current value : ${obj.myProperty}`);