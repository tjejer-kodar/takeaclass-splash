import React from "react"

import classes from "./style.scss"

const Heading = props =>
  <div className={classes.heading}>
    <span className={classes.primary}>{props.primary}</span>
    <span className={classes.secondary}>{props.secondary}</span>
  </div>

export default Heading
