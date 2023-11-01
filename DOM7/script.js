// let headOne = document.querySelector('h1')
// let inputText = document.querySelector('input')
// let buttonA = document.querySelector('button')

// console.log(headOne)
// console.log(inputText)
// console.log(buttonA)

 let headone =  document.querySelector('h1')
 console.log(headone)
  let inputText=  document.querySelector('input')
  console.log(inputText)
   let buttonA= document.querySelector('button')
   console.log(buttonA)

   buttonA.addEventListener('click',function(){
     let colorText = inputText.value
     headone.style.color = colorText
     inputTex. value = " "
   })