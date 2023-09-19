const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const resultadoSalvo = document.querySelector('.resultadoSalvo')
const pausas = []
const tamanhoMaximo = 5
let segundos = 0
let timer

function iniciaRelogio(){
    timer = setInterval(function(){
       segundos++
       relogio.innerHTML = getTime(segundos)
    }, 1000) 
}

iniciar.addEventListener('click', function(event){
    clearInterval(timer)
    iniciaRelogio()
})

pausar.addEventListener('click', function(event){
    clearInterval(timer)
    
    // Armazena o valor atual dos segundos no array pausas
    pausas.push(getTime(segundos));

    // Limite o tamanho do array pausas ao tamanho máximo
    limitarTamanhoArray(pausas, tamanhoMaximo);

    // Exibe o array pausas no console para verificar os valores armazenados
    console.log(pausas);

    resultadoSalvo.innerHTML = pausas
})

zerar.addEventListener('click', function(event){
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    pausas.length = 0
})

// Para fazer um cronometro nao e necessario puxar a data atual.

function getTime(segundos){
    // Como as representacoes sao em milisegundos a multiplicacao por 1000 faz a transformacao para segundos
    // O time zone do Brasil e GMT - 3, dessa forma para zerar o time zone necessario incluir outro objeto
    // o intuito da utilizacao dessa funcao e a formatacao da implementacao dos segundos no HTML
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function limitarTamanhoArray(pausas, tamanhoMaximo) {
    if (pausas.length > tamanhoMaximo) {
      pausas.length = tamanhoMaximo; // Reduz o comprimento do array para o tamanho máximo
    }
  }

  function limitarTamanhoArray(pausas, tamanhoMaximo) {
    if (pausas.length > tamanhoMaximo) {
      // Remove o primeiro elemento do array (o mais antigo)
      pausas.shift();
    }
}
