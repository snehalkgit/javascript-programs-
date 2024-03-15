let buttonone = document.querySelector('#one')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')

buttonone.addEventListener('click',function(){
     let  text = inputText.value
      let newLi = document.createElement('li')
      newLi.textContent = text

      createButton("Remove",'remove',newLi)
      createButton("up",'up',newLi)
      createButton("Down",'down',newLi)

      ulList.appendChild(newLi)
      inputText.value = " "
})

function createButton(textContent, className ,li){
  let newButton = document.createElement('button')
  newButton.textContent = textContent
  newButton.classList.add(className)
  li.appendChild(newButton)
}



// function createButton(li){
//     let R = document.createElement('button')
//     R.textContent = "REMOVE"
//     R.classList.add('remove')
//    li.appendChild(R)

//     let U = document.createElement('button')
//     U.textContent = "UP"
//     UclassList.add('up')
//     li.appendChild(U)

//     let D = document.createElement('button')
//     D.textContent = "DOWN"
//     D.classList.add('down')
//     li.appendChild(D)
// }
