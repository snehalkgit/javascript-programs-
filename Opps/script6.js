//LEXICAL SCOPE

  function addA(){
    let a = 10
     let b = 5
     console.log(a+b)
     function addC(){
        let s = 10
         let t = 15
         console.log(a+b+s+t)
     }
     addC()
  }
  addA()

  //program2

//lexical scope 


function addB(){

   let x = 10
    let y = 5
    return x + y 
    //console.log(" hello ")
}
 
 let q2 = addB()
 console.log(q2)

// program 3 
 // closure 

  function addE(){
      let p = 4
       let q = 5 
        return function(){
          console.log(p+q)
        }
  }
     let q4 = addE()
     console.log(q4)


 addE()

  // function declartion 
   
    function  addC( x, y ){
       return  x +y 
    }
        let q5 = addC(12,4)
        console.log(q5)
     // console.log(addC)


     // function expression 
      let addF =  function(x,y){
        return x +y
      }

        let q7= addF(14,5)
       console.log(q7)

       //  arrow function 

       let addg =  (x,y)=>{
        return x +y
      }

        let q8= addF(54,5)
       console.log(q8)


 // closure 
   function subH(){
     let x = 55
     let y = 45
return function(){
  return x - y 
}
   }
    // let q9  = subH(14,5)
    // console.log(q9)
      let q9 = subH()
       let q10 = q9()
       console.log(q10)
