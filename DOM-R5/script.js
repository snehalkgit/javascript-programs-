let ulList = document.querySelector('ul')
console.log(ulList)
let buttonA  = document.querySelector('button')
let inputText = document.querySelector('input')

buttonA.addEventListener('click',function(){
    let text = inputText.value // "papaya"
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text 
    ulList.appendChild(newLi)
    inputText.value = " "

})