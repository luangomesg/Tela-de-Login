let btnRegister = document.querySelector(".btn-register");
let btnConfirm = document.querySelector(".btn-gologin");
let login1 = document.querySelector(".container-login");
let login2 = document.querySelector(".container-login2");

btnRegister.addEventListener("click", seeRegister);
btnConfirm.addEventListener("click", seeLogin);

function seeRegister() {
    login1.style.display = "none";
    if(login1.style.display == "none") {
        login2.style.display = "flex"
    }
}

function seeLogin() {
    if(login2.style.display == "flex") {
        login2.style.display = "none";
        login1.style.display = "flex";
    }
}
