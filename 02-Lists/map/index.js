const service = require('../for-forin/service')

Array.prototype.meuMap = function  (callback){
    const novoArray = []
    for (let i = 0; i <= this.length - 1; i++) {
        const resultado = callback(this[i], i)
        novoArray.push(resultado)
    }
}

async function main() {
    try{
        const results = await service.obterPessoa('a')
        const names = []
        console.time('ForEach')
            results.results.forEach((item) => names.push(item.name))
        console.timeEnd('ForEach')

        console.time('Map')
           results.results.map( pessoa => names.push(pessoa.name))
        console.timeEnd('Map')


    }catch(error){
        console.error('Deu ruim =>', error)
    }
}
main()