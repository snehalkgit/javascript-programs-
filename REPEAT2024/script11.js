//program 1 

 var firstname = "nikita"
 var lastname = " kamble"


 //console.log(window.firstname)

 let sk={
    firstname :"snehal",
    lastname : "kamble",
    displayname : function(){
        console.log(this.firstname+ this.lastname)
         let displayname2 = function(){
            //window function --- this

            console.log(this.firstname+ this.lastname)
         }
         displayname2()
    }
 }
 sk.displayname()

 //program 2
 let info={
    firstname :"sarika",
    lastname : "kawale",
    displayname : ()=>{
        console.log(this.firstname+ this.lastname)
         let displayname2=()=>{
            //window function --- this

            console.log(this.firstname+ this.lastname)
         }
         displayname2()
    }
 }
 info.displayname()





 let info2={
    firstname : "niki",
    lastname : " kawale",
    displayname3: function(){
        console.log(this.firstname+ this.lastname)
    let  displayname4 =()=>{
    console.log(this.firstname+this.lastname)
}
displayname4()
    }
 }

 info2.displayname3()