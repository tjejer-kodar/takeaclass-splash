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

  currentPhrase() {
    return Phrase.all[this.state.phraseIndex]
  }

  update = () => {
    const { characterIndex, direction, phraseIndex } = this.state
    const phrase = new Phrase(phraseIndex, characterIndex, direction)

    this.setState({
      characterIndex: phrase.characterIndex,
      direction: phrase.direction,
      phraseIndex: phrase.phraseIndex
    })
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
