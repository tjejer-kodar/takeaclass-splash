import React from "react"
import { Form } from "formsy-react"
import classNames from "classnames"
import Api from "api"
import Input from "components/input"
import Button from "components/button"

import Typewriter from "../typewriter"
import Hint from "../hint"

import classes from "./style.scss"

const getHintClassnames = showHint => (
  classNames(classes.hint, {
    [classes.visible]: showHint
  })
)

export default class SurveyForm extends React.Component {

  state = {
    showTypewriter: true,
    showHint: false,
    inputValue: ""
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout)
  }

  showHint = () => {
    const model = this.form.getModel()
    if (model.message === "") {
      this.setState({ showHint: true })
    }
  }

  handleValidSubmit = model => {
    const api = new Api()
    api.submitSurvey(model.message)
      .then(response => { this.props.onComplete(response) })
      .catch(response => console.log("Fail!", response))
  }

  handleLabelClick = () => {
    this.setState({ showTypewriter: false })
    this.timeout = setTimeout(this.showHint, 1000)
  }

  handleInputBlur = () => {
    const model = this.form.getModel()
    if (model.message === "") {
      this.setState({ showTypewriter: true, showHint: false })
    }
  }

  handleHintClick = hint => {
    this.setState({
      inputValue: hint,
      showTypewriter: false,
      showHint: false
    })
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
            name="message"
            value={this.state.inputValue}
            onBlur={this.handleInputBlur} />
        </label>

        <Button text="Submit" />

        <div className={getHintClassnames(this.state.showHint)}>
          <Hint onHintClick={this.handleHintClick} />
        </div>
      </Form>
    )
  }

}
