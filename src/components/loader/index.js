import React from "react"
import classNames from "classnames"

import classes from "./style.scss"

const Loader = props =>
  <div className={classNames(props.className, classes.loader)}>
    <span className={classes.ball} />
    <span className={classes.ball} />
    <span className={classes.ball} />
  </div>

export default Loader
