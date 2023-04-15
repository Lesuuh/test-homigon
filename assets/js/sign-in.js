var forgotPasswordOpen = document.getElementById("forgot-password-open")
var forgotPassword = document.getElementById("forgot-password")
var forgotPasswordClose = document.getElementById("forgot-password-close")
var resetPasswordOpen = document.getElementById("reset-password-open")
var resetPassword = document.getElementById("reset-password")
var resetPasswordClose = document.getElementById("reset-password-close")
var preventSubmit = document.getElementById("preventSubmit")
var newPassword = document.getElementById("new-password") 
var newPasswordClose = document.getElementById("new-password-close")




forgotPasswordOpen.addEventListener("click", function(){
    forgotPassword.style.display = "block"

})

forgotPasswordClose.addEventListener("click", function(){
    forgotPassword.style.display = "none"
})


resetPasswordOpen.addEventListener("click", function(){
    resetPassword.style.display = "block"
    forgotPassword.style.display = "none"
    var forgot_password_email = document.getElementById("forgot_password_email");
    var email = forgot_password_email.value;

})





// toggle password

function togglePassword() {
    var passwordInput = document.getElementById("password-input");
    var passwordIcon = document.getElementById("password-icon")
    var passwordIconClose = document.getElementById("password-icon-close");

    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.style.display = "none"
        passwordIconClose.style.display = "block"

        
    }else{
        passwordInput.type = "password"
        passwordIcon.style.display = "block"
        passwordIconClose.style.display = "none"
    }
    
}

// preventSubmit

preventSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    newPassword.style.display = "block"

})

newPasswordClose.addEventListener("click", (e) => {
    newPassword.style.display = "none"
    resetPassword.style.display = "none"
})