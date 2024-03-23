 let buttonOne = document.querySelector('button')
   let ulList = document.querySelector('ul')
  let liList =   document.querySelector('li')
  console.log(buttonOne)
  console.log(ulList)
  console.log(liList)

  let nodelistLi = document.querySelectorAll('li')
  console.log(nodelistLi)


  buttonOne.addEventListener('click',function(){
    ulList.style.color = "pink"
  })

  for(let i = 0;i <nodelistLi.length;i ++){
    //console.log(nodelistLi[i]).textContent()
    if(i %2 ==0){
        nodelistLi[i].style.color= "RED"
        nodelistLi[i].textContent = nodelistLi[i].textContent.toUpperCase()
    }
    else{
        //0[i].style.color= "pink"
        nodelistLi[i].textContent = nodelistLi[i].textContent.toLocaleLowerCase()
    }
  }