// //CLASS ...CONSTRUCTOR................................

// let animal = class {
//     constructor(firstName, lastName) {
//         this.fName = firstName;
//         this.lName = lastName;
//         this.fullName = this.fName + " " + this.lName;
//     }
//     canWalk() { console.log(`yes,${this.fullName} can walk`) }
//     legs = "two";
// }
// class bird {
//     constructor(firstName, lastName) {
//         this.fName = firstName;
//         this.lName = lastName;
//     }
//     getfullName() {
//         var fullName = this.fName + " " + this.lName;
//         return fullName;
//     }
//     canWalk() { console.log("No, don't walk but ", this.getfullName(), " can fly") }
//     wings = "two";
// }

// let sparrow = new bird("Xiang", "ling")
// let lion = new animal("the","King")
// // sparrow.canWalk()
// // lion.canWalk()


// //EXTENDED CLASS METHOD MODIFICATION .....................................

// class dinosaurs extends animal{
//     constructor(firstName,lastName,size){
//         super(firstName,lastName);                      //use of Super method
//         this.size = size;
//     }
//     canWalk(){
//         super.canWalk()
//         console.log("and it is ",this.size)             //one extra line added to parent method
//     }
// }

// let dino = new dinosaurs("dino","san","very big")
// dino.canWalk()


// // STATIC METHOD

// class x {
//     constructor(fN,lN){
//         this.fName= x.capitalize(fN);
//         this.lName= lN;
//     }
//     getFullName= ()=>{let fullName= this.fName+" "+this.lName;
// return fullName}
//     static capitalize(name) { return name.charAt(0).toUpperCase()+ name.slice(1) }
// }

// let thapa = new x("rakesh",x.capitalize("thapa"))
// console.log(thapa.getFullName())        //Rakesh Thapa


//SET NAME  GET NAME.....................................

// class first {
//     constructor(name1,name2){
//         this.name1 = name1;
//         this.name2 = name2;
//         this.name= this.name1+" "+ this.name2
//     }
//     fly(){
//         console.log(`${this.name} ud raha he`)
//     }

// get myName(){
//    return this.name
// }
// set chngName(newName){
//     this.name= newName
// }
// }

// let thapa= new first("rakesh", "thapa")
// // thapa.chngName= "pritam"
// // console.log(thapa.myName)
// // console.log(thapa.name)
// console.log(thapa.name)
// thapa.name= "pritam debnath"
// console.log(thapa.name)


// MULTIPLE ARGUMENTS...............
// function calc() {
//     let sum = 0;
//     for (i = 0; i < arguments.length; i++)
//         sum += arguments[i];
//     return sum;
// }
// console.log(calc(4));           //4
// console.log(calc(4,6,8));       //18
// console.log(calc());            //0



//SAME VARIABLE INSIDE & OUTSIDE FUNCTION

const x=1;
function test(){
    // var x=2;
    var x=2;
    console.log("inside: ",x);
}
test()
console.log("outside: ",x);