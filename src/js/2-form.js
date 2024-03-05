const form = document.querySelector('.feedback-form');
let emailInput = document.getElementsByTagName("input")[0];
let messageInput = document.getElementsByTagName("textarea")[0];

if (localStorage.getItem("feedback-form-state") != null) {
    const feedback = localStorage.getItem("feedback-form-state")
    const parsedFeedback = JSON.parse(feedback);
    emailInput.value = parsedFeedback.email;
    messageInput.value = parsedFeedback.message;
}

form.addEventListener("input", (event) => {
    const email = emailInput.value;
    const message = messageInput.value;

    const feedback = {
        email,
        message
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(feedback))

});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const feedback = {
        email,
        message
    }
    console.log(feedback)

    localStorage.removeItem("feedback-form-state");
    form.reset();

});