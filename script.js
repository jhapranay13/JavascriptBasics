alert('Hello');


/* Hositing. Let and const will have refernece error
/*console.log(firstLet);
let firstLet = 3;*/

/*console.log(firstConst);
const firstConst = 3;*/

// Var is hoisted to be undefined
console.log(firstVar);
var firstVar = 4;

/* Type of operator */
let javascriptIsFun = 'It\'s fun';
console.log("Type of string ", typeof javascriptIsFun);

let year = 1991;
console.log("Type of number ",typeof year);

let varNull = null;
console.log("Type of null ",typeof varNull); //
console.log("Type of undefined ",typeof varUndefined);

console.log(typeof xyz);
console.log("Null == undefined >> " + (null == undefined));
console.log("Null === undefined >> " + (null === undefined));

console.log(3 ** 5); // 3 to the power of 5;

let firstname = "Pranay";
let printout = `This is JS Literal ${firstname}`;
console.log(printout);

console.log(`It also
    supports multiline like 
    this`);

 // only + coverts numbers to string in case of concatination. all 
 // other operators covert strings to numbers

let typeCoercionToString = +'23';
console.log("Type of typeCoercionToString ", typeof typeCoercionToString);
console.log("23 - 10 * 13", '23' - '10' * '13');

// Truthy and falsy values
console.log("(Boolean(0)", Boolean(0));
console.log("(Boolean(null)", Boolean(null));
console.log("(Boolean(undefined)", Boolean(undefined));
console.log("(Boolean({})", Boolean({}));
console.log("(Boolean('')", Boolean(''));

//Arrays
let arr = [1, 2, 3, 4, 5];
let arr1 = new Array('Michel', 'Peter', 'John', 'Steve', 'Carl', 'Chris');
console.log("Arr ", arr);
console.log("Arr1 ", arr1);

arr1.push('Jay'); // adding to the end;
arr1.unshift('Samuel'); // adding to the front
console.log("Arr1 after adding to front and back", arr1);

arr1.pop(); // removing to the end;
arr1.shift(); // removing to the front
console.log("Arr1 after removing to front and back", arr1);
console.log("Arr1 index of Peter ", arr1.indexOf('Peter'));
console.log("Arr1 index of Bob ", arr1.indexOf('Bob'));

console.log("Arr1 includes of Peter ", arr1.includes('Peter'));
console.log("Arr1 includes of Bob ", arr1.includes('Bob'));

for (let element of arr1) {
    console.log("Inside Array For of loop", element);
}

for (let [i, element] of arr1.entries()) {
    console.log("Inside Array For of loop index and element using entries", i,element);
}

arr.forEach(function(elemnt, index, arr) {
    console.log("for each and call back function. index and arr is optional",
        index, elemnt
    );
});

const mapArr = arr.map(function(value, index, arr) {
    return value * 2;
});
console.log('Map function ', mapArr);

const arrFilter = arr.filter(function(value, index, arr) {
    return value % 2 == 0;
});
console.log('Filter function ', arrFilter);

const arrReduce = arr.reduce(function(accumulator, current, index, arr) {
    console.log("Inside Reduce", current);
    return accumulator + (current % 2 == 0 ? 1 : 0);
}, 0);
console.log('Reduce function ', arrReduce);

const [firstElem, secondElem, ,...other] = arr;
console.log("first Element after destructuring", firstElem);
console.log("Second element", secondElem);
console.log("rest of the element after 3rd", other);

let nestedArr = [1, 2, [3, 4, 5]];
const [one, two, [three, four, , six = -1]] = nestedArr; // Default value for 6
console.log("one", one);
console.log("two", two);
console.log("three", three);
console.log("four", four);
console.log("six", six);

let flatArr = nestedArr.flat(1); // levels to flatten
console.log("Using flat ", flatArr);
flatArr = nestedArr.flatMap((val, index, arr) => {
    return val;
});
console.log("Using flatMap ", flatArr);

