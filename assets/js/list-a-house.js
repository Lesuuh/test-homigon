

// first section
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


const formm = document.getElementById("formm");
const reset = document.getElementById("reset")

reset.addEventListener("click", ()=> {
  formm.reset()
})


const firstSection= document.getElementById("first-section");
const nextSection = document.getElementById("next-section")
const nextPage = document.getElementById("next-page")
const previousPage = document.getElementById("previous-page")


nextPage.addEventListener("click", ()=> {
  nextSection.style.display = "block"
  firstSection.style.display = "none"
  
})

previousPage.addEventListener("click", ()=> {
  firstSection.style.display = "block"
  nextSection.style.display = "none"
})


// second section




const uploadBtn = document.getElementById("upload-btn");
const previewBox = document.querySelectorAll(".preview-box");

// to make the button trigger the input file
uploadBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    document.querySelector('#input').click();
    previewBox.forEach((box)=> {
        box.style.display = "none"
    })

});


const input = document.getElementById("input");
const preview = document.getElementById("preview");

input.addEventListener("change", () => {
    const files = input.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const src = URL.createObjectURL(file);
      const alreadyAdded = preview.querySelector(`img[src="${src}"]`);
      if (!alreadyAdded) {
        const img = document.createElement("img");
        img.src = src;
        preview.appendChild(img);
      }
    }
  });











function confirmListing(){
    var listingConfrimation = document.getElementById("listing-confirmation");
    var finishListing = document.getElementById("finish-listing");

    finishListing.addEventListener("click", function(){
        listingConfrimation.style.display = "block"
    })
}

// console.log(confirmListing)



























// function sizeValidation(){
//     var inputElement = document.getElementById("additionalfoto");
//     var files = inputElement.files;


//     if(files.length == 0){
//         alert("please choose a file")
//         return false
//     }

//     for (var i = 0; i < files.length; i++) {
//         var fileSize = files[i].size;

//         var size = Math.round((fileSize / 1024));

//         if(size <= 5*1024){
    
//             var finishListing = document.getElementById("finish-listing");
//             var listingConfirmation = document.getElementById("listing-confirmation")
    
//             finishListing.addEventListener("click", function(){
//             listingConfirmation.style.display ="block"
//             })
//         }
//         // else{
//         //     alert("invalid file size, Please select a file less than or equal to 5mb")
//         // }
        
//     }
   


// }
