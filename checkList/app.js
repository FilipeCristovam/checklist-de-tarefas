"use strict";

/*
<label class="todo__item">
  <input type="checkbox" />
  <div>teste de item 1</div>
  <input type="button" value="X" />
</label>;
*/
/*
let banco = [
  { tarefa: "Estudar JS", status: "checked" },
  { tarefa: "netflix", status: "checked" },
  { tarefa: "youtube", status: "checked" },
];
*/

const getBanco = () => JSON.parse(localStorage.getItem("todoList")) ?? [];

const setBanco = (banco) =>
  localStorage.setItem("todoList", JSON.stringify(banco));

const criarItem = (tarefa, status, indice) => {
  const item = document.createElement("label"); // Cria no html um Label
  item.classList.add("todo__item"); //adiciona uma class
  item.innerHTML = `
  <label class="todo__item">
  <input type="checkbox" ${status} data-indice=${indice}>
  <div>${tarefa} </div>
  <input type="button" value="X" data-indice=${indice}>
</label>
  `;

  document.getElementById("todoList").appendChild(item);
};

const limparTarefas = () => {
  const todoList = document.getElementById("todoList");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
};

const atualizarTela = () => {
  limparTarefas();
  const banco = getBanco();
  banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
};

const inserirItem = (evento) => {
  const tecla = evento.key;
  const texto = evento.target.value;
  if (tecla === "Enter") {
    const banco = getBanco();
    banco.push({ tarefa: texto, status: "" });
    setBanco(banco);
    atualizarTela();
    evento.target.value = "";
  }
};

const removeItem = (indice) => {
  const banco = getBanco();
  banco.splice(indice, 1);
  setBanco(banco);
  atualizarTela();
};

const atualizarItem = (indice) => {
  const banco = getBanco();
  banco[indice].status = banco[indice].status === "" ? "checked" : "";
  setBanco(banco);
  atualizarTela();
};

const clickitem = (evento) => {
  const elemento = evento.target;
  if (elemento.type === "button") {
    const indice = elemento.dataset.indice;
    removeItem(indice);
  } else if (elemento.type === "checkbox") {
    const indice = elemento.dataset.indice;
    atualizarItem(indice);
  }
};

document.getElementById("newItem").addEventListener("keypress", inserirItem);
document.getElementById("todoList").addEventListener("click", clickitem);

function barExi() {
  const dowdBar = () => {
    if (
      ocultar ===
      document.getElementById("ocuList").addEventListener("click", dowdBar)
    ) {
      location.reload();
    }
  };

  const senBar = () => {
    if (
      ver ===
      document.getElementById("verList").addEventListener("click", senBar)
    ) {
      atualizarTela();
    }
  };
  const ocultar = document
    .getElementById("ocuList")
    .addEventListener("click", dowdBar);
  const ver = document
    .getElementById("verList")
    .addEventListener("click", senBar);
  return barExi;
}
