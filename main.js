// Variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookieClick = document.querySelector("#cookieClick")
const btnTry = document.querySelector("#btnTry")

let phrases = [
  'A vida trará coisas boas se tiver paciência.',
  'Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Acredite em milagres, mas não dependa deles.',
  'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.',
  'O conhecimento é a única virtude e a ignorância é o único vício.',
  'Vencer é 90 por cento suor e 10 por cento de engenho.',
  'As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Você sempre será a sua melhor companhia!',
  'Acredite em milagres, mas não dependa deles.'
];

let randomPhrase = document.querySelector("#randomPhrase")
let generateRandomPhrase

// Eventos

btnTry.addEventListener('click', btnReset)
cookieClick.addEventListener('click', phraseGenerate)
document.addEventListener('keydown', pressEnterkey)

//funções Callback

function phraseGenerate() {
  toggleScreen()

  generateRandomPhrase = Math.floor(Math.random()*(phrases.length));

document.querySelector('#randomPhrase').innerText = phrases[generateRandomPhrase]
}

function buttonTry(event) {
  event.preventDefault()
  toggleScreen()
}

function pressEnterkey(e) {
  if(e.key == 'enter' && screen1.classList.contains('hide')) {
      toggleScreen()
  }
}

  function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}


 
  function btnReset() {
    toggleScreen()
    randomPhrase = Math.round(Math.random() * 10)  
}



