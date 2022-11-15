let btn = document.getElementById("btn-create");
let form = document.getElementById("form");
let pwd = document.getElementById("pwd");
let pwd_confirm = document.getElementById("pwd-confirm");
let pwd_error = document.getElementById("pwd-error");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (checkPassword()) {
        pwd.classList.remove("error");
        pwd_confirm.classList.remove("error");
        pwd_error.classList.add("hidden");
        
        form.submit();
    }
    else {
        pwd.classList.add("error");
        pwd_confirm.classList.add("error");
        pwd_error.classList.remove("hidden");
    }
});

let checkPassword = () => {
    if (pwd.value == pwd_confirm.value) return true;
    return false;
}