let arr2 = [7, 8, 9, ...arr];
console.log("Simple Spread Operator Array", arr2);
const someXyzName = "Jonas";
const letters = [...someXyzName, '', 'S'];
console.log("Spreading String", letters);
console.log("Array Slice ", arr.slice(1, -2));
console.log("Array Splice ", arr.splice(1, 2)); // modifies array
console.log("After Splice", arr);
// sorting array pass comparator or else the values will be treted
// as string and will be lexically sorted

// Objects
const firstObj = {
    firstName: 'Pranay',
    lastName: 'Jha',
    year: 2037,
    job: 'SSE',
    friends: ['Michel', 'Peter', 'John', 'Steve'],

    calcAge: function(birthYear) {
        console.log("this pointer from firstObj", this);
        return this.year - birthYear;
    },
    set setYear(newYear) {
        this.year = newYear;
    },
    get getYear() {
        return this.year;
    },
    printName() {
        return this.firstName + " " + this.lastName;
    }
};
console.log("Object firstObj['firstName']", firstObj['firstName']);
console.log("Object firstObj.firstName", firstObj.firstName);

firstObj.company = 'XYZ';
console.log("After adding company with . notation", firstObj);
firstObj['address'] = 'pqr';
console.log("After adding address with [] notation", firstObj);

let nameKey = 'Name';
console.log("Name Key", firstObj['first' + nameKey]);
console.log("Name Key", firstObj['last' + nameKey]);
console.log("function call", firstObj.calcAge(1945));
firstObj.setYear = 2044;
console.log("After setting year", firstObj.getYear);

const hotel = {
    hname: 'Hilton',
    state: 'CA',
    city: 'fremont',
    zip: 94536,
    [`new-way-${4-3}`]: 34,
    fri: {
        open: 8,
        close: 6
    }
};
console.log("hotel object", hotel);
let {hname, state, zip} = hotel;
console.log("name", hname);
console.log('state', state);
console.log('zip', zip);
//destructuring with default values
let {hname : hotelName = '', state: hotelState, zip : hotelZip} = hotel;
console.log("name >> ", hotelName);
console.log('state >>', hotelState);
console.log('zip >>', hotelZip);

let {fri: {open : openingtTime = -1, close: closeTime = -1}} = hotel;
console.log("Nested Object Openeing time", openingtTime);
console.log("Nested Object closing time", closeTime);

//optional chaining(returns undefined if no existance) with Nullish Coalasce
console.log("Optional chaining >> ", hotel.thu?.open ?? 'NA');

// Short Circuit
console.log("short circuit '' || Jonas", '' || 'Jonas');
console.log("short circuit 0 || true", 0 || true);
console.log("short circuit 0 || 34", 0 || 34);
console.log("short circuit null || undefined", null || undefined);
console.log("short circuit 3 || 'Jonas'", 3 || 'Jonas');
console.log("short circuit 0 && 'Jonas'", 0 && 'Jonas');
console.log("short circuit 7 && 'Jonas'", 7 && 'Jonas');

// Nullish Coalasce operator
// Works with only null or undefined
let nullcoalasce1 = 0;
let nullcoalasce2 = undefined;
console.log("nullcoalasce1 ?? 10", nullcoalasce1 ?? 10);
console.log("nullcoalasce2 ?? 20",nullcoalasce2 ?? 20);

// Object key values and entries

for (const objKey of Object.keys(hotel)) {
    console.log("Object key >> ", objKey);
}

for (const objVal of Object.values(hotel)) {
    console.log("Object values >> ", objVal);
}

for (const [key, value] of Object.entries(hotel)) {
    console.log("Object Entries >> ", key, value);
}

// Set
const firstSet = new Set("Pasta");
firstSet.add("Pizza");
firstSet.add("Macroni");
firstSet.add("Roti");
firstSet.add("Pizza");
console.log("Sets", firstSet);
console.log("Set size", firstSet.size);

