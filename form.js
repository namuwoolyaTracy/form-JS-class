const signUpform = document.getElementById("signup-form");
const messegeArea = document.getElementById("message-area");

console.log(signUpform);
signUpform.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === ""){
        messegeArea.textContent = "Please enter your name";
        messegeArea.style.color = "red";
    } else if (email === "") {
        messegeArea.textContent = "Please enter your name";
        messegeArea.style.color = "red";

    } else{
        messegeArea.textContent = "Thank you for siging up," + name +"";
        messegeArea.style.color = "green";
    }

});