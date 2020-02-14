class HangMan {
    constructor(word, remainingGuess) {
        this.word = word.toLowerCase().split('')
        this.remainingGuess = remainingGuess
        this.guessedLetter = []
        this.status = 'playing'
    }
    checkState() {
        const finished = this.word.every((letter) => this.guessedLetter.includes(letter))
        if (this.remainingGuess < 1) {
            this.status = 'failed'
            this.remainingGuess = 0
        }
        else if (finished) {
            this.status = 'finish'
        }
        else {
            this.status = 'playing'
        }
    }
    getPuzzel() {
        let puzzel = ''
        this.word.forEach((letter) => {
            if (this.guessedLetter.includes(letter) || letter === ' ') {
                puzzel = puzzel + letter
            }
            else {
                puzzel = puzzel + '*'
            }
        })
        return puzzel
    }
    guessing(guess) {
        guess = guess.toLowerCase()
        console.log(guess)
        if (!this.guessedLetter.includes(guess)) {
            document.querySelector('#duplicate').textContent = " "
            this.guessedLetter.push(guess)
            if (this.word.includes(guess)) {
                this.remainingGuess
            }
            else {
                this.remainingGuess--
            }
        }
        else {
            document.querySelector('#duplicate').textContent = 'the charechter is duplicate'
            console.log("siamakkkkk")
        }
        this.getPuzzel()
        this.checkState()
    }
}








