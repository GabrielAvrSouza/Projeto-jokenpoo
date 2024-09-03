
const min = 0, max = 2
let myScore = 1
let score = 1

function MachinePlay() {
    const choicesYou = ['Pedra', 'Papel', 'tesoura']
    const JogadaDaMaquina = Math.floor(Math.random() * (max - min + 1)) + min
    return choicesYou[JogadaDaMaquina]
}

function YourPlay(choicesYou) {
    Verification(choicesYou, MachinePlay())
}

function Verification(you, machine) {
    const scoreMachine = document.querySelector(".Machine-scoreboard")
    const youScoreboard = document.querySelector(".you-scoreboard")
    const result = document.querySelector(".result")

    if ((you === 'Pedra' && machine === 'Papel') ||
        (you === 'Papel' && machine === 'tesoura') ||
        (you === 'tesoura' && machine === 'Pedra')) {
        result.innerHTML = "Ponto de Oponente"
        scoreMachine.innerHTML = score++
    }
    else if (you === machine) {
        result.innerHTML = "Empate, ninguém pontua!"
    }
    else {
        result.innerHTML = "Parabéns mais 1 ponto pra vc!"
        youScoreboard.innerHTML = myScore++
    }
}

function jogar(){

}




