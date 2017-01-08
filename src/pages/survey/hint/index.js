import React from "react"
import classNames from "classnames"

import classes from "./style.scss"

const hints = [
  "building a website",
  "CSS",
  "make an iPhone app",
  "create a game",
  "APIs"
]

const SurveyHint = props =>
  <div>
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
  </div>

const getHintClassnames = props => (
    classNames(classes.hint, {
      [classes.visible]: props.visible,
      [classes.highlight]: props.highlight
    })
  )

const Hint = props =>
  <div className={getHintClassnames(props)}>
    <SurveyHint {...props} />
  </div>

export default Hint
