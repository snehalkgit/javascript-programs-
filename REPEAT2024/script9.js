    //program 1 

    
    let info ={
        firstname : "snehal",
        lastname : " kamble",
        displayname:function(){
            console.log(this.firstname + this.lastname)

        }
    }

    let info2={
        firstname : "nikita",
        lastname : " kamble"
    }

    let  displayname1 =info.displayname

    displayname1() // not a number undefined 


    //bind()
    let a1=displayname1.bind(info2)
    let q1 = function(){
        console.log(info2.firstname+ info2.lastname)
    }

q1()

//program 2 


let sayli={
    firstname: "sayli",
    lastname: "jogi"

}
let vrushali={
    firstname: "vrushali",
    lastname: "patil"
    
}
let ajay={
    firstname: "ajay",
    lastname: "jawade"
    
}

let displayaname3=function(){
    console.log(this.firstname+ this.lastname)
}

displayaname3.bind(sayli)()
displayaname3.bind(vrushali)()
displayaname3.bind(ajay)()

//program 3


let sayali1={
    firstname: "sayli",
    lastname: "jogi"

}
let vrushali1={
    firstname: "vrushali",
    lastname: "patil"
    
}
let ajay1={
    firstname: "ajay",
    lastname: "jawade"
    
}

let displayaname4 = function(greet){
    console.log(this.firstname+ this.lastname)
    console.log(greet)
}


displayaname4.call(sayali1,"hee")
displayaname4.call( vrushali,"hii am vrushali")
displayaname4.call(ajay,"im ajay")



displayaname4.apply(sayali1,["bye","hii","heello","byeee"])


