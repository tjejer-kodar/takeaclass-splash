import React from "react"
import Hint from "components/hint"

import classes from "./style.scss"

const hints = [
  "building a website",
  "CSS",
  "make an iPhone app",
  "create a game",
  "APIs"
]

const SurvetHint = props =>
  <Hint {...props}>
    If you're not sure, get inspired from things others wrote
    {hints.map(hint => (
      <span key={hint} className={classes.textWrapper}>
        <a
          className={classes.text}
          onClick={props.onHintClick.bind(this, hint)}>
          {hint}
        </a>
      </span>
    ))}
  </Hint>

export default SurvetHint
