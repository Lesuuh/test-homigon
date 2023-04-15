
// opening and closing of  verify email modal
var verifyEmailAgent = document.getElementById("verify-email-agent");
var openEmailVerification = document.getElementById("create-account-verify")




openEmailVerification.addEventListener("click", function(){
    verifyEmailAgent.style.display = "block"
})

// window.addEventListener("click", (event) => {
//     if(event !== verifyEmailAgent){
//         verifyEmailAgent.style.display = "none"
//     }
// })
