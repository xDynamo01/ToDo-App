function adicionarTarefa(){
    let valorDoinput = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = valorDoinput + '<span onclick="deletarTarefa(this)">❌</span>'
    document.querySelector("ul").appendChild(li)
    document.querySelector("input").value = "" 
}

function deletarTarefa(li){
    li.parentElement.remove()

}
