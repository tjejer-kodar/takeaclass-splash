import React from "react"
import Heading from "components/heading"

import Form from "./form"

import classes from "./style.scss"

const Confirmation = props =>
  <div className={classes.confirmation}>
    <Heading
      primary="Yay!"
      secondary="Get notified when it's available:" />

    <Form onComplete={props.onComplete} />
  </div>

export default Confirmation
