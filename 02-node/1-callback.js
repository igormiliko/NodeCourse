function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 3000);
}

function obterTelefone(idUsuario, callback) {
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

function resolverUsuario(erro, usuario) {
    console.log('usuario:', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
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
})
//const telefone = obterTelefone()

//console.log('telefone:', telefone)
