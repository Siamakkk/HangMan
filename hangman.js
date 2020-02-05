const HangMan = function (word , remainingGuess) {
    this.word = word.toLowerCase().split('')
    this.remainingGuess = remainingGuess
    this.guessedLetter = []
    this.status = 'playing'
}

let notice = document.querySelector('#duplicate')

HangMan.prototype.checkState = function(){
    const finished = this.word.every( (letter) => this.guessedLetter.includes(letter) )

    if (this.remainingGuess < 1) {
        this.status='failed'
        this.remainingGuess = 0
    } else if (finished) {
        this.status = 'finish'
    }else{
        this.status = 'playing'
    }
}

HangMan.prototype.getPuzzel = function () {
    let puzzel = ''
    
    this.word.forEach((letter) => {
        if(this.guessedLetter.includes(letter) || letter===' '){
            puzzel = puzzel + letter
        } else {
            puzzel = puzzel + '*'
        }
    })
    return puzzel
}




HangMan.prototype.guessing = function(guess){  
    guess = guess.toLowerCase()
    console.log(guess)
    if(!this.guessedLetter.includes(guess)){
        notice.textContent= " "
        this.guessedLetter.push(guess)
        if(this.word.includes(guess)){
            this.remainingGuess 
          } else {
              this.remainingGuess--
          }
    } else {
        notice.textContent = 'the charechter is duplicate'
    }
    this.getPuzzel()
    this.checkState()
}



