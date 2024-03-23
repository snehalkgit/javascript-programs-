 let info={
    firstname :"snehal",
    lastname : "kamble"
 }

  //destructure
 let  { firstname :s1, lastname :s2}=info
 console.log(info)
 console.log(s1)
 console.log(s2)


 //retrive 
  console.log(info.firstname)

  //add
  info.city = "pune"
  console.log(info)

  //update 
   
  info.firstname ="samiksha"
  console.log(info)

  //delete

   delete info.firstname
console.log(info)
 

 let s = [44,55,24,50,55,88]
let q1 = s.reduce(function(acc=0,el,index,arry){
    return acc + el
},0)


console.log(q1)

let q2 = s.reduce(function(acc=0,el,index,arry){
return  acc +  el >50

},0)
console.log(q2)

q3 = s.filter(function(el,index,arry){
    return el >50
})
console.log(q3)





 