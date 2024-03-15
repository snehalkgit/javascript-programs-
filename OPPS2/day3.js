// object literal 
let x = {
    firstName: "snehal",
    lastName: "kamble",
    age: 24,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
console.log(x.firstName)
console.log(x.lastName)
console.log(x.age)
x.display()



let y = {
    firstName: "archna",
    lastName: "kanuje",
    age: 28,
    display: function () {
        console.log(this.fir2stName + this.lastName)
    }
}
y.display()

// function constructor 
function Person(fn, ln, age) {
    this.firstName = fn
    this.lastName = ln
    this.age = age
    this.display = function () {
        console.log(this.firstName + this.lastName)
    }
}

let z = new Person("snehal", "kamble", 24)
z.display()
console.log(z)

function Vehicle(cl, type) {
    this.color = cl
    this.type = type
}
let tata = new Vehicle("blue", "xz")

// Es6 class
class PersonD {
    constructor(fn, ln, age) {
        this.firstName = fn
        this.lastName = ln
        this.age = age

    }
    display() {
        console.log(this.firstName + this.lastName)
    }
}

let ab = new PersonD("ab", "ab2", 45)
console.log(ab.firstName)
console.log(ab.lastName)
console.log(ab.age)
ab.display()


class Bank {
    constructor(fn, bal) {
        this.fullName = fn
        this.balance = bal
        this.transaction = []
    }

    deposit(amt){
        this.balance = this.balance + amt
        this.transaction.push(amt)
        return this.balance
    }

    withdrawl(amt){
        if(amt < this.balance){
            this.balance = this.balance - amt
            this.transaction.push(-amt)
        }
        else{
            console.log("Insuffcient fund")
        }
        return this.balance
    }

    lastThreeTransactions(){
        return this.transaction.slice(-3)
    }
}

let bank = new Bank("sayali jogi",1250000000)
console.log(bank.withdrawl(19000))
bank.withdrawl(19000)
bank.withdrawl(2000)
bank.deposit(190)
console.log(bank.lastThreeTransactions())
