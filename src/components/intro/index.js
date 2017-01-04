import React from "react"

import classes from "./style.scss"

const Intro = props =>
  <div className={classes.intro}>
    {props.text}
  </div>

export default Intro
