const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento= 'usuario:click'
meuEmissor.on(nomeEvento, (click) => {
    console.log('Um usuario clicou', click)
})

/*meuEmissor.emit(nomeEvento, 'Na barra de rolagem')
meuEmissor.emit(nomeEvento, 'No ok')

let count = 0

setInterval(() => {
    meuEmissor.emit(nomeEvento, 'No ok' + count++)

}, 1000)*/

//ouvir eventos uma única vez
/*
const stdin = process.openStdin()

function main() {
    return new Promise((resolve, reject) => {
        stdin.addListener('data', (value) => {
            //console.log(`Você digitou: ${value.toString().trim()}`)
            return resolve(value)
        })        
    })
}

main().then((resultado) => console.log('resultado', resultado.toString()))*/



//Ouvir o evento várias vezes
const stdin = process.openStdin()

stdin.addListener('data', (value) => {
    console.log(`Você digitou: ${value.toString().trim()}`)
})