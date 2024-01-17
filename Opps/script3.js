//single inheritance 

class students{
    constructor(fn,ln){
        this.firstname = fn
        this.lastname = ln 
    }
    displayname(){
        console.log(this.firstname + this.lastname )
    }

}

class Teacher extends students{
    constructor(fn,ln,salary){
        super(fn,ln)
        this.salary = salary 
    }
    displaysalary(){
        console.log(this.firstname + this.lastname )
    }
}
 let x = new Teacher("snehal","kamble",50000)
 console.log(x.firstname)
 console.log(x.lastname)
 console.log(x.salary)
 x.displayname()
 x.displaysalary()



 ///program 2
//  // multi-level

//   class Grandfather{
//     constructor(fn,ln){
//         this.firstname= fn
//         this.lastname = ln 
//     }
//     displayGname(){
//         console.log(this.firstname+ this.lastname )
//     }
//   }

//   class Father extends Grandfather{
//     constructor(fn,ln,ffn){
//         super(fn,ln)
//         this.fname = ffn 
//     }
//     displayFname(){
//         console.log(this.fname+ this.lastname)
//     }
//   } 
//   class son extends Father{
//     constructor(fn,ln,ffn,ssn){
//         super(fn,ln,ffn)
//         this.sname = ssn
//     }
//     dsiplayaSname(){
//         console.log(this.sname +this.lastname)
//     }
//   }

//   //let snehal = new son("domaji","kamble","kawaduji","snehal")

//   console.log(snehal.firstname)
//   console.log(snehal.lastname)
//   console.log(snehal.fname)
//   console.log(snehal.sname)

  ///hericherial 

   class mother{
    constructor(fn,ln){
        this.firstname= fn 
        this.lastname= ln
    }
    displayname(){
        console.log(this.firstname+ this.lastname)
    } 
   }
    class son extends mother{
        constructor(fn,ln,sn){
            super(fn,ln)
            this.sname= sn
        }
        displaysname(){
            console.log(this.sname+ this.lastname)
        }
    }
 class daughter extends mother{
    constructor(fn,ln,dn){
        super(fn,ln,)
        this.dname = dn
    }
    displaydname(){
        console.log(this.dname + this.lastname )
    }
 }

  let snehal2 = new daughter("jyotsna","kamble","snehal")
  let yash =new son("jyotsna","kamble","yash")

 console.log( snehal2.firstname)
 console.log( snehal2.lastname)
 console.log( snehal2.dname)
 console.log( yash.firstname)
 console.log( yash.lastname)
 console.log( yash.sname)

 snehal2.displayname()
 snehal2.displaydname()
 yash.displaysname()

 
