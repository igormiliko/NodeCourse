const { obterPessoa } = require('../for-forin/service')

Array.prototype.meuFilter = function (callback){
    const lista = []

    for (ix in this) {
        const item = this[ix]
        const result = callback(item, ix, this)
        
        if(!result) continue;
        lista.push(item)
    }
    return lista 
}

async function main() {
    try {
        const {
            results
        } = await obterPessoa('a')

        // const familiaLars = results.filter((item) => {
        //     return item.name.toLowerCase().indexOf('skywalker') !== -1
        // })

        const familiaLars = results.meuFilter((item) => {
            return item.name.toLowerCase().indexOf('lars') !== -1
        })
        const names = familiaLars.map((pessoa) => pessoa.name)

        console.log(names)

    }catch(error) {
        console.error('Deu ruim', error)
    }
}

main()