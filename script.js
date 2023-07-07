let signUpBtn = document.querySelector("#sign-up-btn");

// Password confirmation
let pswdBtn = document.querySelector("#pswd");
let pswdConfBtn = document.querySelector("#pswd-conf");
let errorP = document.querySelector(".non-match");

signUpBtn.addEventListener("click", (e) => {
    let pswrd = pswdBtn.value;
    let pswrdConf = pswdConfBtn.value;
    
    if (!(pswrd == pswrdConf)) {
        pswdBtn.value = "";
        console.log("3");
        pswdConfBtn.value = "";
        errorP.textContent = "🚩 Your passwords must match";
    } else {
        errorP.textContent = "";
    }
})