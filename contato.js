var btnContatos = document.querySelector("#contatos");
var btnConta = document.querySelector("#conta");

var body = document.querySelector("body");


btnContatos.addEventListener("click", function () {
    body.className = "contatos-js";
});

btnConta.addEventListener("click", function() {
    body.className = "conta-js";
});

//------------------------------------------------- 

const form = document.getElementById("formulario");
const nameInput = document.getElementById("username");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    //validação se o nome esta vazio 
    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("por favor, preencha seu email");
        return;
    }

    form.submit()
})


function isEmailValid(email) {

    const emialRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emialRegex.test(email)) {
        return true;
    }

    return false;
}
