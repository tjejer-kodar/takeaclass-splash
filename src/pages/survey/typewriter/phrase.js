export default class Phrase {

  constructor(phraseIndex, characterIndex, direction) {
    this.phraseIndex = phraseIndex
    this.characterIndex = characterIndex
    this.direction = direction
    this.currentPhrase = Phrase.all[phraseIndex]

    this.calculateNextDirection()
    this.setNextCharacter()
  }

  calculateNextDirection() {
    if (this.characterIndex >= this.currentPhrase.length) {
      this.direction = "backwards"
    } else if (this.characterIndex === 0 && this.direction === "backwards") {
      this.direction = "forwards"
      this.setNextPhrase()
    }
  }

  setNextPhrase() {
    if (this.phraseIndex + 1 < Phrase.all.length) {
      this.phraseIndex += 1
    } else {
      this.phraseIndex = 0
    }
  }

  setNextCharacter() {
    this.characterIndex = this.direction === "forwards"
      ? this.characterIndex + 1
      : this.characterIndex - 1
  }

  nextDisplayDuration() {
    if (this.direction === "backwards") {
      return 100 // Delete fast
    } else if (this.characterIndex === this.currentPhrase.length) {
      return 500 // Pause at the end of a phrase
    } else {
      const character = this.currentPhrase.substr(this.characterIndex, 1)
      if (character === " ") {
        return 100 // Make spaces fast
      } else {
        // otherwise, random between 100-250ms
        return Math.floor(Math.random() * 150) + 100
      }
    }
  }

}

Phrase.all = [
  "frontend",
  "javascript",
  "C++",
  "hardware programming",
  "game development",
  "react",
  "CSS"
]
