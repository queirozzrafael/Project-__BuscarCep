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
                excep.innertext = json.cep
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
}

function saveCepLS (saveCep){
    localStorage.setItem('cep',`cepTd`)

}