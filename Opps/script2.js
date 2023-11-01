//program 1 
// class Person {
//     constructor(fn, ln) {
//         this.firstname = fn
//         this.lastname = ln

//     }
//     displayName() {
//         console.log(this.firstname + this.lastname)
//     }
// } class Teacher extends Person {
//     salary = 1000
//     displasalary() {
//         console.log(this.salary)
//     }
// }

// let x = new Teacher("snehal", "kamble")

// console.log(x.firstname)
// console.log(x.lastname)
// console.log(x.salary)
// x.displasalary()
// x.displayName() //single inheritance 


    // program 2 

    class Teacher {
        constructor(fn, ln, salary) {
            this.firstname = fn
            this.lastname = ln
            this.salary = salary

        }
        displayName() {
            console.log(this.firstname + this.lastname)
        }
    }


class Professer extends Teacher{
 constructor(fn,ln,salary,spec){
    super(fn,ln,salary)
    this.specilization = spec
 }
 displayspec ()
{
    console.log(this.specilization)
}}

let y = new Professer("snehal","kamble",200000,"English ")
 console.log(y.firstname)
 console.log(y.lastname)
 console.log(y.salary)
 console.log(y.specilization)
 y.displayName()
 y.displayspec()

 //program 3 
  
  class Grandfather{
    constructor(fn,ln){
        this.firstname= fn
        this.lastname = ln
    }
    displayGName(){
       console.log( this.firstname+ this.lastname )
    }
  }

  class Father extends Grandfather{
    constructor(fn,ln,ffn,){
        super(fn,ln)
        this.fname = ffn
    
    }
    displayFname (){
        console.log(this.fname + this.lastname )
    }

  }

  class Son extends Father{
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname =ssn

    }
    displaySname (){
        console.log(this.sname + this.lastname )
    }
  }

  let z = new Son("ramchndra","tamgadge","samikha","snehal")
  console.log(z.firstname)
  console.log(z.lastname)
  console.log(z.sname)
  console.log(z.fname)
  
  z.displayFname()
  z.displayGName()
  z.displaySname()


