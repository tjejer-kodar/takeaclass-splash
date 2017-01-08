import React from "react"
import classNames from "classnames"
import Loader from "components/loader"

import classes from "./style.scss"

const Button = props =>
  <button
    className={classNames(props.className, classes.button)}
    disabled={props.loading}>
    {props.loading
      ? <Loader />
      : <span className={classes.text}>{props.text}</span>}
  </button>

export default Button
