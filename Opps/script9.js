let x = 10
console.log(x)
x = 300
console.log(x)

 const s = 50
 console.log(s)

// s =500 === we cannot change in constnt 
// console.log(s)


 var  A = 50
 console.log(A)
 
   //difference between  let const and var with respect to scope 
    // let is blocked scope 
    // program 2 
     {
        let k = 100
        console.log(k)
     }
//console.log(k) -=== bracket ke bhar nahi excesute honga 
//program 3 
 let i = 1000
 i = 500
 console.log(i)

 {
    let i = 400
    i = 560
    console.log(i)//560
 }

 console.log(i)//500

//const is also blocked in scope 
//program 4
 
   {
      const h = 50
      console.log(h)
   }
  // console.log(h)//


//   const s2 = 500
//   {
//     s2 = 5000
//     consol.log(s2)
//   }
//   console.log(s2)

//program 5 

const  s3 = 400
{
    const s3 = 100
    console.log(s3)
}

console.log(s3)


// program 6 
 var h2 = 10
 function add(){
    var h2 = 40
    console.log(h2)
 }{
     let h2 = 300
     console.log(h2)
 }
 console.log(h2)


 add()
 h3 = 500
 console.log(h3)