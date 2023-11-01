// OBJECT LETERAL
// PROGEAM 1
  let info={
    firstname : "snehal",
    lastname : "kamble",
    age : 24,
    displayname: function(){
        console.log(this.firstname+ this.lastname)

    }
  }
  console.log(info)
  info.displayname()

  console.log(this.firstname)
  info.city="pune"
  console.log(info)
  info['firstname']="kartiki"
  console.log(info)


  // PROGRAM 2 
   
  class person {
    firstname 
    lastname 
    age 
    rollno 
     displayname(){
        console.log(this.firstname+ this.lastname)

     }

  }
  
 let snehal = new person()
 console.log(snehal)
 snehal.firstname = "snehal"
 snehal.lastname = "kamble"
 snehal.age = 24
 snehal.rollno = 8
 console.log(snehal)

 snehal.displayname()

 ///CONSTRUCTOR
 //PROGRAM 3

 class person2 {
    constructor(fn,ln,age,rollno){
        this.firstname= fn
        this.lastname = ln
        this.age = age 
         this.rollno = rollno
    }
    displayname(){
        console.log(this.firstname+this.lastname)
    }
 }
 let x = new person2("snehal","kamble",24,8)
 console.log(x)

 let y = new person2("kartik","tiwari",45,22)
 console.log(y)

 x.displayname()
 y.displayname()
x.city="mumbai"
console.log(x)

//PROGRAM 4

//SETMETHOD
  class person3{
    setfirstName(fn){
        this.firstName=fn
    }
    setlastName(ln){
        this.lastName=ln
    }
    setage(age){
        this.age =age
    }
displayName(){
    console.log(this.firstName+this.lastName)
}
  }

 
  let samiksha = new person3()
console.log(samiksha)
samiksha.setfirstName ("samikha")
samiksha.setlastName ('sahare')
samiksha.setage(24)
samiksha.displayName()


// set ahe get keywords


 let info2 ={
  firstname : "snehal",
  lastname : "kamble",
   age : 24

 }
  console.log(info2)

  console.log(info2.lastname)

  //SET AND GET 

  class person4{
     set firstName (fn){
      this.firstname = fn 
     }
      get firstName(){
       return  this.firstname 
      }
       set lastName (ln){
        return this.lastname = ln 
       }
get lastName (){
  return this.lastname
}
 set rollNo (rollno){
  this.rollNo = rollno 
 }
       get rollNo(){
        return this.rollno 
       }
       displayName(){
      console.log(  this.firstName+this.lastName)
       }
  }

 let  abc = new person4()
 console.log(abc)
 abc.firstName = "snehal"
 abc.lastName = "kamble"
 abc.age = 24
 console.log(abc.firstName)
 console.log(abc.lastName)
 console.log(abc.age)

 