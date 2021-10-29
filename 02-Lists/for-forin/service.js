const axios = require('axios')
const URL = 'https://swapi.dev/api/people'

async function obterPessoa( nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

module.exports =  {
    obterPessoa
}

/*obterPessoa('r2')
.then((resultado) => {
    console.log('resultado', resultado.results[0].species)
})
.catch((error) => {
    console.error('DEU RUIM', error)
})*/