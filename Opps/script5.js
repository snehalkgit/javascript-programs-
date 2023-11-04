// number as parameter and number is return type 

 function add (x,y){
    return x + y 
 }
  let q1 = add(12,4)
  console.log(q1)

   let q2 = add(14,5)
   console.log(q2)
console.log(typeof q2)

// string as parameter and string as return type 

 function greet(word){
    return "good "+ word
 }
 let  q3 = greet ("morning")
 console.log(q3)


  // bollen as paramter and bollean as return type 
   
   function candrive(age,vehicleAvail){
    if(age>=17 && vehicleAvail){
 return true 
    }
     else {
        return false 
     }
   }

   let q4 = candrive(17,false )
   console.log(q4)



 function candrive(age,vehicleAvail){
    if(age>=18 && vehicleAvail){
 return true 
    }
     else {
        return false 
     }
   }

   let q5 = candrive(18,true )
   console.log(q5)


   //array as parameter and return type 

    let names = ["snehal", "kajal","rushi"]
      function  addnames (list,ele){
        list.push("shruti")
        return ele
      }
       let q6= addnames(names,"shruti")
       console.log(q6)
       console.log(names)

       
// obj as parameter and obj as return type 

  let info={
    firstname : "snehal",
    lastname : "kamble"
  }
 function addlanguage(obj,lang){
    obj.addlanguage = lang
     return obj     
 }


  let q7 = addlanguage(info,"English")
  console.log(q7)

  console.log(info)

  // function as parameter and function as return 
 let adition = function(x,y){
    return x + y 
 }

 function addition (fn,x,y){
let q8 = fn(x,y)
return q8
  }
   let q9 = addition( add,17,8)
   console.log(q9)// calling the function
  // console.log(add) calling the parameter 

  // set as parameter and set as return type 


//  let names2 = new Set(["a","b","c"])
// names.add("d");
//   console.log(names2)

//   let setA  = new Set()
//   //console.log(setA )
 
//   setA.add(11)
//   console.log(setA)
 

// map as parameter and map as return type 









