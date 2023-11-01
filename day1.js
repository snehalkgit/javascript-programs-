 let snehal = {
    firstname :"snehal",
    lastname : "kamble",
    age : 24

 }
  console.log(snehal)
  ///////////////////////////////////////////////

   class person{
    firstname 
    lastname 
    age 
   }
 let snehal2 = new person()
 console.log(snehal2)
   
 snehal2.firstname = "monika",
 snehal2.lastname = "soyam",
 snehal2.age = 24 
 console.log(snehal2)

/////////////////////////////////////


//constructor
 class personB{
    constructor(fn,ln,age,rollno){
        this.firstname = fn 
        this.lastname = ln
        this.age = age 

    }
 }

  let snehal3 = new personB("priti","lohakre",24)
  console.log(snehal3)

  let priti = new personB("priti","hadke",54)
  console.log(priti)