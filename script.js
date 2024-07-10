

const result = document.querySelector('.result')
const humanScore =document.querySelector('#my-score')
const machineScore= document.querySelector('#machine-score')


let humanScoreNumber =0
let machineScoreNumber =0

const playthehuman = (humanchoice) => {
  
    playthegame( humanchoice, playMachine())

}

const playMachine = () => {

    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playthegame = (human, machine) => {

   
    if (human === machine) {
        result.innerHTML = "Deu Empate !"
    } else if (human === 'paper' && machine === 'rock',
        human === 'rock' && machine === 'scissors',
        human === 'scissors' && machine === 'paper') {
        humanScoreNumber++
        humanScore.innerHTML= humanScoreNumber
        result.innerHTML = "Você Ganhou!"
    }
    else {
        machineScoreNumber++
        machineScore.innerHTML=machineScoreNumber
        result.innerHTML = "Você Perdeu"
    }

}