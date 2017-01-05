import React from "react"
import Heading from "components/heading"
import Intro from "components/intro"

import Form from "./form"

import classes from "./style.scss"

const Confirmation = props =>
  <div className={classes.confirmation}>
    <Intro text="takeaclass.io is coming soon. It will be cool. " />

    <Heading
      primary="Yay!"
      secondary="Sign up to be the first for updates" />

    <Form survey={props.survey} onComplete={props.onComplete} />
  </div>

export default Confirmation
