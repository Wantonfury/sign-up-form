let btn = document.getElementById("btn-create");
let form = document.getElementById("form");
let pwd = document.getElementById("pwd");
let pwd_confirm = document.getElementById("pwd-confirm");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (checkPassword())
        form.submit();
    else {
        pwd.classList.add("error");
        pwd_confirm.classList.add("error");
    }
});

let checkPassword = () => {
    if (pwd.value == pwd_confirm.value) return true;
    return false;
}