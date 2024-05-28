function searchCep () {
const cep = document.getElementById('CEP').value
const excep = document.querySelector("#excep")
const exlog = document.querySelector("#exlog")
const exbai = document.querySelector("#exbai")
const exmun = document.querySelector("#exmun")
const exest = document.querySelector("#exest")
const exibg = document.querySelector("#exibg")
const exddd = document.querySelector("#exddd")


    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(result => result.json())
            .then(json => {
                excep.innerHTML = json.cep
                exlog.innerHTML = json.logradouro
                exbai.innerHTML = json.bairro
                exmun.innerHTML = json.localidade
                exest.innerHTML = json.uf
                exibg.innerHTML = json.ibge
                exddd.innerHTML = json.ddd
            })
            .catch(perror => console.log('ERROR'))


}

function saveCep () {
    //Criando linha
    const newRow = document.createElement('tr');
    
    //Criando colunas
    const cepTd = document.createElement('td');
    const logradouroTd = document.createElement('td');
    const bairroTd = document.createElement('td');
    const municipioTd = document.createElement('td');
    const estadoTd = document.createElement('td');
    const ibgeTd = document.createElement('td');
    const dddTd = document.createElement('td');

    //Adicinando conteudos nas colunas 
    cepTd.textContent = document.getElementById('excep').textContent;
    logradouroTd.textContent = document.getElementById('exlog').textContent;
    bairroTd.textContent = document.getElementById('exbai').textContent;
    municipioTd.textContent = document.getElementById('exmun').textContent;
    estadoTd.textContent = document.getElementById('exest').textContent;
    ibgeTd.textContent = document.getElementById('exibg').textContent;
    dddTd.textContent = document.getElementById('exddd').textContent;

    //Adicionando como filhos na linha
    newRow.appendChild(cepTd);
    newRow.appendChild(logradouroTd);
    newRow.appendChild(bairroTd);
    newRow.appendChild(municipioTd);
    newRow.appendChild(estadoTd);
    newRow.appendChild(ibgeTd);
    newRow.appendChild(dddTd);

    //Adicionando linha filho na tabela
    document.getElementById('testng').appendChild(newRow);

    // Criando objeto 
    const rowData = {
        cep: cepTd.textContent,
        logradouro: logradouroTd.textContent,
        bairro: bairroTd.textContent,
        municipio: municipioTd.textContent,
        estado: estadoTd.textContent,
        ibge: ibgeTd.textContent,
        ddd: dddTd.textContent
    };

    // Salvando objeto no LocalStorage
    let savedRows = JSON.parse(localStorage.getItem('cepData')) || [];
    savedRows.push(rowData);
    localStorage.setItem('cepData', JSON.stringify(savedRows));
}


// Função carregar dados armazenados 
function loadCepData() {
    const savedRows = JSON.parse(localStorage.getItem('cepData')) || [];
    const tbody = document.getElementById('testng');

    savedRows.forEach(row => {
        const newRow = document.createElement('tr');

        const cepTd = document.createElement('td');
        const logradouroTd = document.createElement('td');
        const bairroTd = document.createElement('td');
        const municipioTd = document.createElement('td');
        const estadoTd = document.createElement('td');
        const ibgeTd = document.createElement('td');
        const dddTd = document.createElement('td');

        cepTd.textContent = row.cep;
        logradouroTd.textContent = row.logradouro;
        bairroTd.textContent = row.bairro;
        municipioTd.textContent = row.municipio;
        estadoTd.textContent = row.estado;
        ibgeTd.textContent = row.ibge;
        dddTd.textContent = row.ddd;

        newRow.appendChild(cepTd);
        newRow.appendChild(logradouroTd);
        newRow.appendChild(bairroTd);
        newRow.appendChild(municipioTd);
        newRow.appendChild(estadoTd);
        newRow.appendChild(ibgeTd);
        newRow.appendChild(dddTd);

        tbody.appendChild(newRow);
    });
}

// Chamar a função para carregar os dados ao carregar a página
window.onload = loadCepData;
