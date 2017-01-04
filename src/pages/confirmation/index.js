import React from "react"
import Heading from "components/heading"
import Intro from "components/intro"

import Form from "./form"

import classes from "./style.scss"

const Confirmation = props =>
  <div className={classes.confirmation}>
    <Intro text="Some seriously cool stuff is coming soon, but until then..." />

    <Heading
      primary="Yay!"
      secondary="Wanna sign up for updates?" />

    <Form onComplete={props.onComplete} />
  </div>

export default Confirmation
