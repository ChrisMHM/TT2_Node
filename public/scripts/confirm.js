let password = document.getElementById("input-password")
let confirm_password = document.getElementById("input-password-confirm");

const validatePassword = () => {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Las contraseñas no coinciden");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;