//switch case 

//program 1

let city = "indore"
switch (city) {
    case "pune":
        console.log('MH')
    case "mumbai":
        console.log('MH')
    case "indore":
        console.log('MP')
    default:
        console.log("incorrect city name")
}

//program 2

// case with break statments
let city2 = "mumbai"
switch (city2) {
    case "pune":
        console.log("MH")
        break
    case "mumbai":
        console.log("MH")
        break
    case "indore":
        console.log("MP")
    default:
        console.log("incorrect city name")

}

//program 3

let city3 = "nagpur"
switch (city3) {
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "banglore":
    case "mysore":
        console.log("KA")
        break
    case "jaipur":
    case "udaipur":
 console.log("RJ")
    default:
        console.log("incorrect city name ")

}



//loop

//print 3 times  "hello"

for(let i =1;i <=3; i ++){
    console.log("hello")
}

//print 1 to 5 

 for(let i =1; i <=5; i ++){
    console.log(i)
 }

  //print 5 to 1 
   for( let i =5;i >=1 ;i --){
    console.log(i)
   }

   //table of 2 
    for(let i =2;i <=20; i ++){
        console.log(i)
    }

    //table of 3 
     for(let i =3 ; i <=30 ;i ++){
        console.log(i)
     }

     //table of 5 in reverse 
      for ( let i =50; i >= 5;i= - 5){
        console.log(i)
     }


    //with break

    for(let i =1 ; i <=5; i++){
        if(i==3){
            break
        }
        console.log(i)
    }

    ////
 for(let i = 1 ; i <=5 ; i ++){
    console.log(i)
 }

  for(let i = 1 ;i <=5 ;i ++){
    if(i == 2){
     break
    }
console.log(i)
    }
    /////
  
    for(let i = 5 ; i >=1; i --){
        if(i == 2 ){
            break
        }
        console.log(i)
    }


//continue
 for (let i = 1; i <=5; i ++){
    if(i==3){
        continue
    }
    console.log(i)
 }

 for(let i = 1 ; i >=5; i++){
    if(i ==2){
    continue
    }
    console.log
 }

// for(intialization ; conditionCheck ; increment/decrement){
//     // statement
// }

// intilialization
// while(condition){
//     // statement
//     // increment / decrement
// }


/// program 4
let i1 = 1
while(i1<=3) {
    console.log("hello")
    i1 ++;
}




//program 5 
 let i2 = 5
 while(i2  <= 5){
    console.log(i2)
    i2 ++;
 }
 

// table of 2 
  let i4 = 2
  while(i4<=20){
    console.log(i4)
    i4= i4 + 2 
  }

 let i5 = 1
 while(i5<=10){
    console.log(i5*2)
    i5++
 }
// table of 5 in reverse 
 
 let i6 = 1
 while(i6 >=5){
    console.log(i6 -5)
    i6 = i6
 }


  /// break sataments with loop 
   
 let i7 = 1
 while(i7<=5){
if(i7==3){
    break 
}
console.log(i7)
i7 ++
 }

 let i8 = 5
 while(i8 >=1){
    if(i8==2)
    break
{
    console.log(i8)
    i8--
} }
     

 let i9 = 1
 while(i9<=5){
    if(i9 ==3){
        i9 ++
        continue 
    }
    console.log(i9)
    i9++
 }