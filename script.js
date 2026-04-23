const input = document.querySelector("#input");
const button = document.querySelector("#button");
const lista = document.querySelector("#lista");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function criarItem(texto) {
  const item = document.createElement("li");
  item.textContent = texto;

  const deleteBotao = document.createElement("button");
  deleteBotao.textContent = "deletar";
  deleteBotao.className = "botao-deletar";
  deleteBotao.addEventListener("click", function () {
    item.remove();
    tarefas = tarefas.filter((t) => t !== texto);
    salvarTarefas();
  });

  item.appendChild(deleteBotao);
  lista.appendChild(item);
}

// carrega as tarefas salvas quando a página abre
tarefas.forEach(function (texto) {
  criarItem(texto);
});

// adiciona nova tarefa ao clicar no botão
button.addEventListener("click", function () {
  const texto = input.value;
  if (!texto) return;

  tarefas.push(texto);
  salvarTarefas();
  criarItem(texto);
  input.value = "";
});
