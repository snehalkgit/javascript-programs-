//<h1 id = "one" class = "two" name = "nm">Snehal</h1>

//bytagname 
 let tagname = document.querySelector('h1')
 console.log(tagname)

 //byid

  let byid= document.querySelector('#one')
console.log(byid)

// byclassname 

let byclassname= document.querySelector('.two')
console.log(byclassname)

//byattrribute

 let byattrribute= document.querySelector('h1[class="two"]')
 console.log(byattrribute)



 byattrribute.addEventListener('click',function(){
    byattrribute.textContent="bye"
    byattrribute.style.color="blue"
 })


 console.log(byattrribute.textContent)

 