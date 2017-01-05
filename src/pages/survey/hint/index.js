import React from "react"

import classes from "./style.scss"

const hints = [
  "building a website",
  "CSS",
  "APIs"
]

const Hint = props =>
  <div className={classes.hint}>
    If you're not sure, maybe you're interested in some things
    other people have written, such as
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
