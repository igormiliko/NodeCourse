// importamos um modulo interno do node js

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    //quando der algum problema, o reject é chamado
    // quando der certo é chamado o resolve
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 3000);
    })
}

function obterTelefone( idUsuario ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: '98590-8787',
                ddd: '61'
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
        setTimeout(() => {
            return callback(null, {
                rua: 'Rua dos bobos',
                numero: 0
            })
        }, 1000);    
}

// Adicionar a keyword async -> retornando uma promise
main()
async function main() {
    try {
        console.time('Medir Promise')
        const usuario = await obterUsuario()
        //const telefone = await obterTelefone(usuario.id)
        //const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])

        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
        nome : ${usuario.nome}
        telefone : ${telefone.telefone}
        endereco : ${endereco.rua}
        `)
        console.timeEnd('Medir Promise')

    }   
    catch(error) {
        console.log('DEU RUIM', error)
    }
}

/*const usuarioPromise = obterUsuario()

usuarioPromise
    .then((usuario) => {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(telefone) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: telefone
                }
            })
    })
    .then((resultado) => {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then((resultado) => {
        console.log(`
        Nome: ${resultado.usuario.nome}
        Endereço: ${resultado.endereco.rua} ${resultado.endereco.numero}
        Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
    `)
    }).catch((error) => {
        console.error('DEU RUIM', error)
    })*/
// para manipular o sucesso é utilizado o .then
//manipular erros .catch
// usuario -> telefone

/*obterUsuario(function resolverUsuario(error, usuario) {
    if(error) {
        console.error('DEU RUIM EM USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if(error1) {
            console.error('DEU RUIM EM TELEFONE', error1)
            return;
        }
        obterEndereco(usuario.id,function resolverEndereco(error2, endereco) {
            if(error2) {
                console.error('DEU RUIM EM ENDERECO', error2)
                return;
            }  
            
            console.log(`
                Usuario:  ${usuario.nome}
                Endereço: ${endereco.rua} ${endereco.numero}
                telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
})*/
//const telefone = obterTelefone()

//console.log('telefone:', telefone)
