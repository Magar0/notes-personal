

// LOGICAL OPERATOR && ||...................................
console.log(3&&2); //
console.log(null&&2); //null
console.log(2&&false); //false

console.log(3||2); //3
console.log(null||2); //2
console.log(2||false); //2


// UNARY PLUS(+)..........................................
console.log(+("5"))         //5
console.log(+(null))        //0
console.log(+(undefined))   //NaN


//TERNARY OPERATOR/ CONDITIONAL OPERATOR/ IMMEDIATE IF/ INLINE IF:
var check = (3 > 2) ? ("it is" + true) : ("it is", false) //it is true
console.log(check)


//FAT ARROW FUNCTION....................................
let sum = (a, b) => {
    return a + b;
}
var funExp = sum(5, 7)  //FUNTION EXPRESSION........
console.log(funExp); //12


//FOR IN LOOP............................................
var anime = ["Rimuru", "Demon Slayer", "Goku", "Gohan", "Death Play"]
for (let elements in anime) {
    console.log(elements); // 0 1 2 3 4
}

for (let elements of anime) {
    console.log(elements); // Rimuru  Demon Slayer    Goku   Gohan    Death Play
}

anime.forEach(function (element, index, array) {
    console.log(element);
    console.log(index);
    console.log(array);
})


const person = {                    //in object
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  for (let property in person) {
    // console.log(property + ": " + person[property]);
    console.log(property);          // first Name       last name       age
    console.log(person[property]);      // John     Doe     30

}

//indexOf()...............................   forward search

var anime = ["Rimuru", "Goku", "Demon Slayer", "Gohan","Goku", "Rayuga", "Death Play"]
// console.log(anime.indexOf("Goku")); //1
// console.log(anime.indexOf("Goku",2)); //4
// console.log(anime.indexOf("goku")); //-1


//lastIndexOf() ............................ backward search
console.log(anime.lastIndexOf("Goku")); //4
console.log(anime.lastIndexOf("Goku",2)); //1
console.log(anime.lastIndexOf("Goku",4)); //4

//.includes()........................................................
console.log(anime.includes("Rimuru"));// true
console.log(anime.includes("Rimuru",2));// false


// .find().....................................................
var prices = [200, 150, 300, 100, 90, 220, 100, 140]
// let findElem = prices.find((currVal) => currVal<150) 
// console.log(findElem);  //100

// console.log( prices.find((ele)=> ele <250)); //200
// console.log( prices.find((ele)=> ele <10)); //undefined


// .findIndex().......................................................
console.log( prices.findIndex((x)=>x<150)); //3
console.log( prices.findIndex((ele)=> ele <250)); //0
console.log( prices.findIndex((ele)=> ele <10)); //-1


// FILTER()..............................................................
var prices = [200, 150, 300, 100, 90, 220, 100, 140]
console.log(prices.filter((x) => x < 150)); //[ 100, 90, 100, 140 ]
console.log(prices.filter((ele, index) => {
    return ele > 1500
})); // []


// SORT().....................................................................

var anime = ["Rimuru", "Goku", "Demon Slayer", "Gohan","Goku", "Rayuga", "Death Play"]
console.log(anime.sort());   //['Death Play', 'Demon Slayer', 'Gohan', 'Goku', 'Goku', 'Rayuga', 'Rimuru']

num= [1,2,5,11,14,100,22,9]
console.log(num.sort());//[1,100, 11, 14, 2, 22, 5, 9]


//PUSH() & UNSHIFT()...........................................................
const animals = ['pigs', 'goats', 'sheep'];
let returns= animals.push('chicken', 'cats','cow');
console.log(animals); // ['pigs', 'goats', 'sheep', 'chicken', 'cats', 'cow']
console.log(returns); //6


//POP() SHIFT().................................................................
const animals = ['pigs', 'goats', 'sheep'];
returns =animals.shift()
console.log(returns); //pigs
console.log(animals);  //['goats', 'sheep']


//SPLICE()............................................................

var months = ["jan", "feb", "mar", "apr", "may", "june"]
return1= months.splice(1,2);
console.log(return1);     //['feb', 'mar']
console.log(months);     //['jan', 'apr', 'may', 'june']

var months2 = ["jan", "feb", "mar", "apr", "may", "june"]
return2= months2.splice(5,0,"july", "aug");
console.log(return2);     //[]
console.log(months2);     //['jan', 'feb', 'mar', 'apr', 'may', 'july', 'aug', 'june']

var months3 = ["jan", "feb", "mar", "apr", "may", "june"]
return3= months3.splice(2,Infinity,"july", "aug");
console.log(return3);         //['mar', 'apr', 'may', 'june']
console.log(months3);         //['jan', 'feb', 'july', 'aug']


//MAP()....................................................................

const array1 = [1, 4, 9, 16, 25];
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem > 9;
// })
// console.log(array1);      //[1, 4, 9, 16, 25]
// console.log(newArr);      //[false, false, false, true, true]

let array = [1, 4, 5]
let newArr2 = array.map((curElm, index, arr) => {
    return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
})
console.log(newArr2);   //'Index no = 0 and the value is 1 belong to 1,4,5 ',............] while foreach() loop give undefine



let arr = [2, 3, 4, 6, 8]
newArr = arr.map((curElem) => {
    return curElem * 2;
}).filter((curElem) => curElem > 10)
console.log(newArr); //[12, 16]


//REDUCE()..................................................................
let arr = [5, 8, 2, 4]
const newArr = arr.reduce((accumulator, curElem, index, arr) => accumulator += curElem)
console.log(arr);       //[5,8,2,4]
console.log(newArr);    //19

const arr3= arr.reduce((a,b)=> a+b)         // here (a=5,b=8)
console.log(arr3);    //19

arr2 = [["1A", "1B"],["2A", "2B"],["3A", "3B"]]
newArr = arr2.reduce((accum,curElem)=> accum.concat(curElem))
console.log(newArr);


//SLICE(start,end)....................................................

str= "Apple, Banana, Kiwi"

console.log(str.length);    //19

res = str.slice(7,13)
console.log(str);     //Apple, Banana, Kiwi
console.log(res);     //Banana

console.log(str.slice(7,30))
console.log(str.slice(7,-3));     //Banana, K
console.log(str.slice(3))    //le, Banana, Kiwi


//SUBSTRING( start, end ).................................

str= "Apple, Banana, Kiwi"
res = str.substring(2,-3)
console.log(str);     //Apple, Banana, Kiwi
console.log(res);     //Ap


//SUBSTR( start, length)......................................

str= "Apple, Banana, Kiwi"
res = str.substr(7,2)
console.log(res);    //Ba
res2 = str.substr(-3)
console.log(res2);   //iwi


//REPLACE(.................................................
str= "The name of Goku is Goku"
newStr = str.replace("Goku","Gohan")
// console.log(newStr);           //The name of Gohan is Goku


//CHARAT().................................................
str= "The name of Goku is Goku"
console.log( str.charAt(50));         //
console.log( str.charAt(2));         //e
console.log( str.charAt(-5));           //


//DATE & TIME.........................................
let date= new Date()
console.log(date);                        //2023-05-17T10:03:09.492Z
console.log(date.toLocaleDateString());    //17/5/2023

console.log(new Date(2023, 0,21,45).toLocaleDateString());     //22/1/2023
console.log(new Date(2023).toLocaleDateString());            //1/1/1970

console.log(new Date().toLocaleTimeString()); //  5:44:09 pm
//---
console.log(new Date().toLocaleDateString()); // 17/5/2023
//---
console.log(new Date().toLocaleString()); // 17/5/2023, 5:44:09 pm


//Math....................................................

console.log(Math.ceil(2.1));        //3
console.log(Math.ceil(-2.1));       //-2
console.log(Math.ceil(-2.8));       //-2

console.log(Math.floor(2.1));       //2
console.log(Math.floor(-2.1));      //-3   
console.log(Math.floor(-2.8));      //-3



//OBJECT...................................................

let obj1={x:1, y:{m:"math",n:"eng"}, z: "a"}
console.log(obj1.x);        //1
console.log(obj1.y.m);          //math
console.log(obj1['y']["m"]);    //math
console.log(obj1['y'].m);       //math

let del = delete obj1.y
console.log(del);   //always reurn "true"
console.log(obj1);  //{ x: 1, z: 'a' }


firstName ="Rakesh";
tit = "Magar";
let bioData= {
    name: {firstName, title : tit, fullName: "Rakesh Magar"},
    age: 25,
    course: "webDeveloper",

    getData : function() { console.log("I am",this.name.fullName,this.age,"and studying",this.course);},
    
    noFunct() {console.log(`${this.name.fullName} is studying ${bioData.course}`);},

    fatArrFun: () => console.log(this.age)
}
// console.log(bioData.noFunct());   //Rakesh Magar is studying webDeveloper
// console.log(bioData.getData);    //[Function: getData]
// console.log(bioData.getData());    //I am Rakesh Magar 25 and studying webDeveloper
// console.log(bioData.fatArrFun());  //undefined  (this cannot use with fat arrow funct)
console.log(bioData.name)  //{ firstName: 'Rakesh', title: 'Magar', fullName: 'Rakesh Magar' }



//ARRAY or OBJECT DESTRUCTURING...........................

let x = "working"
bioData = {
    myName: "thapa",
    age: 25,
    [x]: "webDev",          // use [] for dynamic value in Key
    [5+6]: "calc using []"
}
console.log(bioData);       //{ myName: 'thapa', age: 25, working: 'webDev' }

// let {myName,age,[x]} =bioData;    //SyntaxError: Unexpected token '['
let {myName,age,work,extra="Hi",working} =bioData; 
console.log(age);           //thapa
console.log(work);          //undefined
console.log(extra);         //Hi
console.log(working);       //webDev


arr = ["Thapa", 25, "webDev"]
let [Name = "Rakesh", Age, Course, extra = "nothing", notDef] = arr
console.log(Name);   //Thapa
console.log(Age);    //25
console.log(extra);     //nothing
console.log(notDef);     //undefined



//SPREAD .................................................

arr1 = [1, 2, 3, 4]
arr2 = ["a", "b", ...arr1, "c"]
console.log(arr2);          //['a', 'b', 1, 2, 3, 4, 'c']

obj1 = { x: 1, y: 2 }
obj2 = { z: "a", ...obj1, m: "b" }
console.log(obj2);          //{ z: 'a', x: 1, y: 2, m: 'b' }



//STRING PADDING..........................................
let str = "Good Boy";
let newStr= str.padStart(12)
console.log(str);       //"Good Boy"
console.log(newStr);    //"    Good Boy"
console.log(newStr.length)  //12



//OBJECT VALUES & OBJECT ENTRIES...................................
obj = { x: 1, y: 2, z: 3, a: "ram" };
objVal = Object.values(obj);
// console.log(objVal);        //[ 1, 2, 3, 'ram' ]

objEnt = Object.entries(obj);
objArr = objEnt.flat()      //object ---> to array
console.log(objEnt);        //[ [ 'x', 1 ], [ 'y', 2 ], [ 'z', 3 ], [ 'a', 'ram' ] ]
console.log(objArr);        //['x', 1, 'y', 2, 'z', 3,'a', 'ram']

bckObj= Object.fromEntries(objArr)          //TypeError
bckObj= Object.fromEntries(objEnt)          //{ x: 1, y: 2, z: 3, a: 'ram' }
console.log(bckObj);


//NULLISH COALESCING.............................................
console.log(null ?? "ok true null");         //ok true null
console.log(undefined ?? "ok true undf");    //ok true undf
console.log(0 ?? "ok 0");               //0
console.log(false ?? "ok false");       //false
console.log("no" ?? "ok 'no'");         //no
console.log(4 ?? "ok 4");               //4


//FUNCTION CURRYING..........................................

function sum(num1){
    return function(num2){
        return function(num3){
            return function(num4){
                return num1+num2+num3+num4;
            }
        }
    }
}
console.log(sum(2)(4)(6));          //[Function (anonymous)]
console.log(sum(2)(4)(6)(8))        //20

let sum = (num1) => (num2) => (num3) => (num4) => num1 + num2 + num3 + num4;
console.log(sum(2)(4)(6)(8))        //20


//CALL BACK HELL............................................
setTimeout(() => {
    console.log("1st");
    setTimeout(() => {
        console.log("2nd");
        setTimeout(() => {
            console.log("3rd")
            setTimeout(() => {
                console.log("4th");
                setTimeout(() => {
                    console.log("5th")
                }, 1000)
            }, 1000)
        }, 1000)
        
    }, 1000)
}, 1000)

