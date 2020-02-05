let game1 

const startGame = async () => {
    const puzzle = await getWord()
    game1 = new HangMan(puzzle, 3)
    document.querySelector('#puzzel').textContent = game1.getPuzzel()
    document.querySelector('#status').textContent= game1.status
    document.querySelector('#duplicate').textContent = ' '
    document.querySelector('#duplicate').textContent =`your remaining guesses : ${game1.remainingGuess} `
    console.log(game1.remainingGuess)
}

startGame()

window.addEventListener('keypress', (e) => {
   const guess = String.fromCharCode(e.charCode)
   game1.guessing(guess)
   game1.checkState()
   document.querySelector('#puzzel').textContent = game1.getPuzzel()
   document.querySelector('#status').textContent= game1.status
   document.querySelector('#duplicate').textContent =`your remaining guesses = ${game1.remainingGuess} `
})
