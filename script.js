let color1=document.getElementById('color1')
let color2=document.getElementById('color2')
let border=document.getElementById('border')
// let container = document.querySelector('.container')[0]
// console.log('hi')
let gradient1= "#703E3E"

let gradient2="#703E2E"

let deg="90deg"
let bg=document.getElementById('bg')
let two=document.getElementsByClassName("two")[0]
function setbg(){
    two.innerText=`linear-gradient(${deg}, ${gradient1} 0%, ${gradient2} 100%)`
    border.style.background=`linear-gradient(${deg}, ${gradient1} 0%, ${gradient2} 100%)`
   
}

color1.addEventListener('input',()=>{
        gradient1 = color1.value
        setbg()

});
color2.addEventListener('input',()=>{
    gradient2 = color2.value
    setbg()


});

let joke3=document.getElementById('joke3')
let joke4=document.getElementById('joke4')
joke3.addEventListener('click', ()=>{
    deg="0deg"
    setbg()
})
joke4.addEventListener('click', ()=>{
    deg="90deg"
    setbg()
})
function myFunction() {

    let copyText = document.getElementById("bg");
    
    
    
    navigator.clipboard.writeText(copyText.innerText);
     
  
    
    alert("Copy to clickboard");
  }

// two.innerText="background"+`linear-gradient(${deg}, ${gradient1} 0%, ${gradient2} 100%)`