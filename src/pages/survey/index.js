import React from "react"
import Heading from "components/heading"

import Form from "./form"

import classes from "./style.scss"

const Survey = props =>
  <div className={classes.survey}>
    <div className={classes.intro}>
      Some seriously cool stuff is coming soon, but until then...
    </div>

    <Heading
      primary="Plz tell us."
      secondary="I want to learn..." />
    <Form onComplete={props.onComplete} />
  </div>

export default Survey
