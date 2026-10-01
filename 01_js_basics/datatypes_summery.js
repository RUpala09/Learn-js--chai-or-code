// Primitive datatype 

// 7 types : string , number , boolean , null , undefinded , symbol , BigInt

const score = 100;
console.log(typeof score);

const scoreValue = 100.5;
console.log(typeof scoreValue);

const isloggedIn = false;
console.log(typeof isloggedIn);

const outsideTemp = null;
console.log(typeof outsideTemp);

let userName;
console.log(typeof(userName));

const id = Symbol('123');
const anotherId = Symbol('123');

console.log( id === anotherId );

const bigNumber = 123123456n ; //write n after number so it's datatype is bigInt
console.log(typeof bigNumber);




// Non-primitive (Reference) datatype 

// 3 types => array, object , function

const heros = ["Ironman", "Batman", "Heman","Antman"];
console.log(typeof heros);

let myObj = {
    name : "Raj",
    age : 22,
    sem : 7,
};

console.log(myObj);
console.log(typeof myObj);



const welcomeFunction = function(){
    console.log("Hello , welcome...");
}

welcomeFunction();
console.log(typeof welcomeFunction);
