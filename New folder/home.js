function checkForm(){
    const fname = document.getElementById("fullName");
    const email = document.getElementById("email");
    const password = document.getElementById("password")
    const confirm = document.getElementById("passwordConfirm");
    const error = document.getElementById("formErrors")
    
    
    let errorMsg = [];
    let name = fname.value.trim();
    let mail = email.value.trim();
    let pass = password.value;
    let same = confirm.value;
    


    fname.classList.remove("error");
    email.classList.remove("error");
    password.classList.remove("error");
    confirm.classList.remove("error");

    fname.classList.add("hide")
    email.classList.add("hide")
    password.classList.add("hide")
    confirm.classList.add("hide")

    let mailRexgen = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
    const lowercase = /[a-z]/;
    const uppercase = /[A-Z]/
    const digit = /[0-9]/

    if(!(name.length >= 1)){
        errorMsg.push("Missing full name")
        fname.classList.add("error");
    }
    if(!(mailRexgen.test(mail))){
        errorMsg.push("Invalid or missing email address");
        email.classList.add("error")
    }
    if(!(pass.length >= 10 && pass.length < 20)){
        errorMsg.push("Password must be between 10 and 20 characters.");
        password.classList.add("error");
    }
    if(!(lowercase.test(pass))){
        errorMsg.push("Password must contain at least one lowercase character");
        password.classList.add("error");
    }
    if(!(uppercase.test(pass))){
        errorMsg.push("Password must contain at least one uppercase character");
        password.classList.add("error");
    }
    if(!(digit.test(pass))){
        errorMsg.push("Password must contain at least one digit.");
        password.classList.add("error");
    }
    if(!(same === pass)){
        errorMsg.push("Password and confirmation password don't match");
        password.classList.add("error")
    }

    if(errorMsg.length > 0){
        error.classList.remove(".hide");
        let errorHtml = "<ul>"
        for(let i = 0; i < errorMsg.length; i++){
            errorHtml += "<li>" + errorMsg[i] + "</li>"
        }
        errorHtml += "</ul>"
        error.innerHTML = errorHtml;
    }else{
        error.classList.add("hide")
        error.innerHTML = "";
    }
    

}
document.getElementById("submit").addEventListener("click", function (event) {
   event.preventDefault();
   checkForm();
   // Prevent default form action. DO NOT REMOVE THIS LINE

});
        