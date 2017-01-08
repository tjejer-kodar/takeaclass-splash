import React from "react"
import classNames from "classnames"

import classes from "./style.scss"

const getHintClassnames = props => (
    classNames(classes.hint, {
      [classes.visible]: props.visible,
      [classes.highlight]: props.highlight
    })
  )

const Hint = props =>
  <div className={getHintClassnames(props)}>
    {props.children}
  </div>

export default Hint
