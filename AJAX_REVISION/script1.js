//program 1
 
//asy
 
 function additionA(){
    console.log("A")
 }
 additionA()

 function additionB(){
   console.log("B")
 }
  additionB()

  //program 2 
    
  function additionC(){
   setTimeout(function(){
      console.log("C")
   },3000)
  }
   additionC()
    function additionD(){
      console.log("D")
    }
    additionD()

    // program 3 
     
     //user create ----- get id ----- get info 

      function getinfo(){
         setTimeout (function(){
            console.log("user created")
         },3000)
      }
       setTimeout (function(){
         console.log("get id ")
       },2000)

        setTimeout (function(){
         console.log("get info ")
        },1000)

         getinfo()
//call back hell

         function getinfo2(){
            setTimeout (function(){
               console.log("user created")
               setTimeout (function(){
                  console.log("get id ") 
                   setTimeout (function(){
                     console.log("get info ")
            },3000)
         
      
          },2000)
   
      
           },1000)
   
         }

getinfo2()

// promises 

//   pending , resolve , reject 


let pro = new Promise(function(resolve,reject){
   let a = 10
    let b = 5 
     if (a ==b){
      resolve ("hello")
     }
     else{
      reject("bye")
     }
})

//consuming the promise
pro.then(function(str){
   console.log(str)
},function(str){
   console.log(str)
})


 //program 4

   let pro2 = new Promise(function(resolve, reject){
       let a = 10
        let b = -10
        if(a == b){
         resolve([11,22,33])
        }
        else{
         reject([-11,-22,-33])
        }
   })
pro2.then(function(arry){
   console.log(arry[0])
},function(arry1){
   console.log(arry1[2])
})


//program 5 
let pro3 = new Promise(function(resolve,reject){
   let a = 10 
   let b = 10

   if(a == b){
       resolve("hello")
   }
   else {
       reject("bye")
   }

})

 pro3.then(function(str){
   console.log(str)
 })
 .catch(function(str){
   console.log(str)
 })

 
 let pro4 = new Promise(function(resolve,reject){
   let a = 15
   let b = 12
   if(a ==b){
      resolve("hello")
   }
   else{
      reject("bye")
   }
 })
 pro4.then(function(str){
   Console.log(str)
 })
 .catch(function(str){
   console.log(str)
 })
 .finally(function(){
   console.log("i will exceutive")
 })

 
 //asyn awaits

//   async function getUsers(){
// let s1 = await createuser()
// console.log(s1)
//  let s2 = await getinfo()
//  console.log(s2)
//  let s3 = await getinfo()
//  console.log(s3)
// }

// getUsers()




































