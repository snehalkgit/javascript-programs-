
// <h1 id = "one" class = "two" name = "nm">Chinmay</h1>


let headOne = document.querySelector('h1')
let byId = document.querySelector('#one')
let byClass = document.querySelector('.two')
let byAttri = document.querySelector("h1[name = 'nm']")

console.log(headOne)
console.log(byId)
console.log(byClass)
console.log(byAttri)
console.log(headOne.textContent)
//headOne.textContent = "poorva"

headOne.addEventListener('click',function(){
    headOne.textContent = "shreya"
    headOne.style.color = "yellow"
    headOne.style.backgroundColor = "red"
})
