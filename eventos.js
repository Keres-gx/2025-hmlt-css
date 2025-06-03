console.log("Eventos");
//selecionar elementos
const nomeInput = document.getElementById("nome");
const telefoneInput = document.getElementById("telefone");
const adicionarButton = document.getElementById("adicionar");
const tabelaBody = document.getElementById("tabela-contatos");
//variáveis da tabela
const linhas = [];

function mostrarMensagem(elemento) {
    console.log(elemento);
}
//ouvir o input
nomeInput.addEventListener("input", (evento) => {
    console.log(evento.target.value);
    mostrarMensagem(nomeInput.value);
});
nomeInput.addEventListener("focus", () => {
    mostrarMensagem("Entrei no campo");
});
nomeInput.addEventListener("blur", () => {
    mostrarMensagem("Sai do campo");
});
nomeInput.addEventListener("keyup", (e) => {
    mostrarMensagem(`Apertei a tecla: ${e.key}`);
});
nomeInput.addEventListener("change", () => {
    mostrarMensagem("Quando eu mudo o valor do campo");
});

//Botao adicionar
adicionarButton.addEventListener("click", () => {
    mostrarMensagem("Cliquei");
});
//eventos de mouse
nomeInput.addEventListener("mouseenter", () => {
    mostrarMensagem("o mouse está em cima do canto");
});
nomeInput.addEventListener("mouseleave", () => {
    mostrarMensagem("o mouse saiu do campo");
});
nomeInput.addEventListener("mousedown", () => {
    mostrarMensagem("Cliquei com o mouse");
});
nomeInput.addEventListener("mouseup", () => {
    mostrarMensagem("soltou o botão do mouse");
});

//botão adicionar
adicionarButton.addEventListener("click", () => {
    mostrarMensagem("Cliquei");


    const nome = nomeInput.value.trim;
    const telefone = telefoneInput.value.trim;

    if (!nome || !telefone) {
        alert("preencha os campos.");
        return;
    }
    console.log(`Dados: \nNome: ${nome}.\nTelefone: ${telefone}`);
});

//"nome" : "Kauan"
linhas.push({nome, telefone});
console.log(linhas);
// limpar formulario
nomeInput.value = "";
telefoneInput.value = "";
nomeInput.focus();