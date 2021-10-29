const util = require('util')
const obterUsuarioAsync = util.promisify(obterUsuario)
const obterTelefoneAsync = util.promisify(obterTelefone)
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(callback){
    //quando der algum problema, o reject é chamado
    // quando der certo é chamado o resolve
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 3000);
}

function obterTelefone( idUsuario, callback ) {
    setTimeout(() => {
        return callback(null, {
            telefone: '98590-8787',
            ddd: '61'
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua dos bobos',
            numero: 0
        })
    }, 1000);    
}

const user = obterUsuarioAsync()
            .then((usuario) => {
                return obterTelefoneAsync(usuario.id)
                .then((telefone) => {
                    return { telefone: telefone }
                })
                .then((returnDoTelefone) => {
                    return obterEnderecoAsync(usuario.id)
                    .then((endereco) => {
                        return {
                            usuario: usuario,
                            telefone: returnDoTelefone.telefone,
                            endereco: endereco
                        }
                    })
                })
                .then((result) => {
                    return result
                })
            })
            .then((result) => {
                console.log(`
                    Nome: ${result.usuario.nome}
                    Endereço: ${result.endereco.rua} ${result.endereco.numero}
                    Telefone: ${result.telefone.telefone}
                `)
            })
            .catch((error) => {
                console.error('Deu ruim: ', error)
            })


    /*.then((usuario) => {
        return obterTelefoneAsync(usuario.id)
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
