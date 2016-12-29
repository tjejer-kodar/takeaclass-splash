import React from "react"

import Typewriter from "./typewriter"

import classes from "./style.scss"

const Intro = () =>
  <div className={classes.intro}>
    Some seriously cool stuff is coming soon, but until then...
  </div>

const Question = () =>
  <div className={classes.question}>
    <span className={classes.tellUs}>Plz tell us.</span>
    <span className={classes.learn}>I want to learn</span>
  </div>

export default class Survey extends React.Component {

  render() {
    return (
      <div className={classes.survey}>
        <Intro />
        <Question />
        <Typewriter />
      </div>
    )
  }

}
