import React from "react"
import Formsy from "formsy-react"

import Typewriter from "../typewriter"
import Input from "../input"

import classes from "./style.scss"

export default class Form extends React.Component {

  state = {
    showTypewriter: true
  }

  handleValidForm = () => {
    console.log("Form is valid")
  }

  handleTypewrierClick = () => {
    this.setState({ showTypewriter: false }, () => {
      // set focus on input
    })
  }

  handleInputBlur = () => {
    const model = this.form.getModel()
    debugger
  }

  render() {
    return (
      <Formsy.Form
        ref={form => { this.form = form }}
        onValid={this.handleValidForm}
        className={classes.form}>
        {this.state.showTypewriter &&
          <Typewriter className={classes.typewriter} onClick={this.handleTypewrierClick} />}
        <Input name="technology" value="" onBlur={this.handleInputBlur} />
      </Formsy.Form>
    )
  }

}
