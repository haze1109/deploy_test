let submitBtn = document.getElementById("submitBtn");
let email = document.getElementById("email");
let password = document.getElementById("password");
let helpText = document.getElementById("help-text");

submitBtn.onmouseover = () => {
    if (validateEmail(email.value) && password.value.length > 8) {
        helpText.innerText = "Now you can submit"
    } else {
        if (submitBtn.style.alignSelf === "flex-end") {
            submitBtn.style.alignSelf = "flex-start"
        }
        else {
            submitBtn.style.alignSelf = "flex-end"
        }
        helpText.innerText = "You cannot submit until your email is validated and password is greater than 8 characters"
    }  
}