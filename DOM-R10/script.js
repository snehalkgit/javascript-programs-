
let headOne = document.querySelector('h1')
console.log(headOne)
let buttonA = document.querySelector('button')

// class attribute
console.log(headOne.className)
//headOne.className = "five"
headOne.classList.add('seven')
headOne.classList.remove("two")
headOne.classList.toggle('three')
headOne.classList.toggle('three')

// retrive 
let a1 = headOne.getAttribute('id')
console.log(a1)
headOne.setAttribute('id',"nine")
headOne.setAttribute('data-cy',"cypress")
headOne.removeAttribute('id')

// element retrive , create , update delete
// element attribute retrive , add , update , delete

buttonA.addEventListener('click',function(){
    headOne.classList.toggle('blue')
    headOne.classList.toggle('red') 
})