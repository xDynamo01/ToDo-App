function adicionarTarefa(){
    let valorDoinput = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = valorDoinput + '<span onclick="deletarTarefa(this)">❌</span>'
    document.querySelector("ul").appendChild(li)
    document.querySelector("input").value = "" 

    salvarTarefas(); // <- salva após adicionar
}

function deletarTarefa(li){
    li.parentElement.remove()
    salvarTarefas(); // <- salva após excluir
}

function salvarTarefas() {
  const tarefas = Array.from(document.querySelectorAll("ul li")).map(li => li.innerText.replace("❌", "").trim());
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregarTarefas() {
  const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];

  tarefasSalvas.forEach(texto => {
    let li = document.createElement("li");
    li.innerHTML = texto + ' <span onclick="deletarTarefa(this)">❌</span>';
    document.querySelector("ul").appendChild(li);
  });
}

// Chama ao iniciar
carregarTarefas();
