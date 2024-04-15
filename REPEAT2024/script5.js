//INHERITANCE

//progarram 1

class Student{
    firstname ="snehal"
    lastname = "kamble"

    displayname(){
        console.log(this.firstname+this.lastname)
    }

}
class Teacher extends Student{
    salary = 50000
}