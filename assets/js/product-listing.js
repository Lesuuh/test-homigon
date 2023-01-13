// let seeMore = document.getElementById("seemore");
// let filterModal = document.getElementById("filter-modal");


// seeMore.addEventListener("click", function(){
//     filterModal.style.display = "flex"
    
// })


var seeMore = document.getElementById("seemore")
var filterModal = document.getElementById("filter-modal")

var filterIcon = document.getElementById("filter-icon")


function openfiltermodal() {
    filterModal.style.display = "flex"
}


filterIcon.addEventListener("click", function(){
    if (filterIcon.style.display = "block") {
        filterModal.style.display ="flex"
        
    } else {
        
    }
})



window.onclick = function(event){
    if(event.target == filterModal){
        filterModal.style.display = "none"
    }
}


// document.addEventListener("click", function(event){
//     if(!event.target.closest(filterModal)){
//         closeModal()
//     }
// })

// function closeModal(){
//     filterModal.style.display = "none"
// }