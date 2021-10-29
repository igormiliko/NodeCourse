const service = require('./service.js')

async function main() {
    try {
        const result = await service.obterPessoa('a')
        const names = []
        // console.time('for')
        // for( let i = 0; i <= result.results.length - 1; i++) {
        //     const pessoa = result.results[i]
        //     //console.log(pessoa)
        //     names.push(pessoa.name)
        // }
        // console.timeEnd('for') 

        // console.time('forIn')
        // for(let i in result.results) {
        //     const pessoa = result.results[i]
        //     names.push(pessoa.name)
        // }
        // console.timeEnd('forIn')

        console.time('forof')
        for(pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('forof')

        // console.log(`names:`,names)
    } catch (error) {
        console.error('error interno', error)
    }
}

main()