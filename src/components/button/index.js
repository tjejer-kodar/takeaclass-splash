import React from "react"
import classNames from "classnames"

import classes from "./style.scss"

const Button = props =>
  <button
    className={classNames(props.className, classes.button)}
    disabled={props.disabled}>
    {props.text}
  </button>

export default Button
