var hamburgerOpen = document.getElementById("hamburgeropen");
var hamburgerClose = document.getElementById("hamburgerclose")
var navdropdown = document.getElementById("navdropdown");
// var blur = document.getElementById("blur")
var navbar = document.getElementById("navbar")
var none = document.getElementById("none")
var hero = document.getElementById("hero")


var radioBtns = document.querySelectorAll(".radio-btn")

radioBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    radioBtns.forEach((button, i) => {
      if(i !== index){
        button.classList.remove("active")
      }else{
        button.classList.add("active")
      }
    })
  })
})

// function changeColor(clickedButton) {
//   const buttons = document.querySelectorAll('button');

//   buttons.forEach(function(button) {
//     button.classList.remove('active');
//   });

//   clickedButton.classList.add('active');
// }





var open = false;
hamburgerOpen.addEventListener("click", function(){

    if(open == false){
        navdropdown.style.display = "block"; 
        // blur.style.opacity = 0.5 
        open = true
    }
})

hamburgerClose.addEventListener("click", function(){
  if(open == true){
    navdropdown.style.display = "none"
    // blur.style.opacity = 1
    open = false
  }
})


// dropdown select

const selectedAll = document.querySelectorAll(".selected");

selectedAll.forEach((selected) =>{
  const optionsContainer = selected.previousElementSibling;
  
  const optionsList = optionsContainer.querySelectorAll(".option")

  selected.addEventListener("click", function(){
    optionsContainer.classList.toggle("active");
  })

  optionsList.forEach(o=>{
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");

    })
  })


})


AOS.init();


