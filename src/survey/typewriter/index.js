import React from "react"

import classes from "./style.scss"

const phrases = [
  "hello world",
  "this is dogfort"
]

export default class Typewriter extends React.Component {

  state = {
    phrase: 0,
    character: 0,
    direction: "forwards"
  }

  componentDidMount() {
    this.interval = setInterval(() => this.update(), 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getPhrase() {
    return phrases[this.state.phrase]
  }

  update = () => {
    let { character, direction, phrase } = this.state

    if (character > this.getPhrase().length || character === this.getPhrase().length) {
      direction = "backwards"
    } else if (character === 0 && direction === "backwards") {
      direction = "forwards"

      if (phrase + 1 < phrases.length) {
        phrase += 1
      } else {
        phrase = 0
      }
    }

    character = direction === "forwards" ? character + 1 : character - 1
    this.setState({ character, direction, phrase })
  }

  render() {
    return (
      <div className={classes.typewriter}>
        {this.getPhrase().substr(0, this.state.character)}
      </div>
    )
  }

}
