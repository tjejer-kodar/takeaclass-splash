import React from "react"
import Heading from "components/heading"
import Intro from "components/intro"

import classes from "./style.scss"

const Done = () =>
  <div className={classes.confirmation}>
    <Intro text="takeaclass.io is coming soon. It will be cool. " />

    <Heading
      primary="Thanks!"
      secondary="We can't wait to tell you more" />
  </div>

export default Done
