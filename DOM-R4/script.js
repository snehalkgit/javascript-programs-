let headone = document.querySelector('h1')
console.log(headone)

let button = document.querySelector('button')
console.log(button)

button.addEventListener('click',function(){
    headone.style.color= "blue"

})

let input = document.querySelector('input')
console.log(input)

button.addEventListener('click',function(){

    let colortext= input.value
    headone.style.color = colortext
    input.value= " "
})       