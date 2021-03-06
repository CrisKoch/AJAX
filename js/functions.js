app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

function loadCustomers(idTable) {
    let xhttp = new XMLHttpRequest();
    let file = "https://github.com/CrisKoch/AJAX/blob/master/jason/clientes.jason";

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