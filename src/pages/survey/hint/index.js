import React from "react"

import classes from "./style.scss"

const hints = [
  "building a website",
  "CSS",
  "make an iphone app",
  "create a game",
  "APIs"
]

const Hint = props =>
  <div className={classes.hint}>
    If you're not sure, get inspired of what others wrote
    {hints.map(hint => (
      <span className={classes.textWrapper}>
        <a
          className={classes.text}
          key={hint}
          onClick={props.onHintClick.bind(this, hint)}>
          {hint}
        </a>
      </span>
    ))}
  </div>

export default Hint