for (const elem of firstSet) {
    console.log("Set element ", elem);
}
firstSet.forEach(function(value, key, set) {
    console.log("For each Set ", key, value);
});

// Maps
const firstMap = new Map();
firstMap.set("name", "Pranay");
firstMap.set(1, "Xyz");
firstMap.set("open", "set open").set("close", "set close");

console.log(firstMap.set(1, 'abc')); // returns the map so chaining is possible
console.log(firstMap.get("open"));
console.log(firstMap.has("open"));
firstMap.delete("open");
console.log(firstMap.has("opne"));
const keyarr = [1, 2];
firstMap.set(keyarr, "object set");
console.log(firstMap.get(keyarr));

const secondMap = new Map(Object.entries(hotel));
console.log(secondMap);

const thirdMap = new Map(
    [[ 1, 'a' ], [ 2, 'b' ], [ 'three', 3 ], [ 'four', 4 ]]
);
console.log(thirdMap);

for (const [key, value] of thirdMap.entries()) {
    console.log("Map Entries ", key, value);
}
thirdMap.forEach(function(value, key, map) {
    console.log("For Each Map ", key, value);
});

// Strings
const str1 = 'Air Portugar';
const str2 = 'Tap Dance';

console.log('String at index 0', str1[0]);
console.log('String length', str1.length);
console.log('String index of', str2.indexOf('Da'));
console.log('String index of', str2.lastIndexOf('d'));
console.log('String slice', str1.slice(1, 4));
console.log('String slice', str1.slice(1, -1));

// Adding Element
const inputText = document.querySelector('#input-text');
console.log(" Attribute >> ", inputText.getAttribute('type'));
console.log("Data Attribute >> ", inputText.dataset.versionNu);
inputText.classList.add('x'); // remove, toggle, contains
console.log("Data Attribute >> ", inputText);
const inputButton = document.querySelector('.input-button');
const list = document.querySelector('.addedList');
inputButton.addEventListener('click', function(event) {
    let htmlStr = '';

    if (inputText.value) {
        htmlStr = `<li>${inputText.value}</li>`;
    }

    if (htmlStr) {
        list.insertAdjacentHTML('afterbegin', htmlStr); // afterend, beforeend, beforebegin
    }
});

// Event Capturing and bubbling
const bubbleCont = document.querySelector('#bubbling-container');
const bubbleCont1 = document.querySelector('#bubbling-container1');
const bubbleButton = document.querySelector('.bubble-button');

bubbleCont.addEventListener('click', (event) => {
    console.log("Bubble event target, current target CONTAINER>> ", event.target, event.currentTarget);
});

bubbleCont1.addEventListener('click', (event) => {
    console.log("Bubble event target, current target CONTAINER1>> ", event.target, event.currentTarget);
});

bubbleButton.addEventListener('click', (event) => {
    console.log("Bubble event target, current target BUTTON>> ", event.target, event.currentTarget);
});

const captCont = document.querySelector('#capturing-container');
const captCont1 = document.querySelector('#capturing-container1');
const captButton = document.querySelector('.capture-button');

captCont.addEventListener('click', (event) => {
    console.log("Capture event target, current target CONTAINER>> ", event.target, event.currentTarget);
}, true);

captCont1.addEventListener('click', (event) => {
    console.log("Capture event target, current target CONTAINER1>> ", event.target, event.currentTarget);
}, true);

captButton.addEventListener('click', (event) => {
    console.log("Capture event target, current target BUTTON>> ", event.target, event.currentTarget);
}, true);
captButton.closest('div').style.backgroundColor = 'yellow';
console.log("Parent Node Parent Element >> ", captButton.parentNode, captButton.parentElement)
console.log("Prev Element Next Element >> ", captCont.previousElementSibling, captCont.nextElementSibling)
console.log("All children >>", captCont.parentElement.children);

