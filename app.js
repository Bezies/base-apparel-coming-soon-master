const mail = document.querySelector("#email")

function validate(mail) {
    let regx = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (regx.test(mail)) {
        return true
    } else {
        return false
    }
}

const submit = document.querySelector("#submit")

submit.addEventListener("click", () => {
    const errors = document.querySelectorAll(".error");
    const icon = document.querySelector("#icon-error");
    const message = document.querySelector("#error-message");

    if (validate(mail.value) === false) {
        errors.forEach(error => {
            error.classList.replace("error", "error-mail");
            mail.style.border = "2px solid hsl(0, 93%, 68%)"
        });
    } else {
        icon.style.display = "none";
        message.style.display = "none";
        mail.style.border = "1px solid hsl(0, 36%, 70%)";
    }
})