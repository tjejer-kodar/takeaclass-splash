import React from "react"
import classNames from "classnames"

import Phrase from "./phrase"
import classes from "./style.scss"

export default class Typewriter extends React.Component {

  state = {
    phraseIndex: 0,
    characterIndex: 0,
    direction: "forwards"
  }

  componentDidMount() {
    this.interval = setInterval(() => this.update(), 200)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  phrase = new Phrase()

  currentPhrase() {
    return this.phrase.fetch(this.state.phraseIndex)
  }

  update = () => {
    let { characterIndex, direction, phraseIndex } = this.state

    if (characterIndex > this.currentPhrase().length || characterIndex === this.currentPhrase().length) {
      direction = "backwards"
    } else if (characterIndex === 0 && direction === "backwards") {
      direction = "forwards"

      if (phraseIndex + 1 < this.phrase.all.length) {
        phraseIndex += 1
      } else {
        phraseIndex = 0
      }
    }

    characterIndex = direction === "forwards" ? characterIndex + 1 : characterIndex - 1
    this.setState({ characterIndex, direction, phraseIndex })
  }

  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={classNames(this.props.className, classes.typewriter)}>
        <span className={classes.inner}>
          {this.currentPhrase().substr(0, this.state.characterIndex)}
          <span className={classes.cursor} />
        </span>
      </button>
    )
  }

}
