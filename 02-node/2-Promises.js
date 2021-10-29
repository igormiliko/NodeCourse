function obterUsuario() {
    //quando der algum problema, o reject é chamado
    // quando der certo é chamado o resolve
    return new Promise((resolve, reject) => {
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

function obterEndereco(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                rua: 'Rua dos bobos',
                numero: 0
    
            })
        }, 1000);
    })
    
}

const usuarioPromise = obterUsuario()

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
            .then((result) => {
                return obterEndereco(result.usuario.id)
                .then(function resolverEndereco(endereco) {
                    return {
                        usuario: {
                            nome: result.usuario.nome,
                            id: result.usuario.id
                        },
                        telefone: {
                            telefone: result.telefone.telefone,
                            ddd: result.telefone.ddd
                        },
                        endereco: endereco
                    }
                })
            }
            
            
        )
    })
    .then((resultado) => {
        console.log('resultado', resultado)
    }).catch((error) => {
        console.error('DEU RUIM', error)
    })
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
