document.addEventListener("DOMContentLoaded", () => {
    const usernameEl = document.querySelector("#name");
    const emailEl = document.querySelector("#email");
    const messageEl = document.querySelector("#message");
    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const messageError = document.querySelector("#messageError");
    const formEl = document.querySelector("#form");

    const isRequired = (value) => (value === "" ? false : true);

    const isEmailValid = (email) => {
        const regex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    };

    function checkName() {
        let valid = false;
        const username = usernameEl.value.trim();
        if (!isRequired(username)) {
            nameError.textContent = "Please enter your name";
            usernameEl.classList.remove("input-border-valid");
            usernameEl.classList.add("input-border-invalid");
        } else {
            nameError.textContent = "";
            usernameEl.classList.remove("input-border-invalid");
            usernameEl.classList.add("input-border-valid");
            valid = true;
        }
        return valid;
    }

    function checkEmail() {
        let valid = false;
        const email = emailEl.value.trim();
        if (!isRequired(email)) {
            emailError.textContent = "Please enter your email";
            emailEl.classList.remove("input-border-valid");
            emailEl.classList.add("input-border-invalid");
        } else if (!isEmailValid(email)) {
            emailError.textContent = "Please enter a valid email address";
            emailEl.classList.remove("input-border-valid");
            emailEl.classList.add("input-border-invalid");
        } else {
            emailError.textContent = "";
            emailEl.classList.remove("input-border-invalid");
            emailEl.classList.add("input-border-valid");
            valid = true;
        }
        return valid;
    }
    function checkMessage() {
        let valid = false;
        const message = messageEl.value.trim();
        if (!isRequired(message)) {
            messageError.textContent = "Please enter your message";
            messageEl.classList.remove("input-border-valid");
            messageEl.classList.add("input-border-invalid");
        } else {
            messageError.textContent = "";
            messageEl.classList.remove("input-border-invalid");
            messageEl.classList.add("input-border-valid");
            valid = true;
        }
        return valid;
    }

    formEl.addEventListener("submit", (event) => {
        event.preventDefault();
        const isNameValid = checkName();
        const isEmailValidFlag = checkEmail();
        const isMessageValid = checkMessage();
        if (isNameValid && isEmailValidFlag && isMessageValid) {
            formEl.submit();
        }
    });
});
