var lista = [{
    desc: "Frango",
    qtde: 1
},
{
    desc: "Arroz",
    qtde: 1
}]

function carregando() {
    var btnAdd = document.querySelector("button");
    btnAdd.addEventListener("click", clickAdd);

    carregaLista();
}

function clickAdd() {

    var descricao = document.querySelector("#descricao");
    var qtde = document.querySelector("#qtde");

    addNaLista(descricao.value, qtde.value);

    descricao.value = ""
    qtde.value = ""

    carregaLista();


}

function addNaLista(descricao, quantidade) {

    if (descricao === "") {
        alert("Informe a descrição.");
        return
    }

    if (quantidade === "" || quantidade <= 0) {
        alert("Informe a quantidade.");
        return
    }

    //testa se o item ja existe
    for (var x = 0; x < lista.length; x++) {
        if (lista[x].desc.toLowerCase() === descricao.toLowerCase()) {
            alert("Item já adicionado na lista.");
            return
        }
    }


    var obj = {}
    obj.desc = descricao
    obj.qtde = quantidade
    lista.push(obj)
}


function carregaLista() {
    var conteudo = document.querySelector("tbody");

    conteudo.innerHTML = ""

    for (var x = 0; x < lista.length; x++) {

        conteudo.innerHTML += "<tr><td> " + lista[x].desc +
            "  </td> <td> " + lista[x].qtde + " </td> </tr>"
    }


}

