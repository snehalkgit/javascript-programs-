let ulList = document.querySelector('ul')
let buttonA = document.querySelector('button')
let inputText = document.querySelector('input')
buttonA.addEventListener('click',function(){
    let fruitText = inputText.value 
    let newList = document.createElement('li') 
    newList.textContent = fruitText 
    ulList.appendChild(newList)
    inputText.value  = " "
})

 
 