// Promise Async Await try catch
const lotteryPromise = new Promise((resolve, reject) => {
    const num = Math.random();

    if (num > 0.5) {
        resolve(`you won ${num}`);
    } else {
        reject(new Error("you lost"));
    }
});

lotteryPromise.then( (res) => {
    console.log(res);
}).catch((rej) => {
    console.error(rej)
}).finally(() => {
    console.log("finally block")
});

const waitMethod = function(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time * 1000, "Method Resolved");
    });
}

waitMethod(2).then((res) => {
    console.log("2 seconds wait over");
    waitMethod(1);
}).then((res) => {
    console.log("1 seconds wait over");
});

const demo = async () => {
    try {
        const result = await waitMethod(4);
        console.log("Within async method", result);
    } catch (err) {
        console.error("Something went wrong", err);
    }
    return "Async returns promise";
};
demo().then((res) => console.log(res));
console.log("After async");

/* const data = Promise.all( [method1, method2,...] );
console.log(data[0], data[1]);

other methods such as race, any, allSettled
*/

// This keyword and arguments
console.log("this", this); // in strict mode is undefined

const thisObj = {
    name: "Pranay",
    job: "SSE",
    company: "Deloitte",
    arrwThis: () => {
        console.log("this for Arrow Function inside object", this);
    },
    plainThis() {
        console.log("this for plain function inside object", this);
    },
    nestedFunc() {
        console.log("Outer function this", this);
        const newfunc = function() {
            console.log("Nested function 1", this);  // in strict mode will be undefined or else window Object
        }
        newfunc();
        const self = this;
        const newfunc1 = function() {
            console.log("Nested function 2", self);  
         }
         newfunc1();

        const newfunc2 = () => {
            console.log("Nested function 3", this);  // Arrow function uses lexical this which means will use the this of nestedFunc which is the object
         }
         newfunc2();
    }
};

const thisObj2 = {
    name: "Sam"
};
thisObj2.plainThis = thisObj.plainThis;
thisObj.arrwThis(); // gets this pointer to lexical scope i.e parent execution scope
thisObj.plainThis();
thisObj2.plainThis();
thisObj.nestedFunc();
const argFunc = function(q, w, e, r) {
    console.log("arguments Object", arguments); // this is undefined for arrow function
}
argFunc(1, 2, 3, 4);
console.log("functions.length will also give argument length", argFunc.length)
// in nested function we do not get the desired this value.
// as the method will have windows object or undefined in strict mode
// to solve it use newFunc1 or newFunc2

// Function returning other function
function greet(greeting) {
    return function(name) {
        return `${greeting} ${name}`;
    };
}
console.log( greet("Hello, ")("Pranay") );

// call bind and apply
const airIndia = {
    name: "Air India",
    from: "SFO",
    to: "LA"
}

const united = {
    name: "United",
    from: "ORL",
    to: "NY"
}

const greetFunc = function(first, last) {
    console.log(`Welcome ${last}, ${first} aboard ${this.name} flight from ${this.from} to ${this.to}`);
}
greetFunc.call(airIndia, "Pranay", "Jha");
greetFunc.apply(united, ["Pranay", "Jha"]);
const greetFuncBind1 = greetFunc.bind(airIndia, "Sam", "Bahadur");
greetFuncBind1();
const greetFuncBindNancy = greetFunc.bind(united, "Nancy");
greetFuncBindNancy("Flint");

//IIFE Immediately invoked Function Expression
(function() {
    console.log("Immediate function execution");
})();

// Closure
// returned function has access to all the variables from the enclosing function
// even though the outer function is out of execution context
function bookIt() {
    let count = 0;

    return function() {
        count++;
        console.log("Closure Example Book count>> ", count);
    };
}

const booker = bookIt();
booker();
booker();
booker();

// OOPS and Prototypes

const Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    // It is a bad practice to create a method inside constructor function
    // becuse it will create multiple copies of the function with each
    // object creation
    /*
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
    */
};

