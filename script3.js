// //switch case 

// //program 1

// let city = "indore"
// switch (city) {
//     case "pune":
//         console.log('MH')
//     case "mumbai":
//         console.log('MH')
//     case "indore":
//         console.log('MP')
//     default:
//         console.log("incorrect city name")
// }

// //program 2

// // case with break statments
// let city2 = "mumbai"
// switch (city2) {
//     case "pune":
//         console.log("MH")
//         break
//     case "mumbai":
//         console.log("MH")
//         break
//     case "indore":
//         console.log("MP")
//     default:
//         console.log("incorrect city name")

// }

// //program 3

// let city3 = "nagpur"
// switch (city3) {
//     case "pune":
//     case "nagpur":
//         console.log("MH")
//         break
//     case "banglore":
//     case "mysore":
//         console.log("KA")
//         break
//     case "jaipur":
//     case "udaipur":
//  console.log("RJ")
//     default:
//         console.log("incorrect city name ")

// }



// //loop

// //print 3 times  "hello"

// for(let i =1;i <=3; i ++){
//     console.log("hello")
// }

// //print 1 to 5 

//  for(let i =1; i <=5; i ++){
//     console.log(i)
//  }

//   //print 5 to 1 
//    for( let i =5;i >=1 ;i --){
//     console.log(i)
//    }

//    //table of 2 
//     for(let i =2;i <=20; i ++){
//         console.log(i)
//     }

//     //table of 3 
//      for(let i =3 ; i <=30 ;i ++){
//         console.log(i)
//      }

//      //table of 5 in reverse 
//       for ( let i =50; i >= 5;i= - 5){
//         console.log(i)
//      }


//     //with break

//     for(let i =1 ; i <=5; i++){
//         if(i==3){
//             break
//         }
//         console.log(i)
//     }

//     ////
//  for(let i = 1 ; i <=5 ; i ++){
//     console.log(i)
//  }

//   for(let i = 1 ;i <=5 ;i ++){
//     if(i == 2){
//      break
//     }
// console.log(i)
//     }
//     /////
  
//     for(let i = 5 ; i >=1; i --){
//         if(i == 2 ){
//             break
//         }
//         console.log(i)
//     }


// //continue
//  for (let i = 1; i <=5; i ++){
//     if(i==3){
//         continue
//     }
//     console.log(i)
//  }

//  for(let i = 1 ; i >=5; i++){
//     if(i ==2){
//     continue
//     }
//     console.log
//  }

// // for(intialization ; conditionCheck ; increment/decrement){
// //     // statement
// // }

// // intilialization
// // while(condition){
// //     // statement
// //     // increment / decrement
// // }


// /// program 4
// let i1 = 1
// while(i1<=3) {
//     console.log("hello")
//     i1 ++;
// }




// //program 5 
//  let i2 = 5
//  while(i2  <= 5){
//     console.log(i2)
//     i2 ++;
//  }
 

// // table of 2 
//   let i4 = 2
//   while(i4<=20){
//     console.log(i4)
//     i4= i4 + 2 
//   }

//  let i5 = 1
//  while(i5<=10){
//     console.log(i5*2)
//     i5++
//  }
// // table of 5 in reverse 
 
//  let i6 = 1
//  while(i6 >=5){
//     console.log(i6 -5)
//     i6 = i6
//  }


//   /// break sataments with loop 
   
//  let i7 = 1
//  while(i7<=5){
// if(i7==3){
//     break 
// }
// console.log(i7)
// i7 ++
//  }

//  let i8 = 5
//  while(i8 >=1){
//     if(i8==2)
//     break
// {
//     console.log(i8)
//     i8--
// } }
     

//  let i9 = 1
//  while(i9<=5){
//     if(i9 ==3){
//         i9 ++
//         continue 
//     }
//     console.log(i9)
//     i9++
//  }


//   for(let i = 0 ; i <=5;i ++){
//     console.log(i)
//   }


//   for(let i =5; i >=0;i --){
//     console.log(i)
//   }




for(let i = 0;i <=5;i++){
console.log(i)
}


for(let i = 50;i>=5;i--){
    console.log(i)
}

for(let i =1; i <=3;i ++){
    console.log("hello")
}

for(let i =15 ;i>=4;i--){
console.log(i)
}


for(let i =0;i <=20;i++){
    console.log(i)
}


for(let i =50;i >=5;i--){
    console.log(i)
}


names=["snehal","nikita","sayli"]

for(let i = 0;i <names.length;i++){
    console.log(names[i])
}

for(let i = names.length-1;i >=names;i--){
    console.log(names[i])
}


number=[44,55,88,6,44,88,22,55]
for(let i = 0; i <=number.length;i ++){
    console.log(number[i])
}




// let birthYear = [1989,1990,1991,1992]
// let q1 = birthYear.map(function(el,index,arr){
//     return 2024 - el
// })
// console.log(q1)


// let q2=birthYear.filter(function(el,index,arry){
//     return el -2024
// })
// console.log(q2)


numbers=[54,11,22,55,44,66,33,74]
let q3=number.filter(function(el,index,arry){
    return el >50
})
console.log(q3)


numbers2=[54,11,22,55,44,66,33,74]
let q4=numbers2.filter(function(el,index,arry){
    return el <44
})
console.log(q4)



let q5 = numbers.find(function(el,index,arry){
    return el >44
})
console.log(q5)

let q6 = numbers2.every(function(el,index,arry){
    return el >2
})
console.log(q6)






let birthYear=[1999,1998,1997,1996]
let age=[]
for(let i = 0; i <birthYear.length;i ++){
    console.log(i)
    let a = 2024-birthYear[i]
    age.push(a)
}
console.log(age)


