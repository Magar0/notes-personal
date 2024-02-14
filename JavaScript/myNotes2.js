// console.log(typeof NaN);   //number 

// function dog() {
//     console.log("I am a dog.")
//  }
//  dog.sound = "Bark";
//  console.log(dog);      //[Function: dog] { sound: 'Bark' }
//  console.log(typeof dog);    //function

// .....................................................................

// function test(...args) {
//     console.log(args);
//    }
//    test(12,18,'hi');        //[ 12, 18, 15, 25, 'hi' ]


// let obj1= {x:1,y:{a:"ra",b:true},z: undefined, dlt(){ delete this.x ;return this;}}
// // obj1["dlt"]()
// console.log(obj1.dlt());


    // const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const date = new Date(dateString);
    // const dayOfWeekIndex = date.getDay();
    // console.log( daysOfWeek[dayOfWeekIndex])
  

    function calculateSleepDuration(startTime, endTime) {
        // Your code goes here
        const [strtH, strtM] = startTime.split(":").map(Number);
        const [endH, endM] = endTime.split(":").map(Number);
        let duration = (endH + 24 - strtH) % 24;
        duration += (endM - strtM) / 60;
        return Math.floor(duration);
    }
    console.log(calculateSleepDuration("11:00","22:00"));


//CLASS ......................................

    class pokemon {
        constructor(first,last){
        this.firstname= first;
        this.lastname=  last;
        }
        getPokeName= function() {
            var fullname = this. firstname + ' ' + this.lastname;
            return fullname;
        }
    }
    class pokemon2 extends pokemon{
        constructor(first,last,middle){
            super(first,last)
            this.middleName = middle;
    
        }
        color="red";
    }
    let peka= new pokemon2("pika","chu","no");
    console.log(peka);