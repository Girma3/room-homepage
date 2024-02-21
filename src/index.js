import './style.css'
const navHolder = document.querySelector('.nav-holder');
const closeNavbtn = document.querySelector('.close-nav-btn');
const openNavbtn = document.querySelector('.open-nav-btn');
const firstNav = document.querySelector('.first-nav');
const secondNav  =document.querySelector('.second-nav');
const links = document.querySelector('.links');
closeNavbtn.addEventListener('click', () => {
  if( secondNav.getAttribute("data-spread") === "true"){
    firstNav.setAttribute("data-spread",true) 
    secondNav.setAttribute("data-spread","false")
    navHolder.style.backgroundColor = "transparent";
   }
  
   
});
openNavbtn.addEventListener('click',()=>{
    if(secondNav.getAttribute("data-spread") === "false") {
         firstNav.setAttribute("data-spread",false) 
         secondNav.setAttribute("data-spread",true)
         navHolder.style.backgroundColor = "white";
       
       
        }
})
