let info  = {

    firstname :"snehal",
    lastname : "kamble"
}
console.log(info)

// Map also stores the data in key value or property value  pair
// But key or property can be any data type 


let names = new Map()
console.log(names)

 let names2 = new Map([
    [1,"hr"],
    [2,"admin"],
    [3,"support"],
    [4,"employee"]
 ]
 )


 console.log(names2)

 //size
 //has
 //set=== add and update 
 //get
 //delete



 let name = new Map([
    [1,"hr"],
    [2,"admin"],
    [3,"support"],
    [4,"employee"]
 ]
 )


  //size
  let q1= name.size
  console.log(q1)

  // has
   let q2= name.has(1)
   console.log(q2)
   
   //get

    let q3= name.get(3)
    console.log(q3)
      let q4 = name.get(1)
      console.log(q4)

      //set
       let q5 = names.set(4,"admin")
       console.log(q5)

       //delete

    name.delete(2)
       console.log(name)

    //    //clear
    //    name.clear()
    //    console.log(name)


     //loops

 roleA = new Map([
    [1,"hr"],
    [2,"admin"],
    [3,"support"],
    [4,"employee"]
 ]
 )

 

roleA.forEach(function(val,key){
console.log(val,key)
})


for(let key of roleA.keys()){
    console.log(key)
}

 for (let value of roleA.values()){
    console.log(value)
 }

 for(let [key,value] of roleA.entries()){
    console.log(key,value)
 }



 //set 
 let setB = new Set()
 console.log(setB)

 setB.add(11)
 console.log(setB)

 setB.add(12)
 setB.add(33)
 console.log(setB)

  let q7= setB.has(22)
  console.log(q7)

   let q8 = setB.has(12)
   console.log(q8)

   