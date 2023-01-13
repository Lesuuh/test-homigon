
function previewMultiple(event){
        var saida = document.getElementById("additionalfoto");
        var quantos = saida.files.length;
        for(i = 0; i < quantos; i++){
            var urls = URL.createObjectURL(event.target.files[i]);
            document.getElementById("galeria").innerHTML += '<img src="'+urls+'">';
        }
}



function confirmListing(){
    var listingConfrimation = document.getElementById("listing-confirmation");
    var finishListing = document.getElementById("finish-listing");

    finishListing.addEventListener("click", function(){
        listingConfrimation.style.display = "block"
    })
}

console.log(confirmListing)



























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
