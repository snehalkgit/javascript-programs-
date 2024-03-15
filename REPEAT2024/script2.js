    let info=[
        { firstname :"snehal",
        lastname : "kamble",
        age : 26,
        skills:["python","java","javascript","css"],
        city:"pune"

        },
        {firstname :"nikita",
        lastname : "kale",
        age : 24,
        skills:["css","java","javascript","sql"],
        city:"nagpur"


        },
        {firstname :"sayli",
        lastname : "jogi",
        age : 25,
        skills:["jss","sql","typrscrit","css"],
        city:"mumbai"
        }
    ]
    console.log(info[1].firstname)
    console.log(info[2].lastname)
    console.log(info[1]['skilss'])
    console.log(info[2]['city'])



//loop
//firstname of all students

for(let i = 0; i <info.length;i++){
    console.log(info[i].firstname)
}


//students with mumbai city

for(let i = 0;i < info.length;i++){
    if (info[i].city === "mumbai"){
        console.log(info[i].firstname)
    }
}


//students in mumbai and above 20 


for(let i= 0;i <info.length;i++){
    if(info[i].age < 20 && info[i].city === "mumbai"){
        console.log(info[i].firstname)
    }
}


// add css skill to every student
for(let i = 0 ; i < info.length ; i++){
    info[i].skills.push("css")
}
console.log(info)

// name:numberofSkills
for(let i = 0 ; i < info.length ; i++){
    console.log(info[i].firstname + ":"+ info[i].skills.length)
}
// average age of all students
let a1 = info.reduce(function(acc,el){
        return el.age + acc
},0)
console.log(a1/info.length)