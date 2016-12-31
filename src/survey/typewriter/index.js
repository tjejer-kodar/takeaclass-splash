import React from "react"
import classNames from "classnames"

import classes from "./style.scss"

const phrases = [
  "frontend",
  "javascript",
  "C++",
  "hardware programming",
  "game development",
  "react",
  "CSS"
]

export default class Typewriter extends React.Component {

  state = {
    phrase: 0,
    character: 0,
    direction: "forwards"
  }

  componentDidMount() {
    this.interval = setInterval(() => this.update(), 200)
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
      <button
        onClick={this.props.onClick}
        className={classNames(this.props.className, classes.typewriter)}>
        <span className={classes.inner}>
          {this.getPhrase().substr(0, this.state.character)}
          <span className={classes.cursor} />
        </span>
      </button>
    )
  }

}
