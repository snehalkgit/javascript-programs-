let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#addButton')
console.log(ulList)
console.log(inputText)
console.log(buttonA)

buttonA.addEventListener('click',function(){
    let txt = inputText.value
    let newE = document.createElement("li") 
    newE.textContent = txt 
    CreatButtons(newE)
    ulList.appendChild(newE)

})
function CreatButtons(li){
    let r = document.createElement('button') 
       r.textContent = "Remove" 
    r.classList.add('remove') 
    li.appendChild(r)

    let u = document.createElement('button') 
    u.textContent = "Up" 
    u.classList.add("up") 
    li.appendChild(u) 

    let d = document.createElement("button")
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)

}