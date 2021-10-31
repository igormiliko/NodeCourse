const { obterPessoa } = require('../for-forin/service')

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for(let ix = 0; ix < this.length; ix++) {
        valorFinal = callback(valorFinal, this[ix], this)
    }
    return valorFinal
}

async function main() {
    try {
        // const { results } = await obterPessoa('a')

        // const altura = results.map((pessoa) => parseInt(pessoa.height))
        //console.log(pesos)
    //     const alturaTotal = altura.reduce((ls, nx) => {
    //         return ls + nx
    //     }, 0)
    //    console.log(alturaTotal / altura.length)

    const minhaLista = [
        ['Erick', 'Wendel'],
        ['NodeBr', 'Nerdzao']
    ]

    const total = minhaLista.meuReduce((lst, nxt) => lst.concat(nxt), []).join(', ')
    console.log(total)

    } catch (error) {
        console.error('Deu ruim', error)
    }
}

main()