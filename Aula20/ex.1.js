const Modelo = {
    nome: null,
    sexo: null,
    fone: null,
}

var listaContatos = [{
    nome: "Bruno",
    sexo: "M",
    fone: "54 6565 8756",
}, {
    nome: "Debora",
    sexo: "F",
    fone: "54 6565 5854",
}, {
    nome: "Raquel",
    sexo: "F",
    fone: "51 6524 6687",
}]

function carregando() {

    var btnSalsar = document.querySelector("#btnSalvar")
    btnSalsar.addEventListener("click", adicionarEditar)

    var btnAdicionar = document.querySelector("#btnAdicionar")
    btnAdicionar.addEventListener("click", addNovoContato)


    var btnCancelar = document.querySelector("#btnCancelar")
    btnCancelar.addEventListener("click", hideDialog)
    

    carregarValorGrid()
}

function addNovoContato(){
    showDialog()

}

function showDialog(){
    document.querySelector("dialog").open = true
}

function hideDialog(){
    
    document.querySelector("dialog").open = false
    
    var nome = document.querySelector("#nome")
    var sexo = document.querySelector("#sexo:checked")
    var fone = document.querySelector("#fone")
    
    nome.value = ""
    fone.value =""
    sexo.checked = false

}

function adicionarEditar() {

    var nome = document.querySelector("#nome")
    var sexo = document.querySelector("#sexo:checked")
    var fone = document.querySelector("#fone")

    if (nome.value === ""){
        alert("Informe o nome!")
        return
    }
    if (fone.value === ""){
        alert("Informe o telefone!")
        return
    }
    if (sexo ===null){   
        alert("Informe o sexo!")
        return
    }
   
    var novoContato = Object.assign({}, Modelo);
    novoContato.nome = nome.value.toUpperCase();
    novoContato.sexo = sexo.value;
    novoContato.fone = fone.value;
    
    if (salvar(novoContato)){
        carregarValorGrid()
        hideDialog()
    }
      
}

function salvar(Contato) {

    for (x = 0; x < listaContatos.length; x++){

        let nome = listaContatos[x].nome.toUpperCase()
        if (nome === Contato.nome.toUpperCase()){
            alert("Esse nome já está na lista!!");
            return false
        }

    }

    listaContatos.push(Contato);
    
    return true

}



function carregarValorGrid() {
    var addlista = document.querySelector("tbody")

    addlista.innerHTML = "";

    for (var x = 0; x < listaContatos.length; x++) {

        addlista.innerHTML += 
        "<tr>" +
            "<td>" + listaContatos[x].nome + "</td>" +
            "<td>" + listaContatos[x].sexo + "</td>" +
            "<td>" + listaContatos[x].fone + "</td>" +
            "<td><button class='fa fa-trash'></button><button class='fa fa-edit'></button></td>" +
        "</tr>";

    };




}

