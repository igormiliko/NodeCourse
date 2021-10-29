const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento= 'usuario:click'
meuEmissor.on(nomeEvento, (click) => {
    console.log('Um usuario clicou', click)
})

meuEmissor.emit(nomeEvento, 'Na barra de rolagem')
meuEmissor.emit(nomeEvento, 'No ok')

let count = 0

setInterval(() => {
    meuEmissor.emit(nomeEvento, 'No ok' + count++)

}, 1000)