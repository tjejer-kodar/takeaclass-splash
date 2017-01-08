import React from "react"
import { Form } from "formsy-react"
import Api from "api"
import Input from "components/input"
import Button from "components/button"

import Typewriter from "../typewriter"
import Hint from "../hint"

import classes from "./style.scss"

export default class SurveyForm extends React.Component {

  state = {
    loading: false,
    showTypewriter: true,
    showHint: false,
    highlightHint: false,
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
    this.setState({ loading: true })

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
    // This debounce is to give other elements a chance to fill the form before
    // we check it. If the input was blurred due to clicking on a hint, then we
    // want to give the hint a chance to fill the input before we check
    // its emptiness.
    setTimeout(() => {
      const model = this.form.getModel()
      if (model.message === "" && !this.state.showHint) {
        this.setState({ showTypewriter: true })
      }
    }, 300)
  }

  handleHintClick = hint => {
    this.setState({
      inputValue: hint,
      showTypewriter: false,
      showHint: false
    })
  }

  handleInvalidSubmit = () => {
    this.setState({
      showTypewriter: false,
      showHint: true,
      highlightHint: true
    }, () => {
      setTimeout(() => { this.setState({ highlightHint: false }) }, 500)
    })
  }

  render() {
    return (
      <Form
        ref={form => { this.form = form }}
        onValidSubmit={this.handleValidSubmit}
        onInvalidSubmit={this.handleInvalidSubmit}
        className={classes.form}>

        <label onClick={this.handleLabelClick}>
          {this.state.showTypewriter &&
            <Typewriter className={classes.typewriter} />}

          <Input
            innerRef={input => { this.input = input }}
            name="message"
            value={this.state.inputValue}
            validations={{
              isPresent: true
            }}
            onBlur={this.handleInputBlur} />
        </label>

        <Button text="Submit" loading={this.state.loading} />

        <Hint
          visible={this.state.showHint}
          highlight={this.state.highlightHint}
          onHintClick={this.handleHintClick} />
      </Form>
    )
  }

}
