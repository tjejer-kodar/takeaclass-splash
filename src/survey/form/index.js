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

  handleLabelClick = () => {
    this.setState({ showTypewriter: false })
  }

  handleInputBlur = () => {
    const model = this.form.getModel()
    if (model.technology === "") {
      this.setState({ showTypewriter: true })
    }
  }

  render() {
    return (
      <Formsy.Form
        ref={form => { this.form = form }}
        onValid={this.handleValidForm}
        className={classes.form}>

        <label onClick={this.handleLabelClick}>
          {this.state.showTypewriter &&
            <Typewriter className={classes.typewriter} />}

          <Input
            innerRef={input => { this.input = input }}
            name="technology"
            value=""
            onBlur={this.handleInputBlur} />
        </label>
      </Formsy.Form>
    )
  }

}
