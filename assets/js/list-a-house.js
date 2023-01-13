
var expanded = false;
// var checkboxes = document.getElementById("checkboxes");

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
  
}

// var checkboxes = document.getElementById("checkboxes");

// window.onclick = function(event){
//     if(event.target == checkboxes){
//         checkboxes.style.display = "none"
//     }
// }