const nick = new Person('Nick', 'Jonas');
console.log("Constructor function", nick);
const mark = new Person('Mark', 'Chapman');
console.log("Constructor function", mark);
console.log("Using instance of ", mark instanceof Person);
Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}
console.log("Using prototype function", nick.fullName());
console.log("Using prototype function", mark.fullName());
console.log("Concrete object __proto__ ==== Person.prototype", mark.__proto__ === Person.prototype)
console.log(Person.prototype.isPrototypeOf(mark));
// prototype is like prototype of linked object not the prototype of Person.
console.log(Object.prototype); // prototype of all objects that will inherit from Object
console.log(Object.__proto__); // Object prototype. will be null as it is end of chain
/*
    when you write new operator following steps take place
    1. An empty object is created {}.
    2. this keyword in constructor function call is set.
    3. new objects __proto__ property is linked to Parent constructor functions prototype property
    4. new object is returned
*/
console.log("Prototype chain", mark.__proto__.__proto__);

const PersonCl = class {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set setFirstName(name) {
        this.firstName = name;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    anyFunc() {
        console.log("Just a method of PersonCL")
    }
};
const sam = new PersonCl('Sam', 'Altman');
console.log("Using class", sam);
sam.setFirstName = "Mike";
console.log("After Set ", sam);
sam.anyFunc();

Person.staticFunc = function() {
    console.log("Inside static method");
    console.dir(this);
};

Person.staticFunc();

const PersonProto = {
    calcAge() {
        return 2037 - this.year;
    }
};
const steve = Object.create(PersonProto); // Passing the prototype object
console.log("Object.create", steve);
steve.year = 1990;
console.log("Object.create calcAge", steve.calcAge());
console.log("steve.__proto__ === PersonProto", steve.__proto__ === PersonProto);


// Inheritance
const PlainPerson = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};
PlainPerson.prototype.calcAge = function(year) {
    return 2037 - year;
};

const PlainStudent = function(firstName, lastName, birthYear) {
    PlainPerson.call(this, firstName, lastName);  // Linking This
    this.birthYear = birthYear;

};
console.log("PlainStudent.prototype", PlainStudent.prototype);
// Linking Prototype
PlainStudent.prototype = Object.create(PlainPerson.prototype);
console.log("PlainStudent.prototype", PlainStudent.prototype);
// Linking Constructor
PlainStudent.prototype.constructor = PlainStudent;
const mike = new PlainStudent("mike", 'Henson', 1991);
console.log("Mike ",mike);
console.log("Mike.calcAge(1945)", mike.calcAge(1945));
console.dir(PlainStudent.prototype.constructor);
console.log("PlainStudent instanceof PlainPerson", PlainStudent instanceof PlainPerson);
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log("mike instance Of PlainStudent", mike instanceof PlainStudent);
console.log("mike instance Of PlainPerson", mike instanceof PlainPerson);


class PersonCl1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

class StudentCl1 extends PersonCl1 {
    constructor(firstName, lastName, age) {
        super(firstName, lastName);
        this.age = age;
    }
    #privateVal = 0;

    static funcStatic() {
        console.log("Inside Static Method")
    }
};
const sten = new StudentCl1('gwen', 'sten', 34);
StudentCl1.funcStatic();
//console.log(sten.#privateVal); // will give error coz of private decleration(#) 
console.log("StudentCl1 instanceOf PersonCl1", StudentCl1 instanceof PersonCl1);

const PersonProto1 = {
    calcAge(age) {
        return 2037 - this.age;
    },
    init(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
};
const StudentProto = Object.create(PersonProto1);
StudentProto.init = function(fname, lname, age) {
    PersonProto1.init.call(this, fname, lname);
    this.age = age;
};

StudentProto.introduce = function() {
    console.log(`Hello ${this.fname} ${this.lname} I am ${this.calcAge()} years old`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", "Shah", 1923);
jay.introduce();



