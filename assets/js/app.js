
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
                excep.innerHTML += json.cep
                exlog.innerHTML += json.logradouro
                exbai.innerHTML += json.bairro
                exmun.innerHTML += json.localidade
                exest.innerHTML += json.uf
                exibg.innerHTML += json.ibge
                exddd.innerHTML += json.ddd
            })
            .catch(perror => console.log('ERROR'))


}