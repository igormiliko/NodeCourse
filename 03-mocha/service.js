const { get } = require('axios')
const URL = "https://swapi.dev/api/people"

async function obterPessoa(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const result = await get(url)
    //console.log(result.data)
    return result.data.results.map(mapearPessoas)
}

function mapearPessoas(item) {
    return {
        nome: item.name,
        altura: item.height
    }
}

module.exports = {
    obterPessoa
}