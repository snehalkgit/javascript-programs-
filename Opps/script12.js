//program 1 

class calculator {

    addition(x, y) {
        console.log(x + y)
    }
    addition(x, y, z) {
        console.log(x + y + z)
    }
    addition(x, y, z, a) {
        console.log(x + y + z + a)

    }

}
let add = new calculator()
add.addition(12, 5)
add.addition(12, 5, 5, 6)



//program2 
class calculatorB {

    addition(x, y, z, a) {
        if (x != undefined && y != undefined && z != undefined && a != undefined) {
            console.log(x + y + z + a)   
    }
    else if (x != undefined && y != undefined && z != undefined) {
        console.log(x + y + z)
    }
    else if (x != undefined && y != undefined) {
        console.log(x + y)
    }
}
}

let addB =  new calculatorB()
addB.addition(12,3)
addB.addition(12,3,4)
addB.addition(55,4,8,56)

// program 3

class WorldBank {

    save(){
        console.log("I am save from worldbank")
    }

    loan(){
        console.log("I am loan from worldbank")
    }

}

class SBI extends WorldBank{
    save(){
        console.log("I am save from SBI")
        super.save()
    }
    loan(){
        console.log("I am loan from SBI") 
        super.loan()
    }
}

let h = new SBI()
h.loan()
h.save()


