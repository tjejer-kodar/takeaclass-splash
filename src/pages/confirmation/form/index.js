import React from "react"
import { Form } from "formsy-react"
import Api from "api"
import Input from "components/input"
import Button from "components/button"
import Hint from "components/hint"

import classes from "./style.scss"

export default class ConfirmationForm extends React.Component {

  state = {
    loading: false,
    showHint: false,
    highlightHint: false
  }

  handleValidSubmit = model => {
    this.setState({ loading: true })

    const api = new Api()
    api.submitEmail(this.props.survey.uuid, model.email)
      .then(response => { this.props.onComplete(response) })
      .catch(response => console.log("Fail!", response))
  }

  handleInvalidSubmit = () => {
    this.setState({
      showHint: true,
      highlightHint: this.state.showHint
    }, () => {
      setTimeout(() => { this.setState({ highlightHint: false }) }, 500)
    })
  }

  render() {
    return (
      <div className={classes.form}>
        <Form
          onValidSubmit={this.handleValidSubmit}
          onInvalidSubmit={this.handleInvalidSubmit}>
          <Input
            name="email"
            value=""
            validations={{
              isEmail: true,
              isPresent: true
            }}
            placeholder="you@email.com" />

          <Button text="Submit" loading={this.state.loading} />

          <Hint
            visible={this.state.showHint}
            highlight={this.state.highlightHint}>
            Enter a valid email address so we can let you
            know when there's more news.
          </Hint>
        </Form>
      </div>
    )
  }

}
