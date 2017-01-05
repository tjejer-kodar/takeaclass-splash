import React from "react"
import Heading from "components/heading"
import Intro from "components/intro"

import Form from "./form"

import classes from "./style.scss"

const Survey = props =>
  <div className={classes.survey}>
    <Intro text="Seriously cool stuff is coming soon, but until then..." />

    <Heading
      primary="Plz tell us."
      secondary="What do you want to learn?" />
    <Form onComplete={props.onComplete} />
  </div>

export default Survey
