//object ---  propterty and method


//property retrive in two methods dot notation 
//and brakcket notation
let info=["snehal","kamble",24,5]

let info1={

    firstname :'snehal',
    lastname : "kamble",
    age :24,
    rollNo:5
}


console.log(info1)

//retrive

console.log(info1.firstname)
console.log(info1.lastname)
console.log(info1.age)

console.log(info1['firstname'])

///update 

info1.firstname="nikita"
console.log(info1)

info1.lastname= "kawale"
console.log(info1)

info1['firstname']= "kalyani"
console.log(info1)


//delete

delete info1.firstname
delete info1['lastname']

delete info1.age
console.log(info1)


//program2 

 Vehicle ={
  color : "white",
  type : "sedane"
 }
//retrive
 console.log(Vehicle.color)
console.log(Vehicle.type)

//update

Vehicle['color']="black"
console.log(Vehicle)

//add
Vehicle['regno']=1445115
console.log(Vehicle)


//delete
delete Vehicle.regno
console.log(Vehicle)

let names = ["snehal","nikita","manisha","laxmi"]
for (let i = 0; i < names.length;i++){
    console.log(i) //index
    console.log(names[i]) //values

}

for(let i= names.length-1;i>-1;i--){
    console.log(i)
    console.log(names[i])
}
let snehal={
    firstName:"snehal",
    lastname : "kamble",
    age : 25
}

console.log(snehal)
for(let key in snehal){
    console.log(key)
}

for(let key in snehal ){
    console.log(key,snehal[key])
}


let students=[
    {firstname :"snehal",
    lastname : 'kamble',
    age:24,

    },
    {firstname :"nikita",
    lastname : 'kamble',
    age:27,

    },
    {firstname :"sayli",
    lastname : 'jogi',
    age:22,

    }
]

console.log(students[1].firstname)
console.log(students[1].lastname)


