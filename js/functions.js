

function loadCustomers(idTable) {
    let xhttp = new XMLHttpRequest();
    let file = "../jason/clientes.jason";

    xhttp.onreadystatechange = function () {
        if ((this.readyState == 4) && (this.status == 200)) {
            printCustomers(this.responseText, idTable);

        }
    }

    xhttp.open("GET", file, true);
    xhttp.send();
}

function printCustomers(clientes, idTable) {
    let tabela = document.getElementById(idTable);
    let trCliente = document.createElement("tr");
    let tdNome = document.createElement("td");
    let tdIdade = document.createElement("td");

    clientes = JSON.parse(clientes);

    nome = document.createTextNode(clientes.nome);
    idade = document.createTextNode(clientes.idade);
    tdNome.appendChild(nome);
    tdIdade.appendChild(idade);
    trCliente.appendChild(tdNome);
    tabela.appendChild(trCliente);

    
    

}