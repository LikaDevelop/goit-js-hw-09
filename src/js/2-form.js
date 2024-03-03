const form = document.querySelector('.feedback-form');

if (localStorage.getItem("feedback-form-state") != null) {
    const feedback = localStorage.getItem("feedback-form-state")
    const parsedFeedback = JSON.parse(feedback);
    document.getElementsByTagName("input")[0].value = parsedFeedback.email;
    document.getElementsByTagName("textarea")[0].value = parsedFeedback.message;
}

form.addEventListener("input", (event) => {
    event.preventDefault();
    const email = document.getElementsByTagName("input")[0].value.trim();
    const message = document.getElementsByTagName("textarea")[0].value.trim();

    const feedback = {
        email,
        message
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(feedback))

});

form.addEventListener("submit", (event) => {
    const email = document.getElementsByTagName("input")[0].value.trim();
    const message = document.getElementsByTagName("textarea")[0].value.trim();

    const feedback = {
        email,
        message
    }
    console.log(feedback)

    localStorage.clear();
    form.reset();

});