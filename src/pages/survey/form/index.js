import React from "react"
import { Form } from "formsy-react"
import Api from "api"
import Input from "components/input"
import Button from "components/button"

import Typewriter from "../typewriter"

import classes from "./style.scss"

export default class SurveyForm extends React.Component {

  state = {
    showTypewriter: true
  }

  handleValidSubmit = model => {
    const api = new Api()
    api.apiPost("http://localhost:3000/surveys", { message: model.technology })
      .then(response => { this.props.onComplete(response) })
      .catch(response => console.log("Fail!", response))
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
      <Form
        ref={form => { this.form = form }}
        onValidSubmit={this.handleValidSubmit}
        className={classes.form}>

        <label onClick={this.handleLabelClick}>
          {this.state.showTypewriter &&
            <Typewriter className={classes.typewriter} />}

          <Input
            innerRef={input => { this.input = input }}
            name="technology"
            value=""
            onBlur={this.handleInputBlur} />

          <Button text="Submit" />
        </label>
      </Form>
    )
  }

}
