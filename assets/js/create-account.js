var verifyEmail = document.getElementById("verify-email");
var openEmailVerification = document.getElementById("create-account-verify")




openEmailVerification.addEventListener("click", function(){
    verifyEmail.style.display = "block"
})


window.addEventListener("click", (event) => {
    if(event !== verifyEmailAgent){
        verifyEmailAgent.style.display = "none"
    }
})
