const { deepEqual, ok } = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR ={
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('suite de manipulação de hérois', () => {
    it('Pesquisar héroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [result] = await database.listar(expected.id)
        deepEqual(result, expected)
    })
    
    // it('Cadastrar um héroi usando aequivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRAR

    //     ok(null, expected)
    // })
})