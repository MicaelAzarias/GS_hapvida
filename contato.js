
var btnContatos = document.querySelector("#contatos");
var btnConta = document.querySelector("#conta");

var body = document.querySelector("body");


btnContatos.addEventListener("click", function () {
    body.className = "contatos-js";
});

btnConta.addEventListener("click", function() {
    body.className = "conta-js";
});
