import React from "react"
import { Form } from "formsy-react"
import Api from "api"
import Input from "components/input"
import Button from "components/button"

import classes from "./style.scss"

export default class ConfirmationForm extends React.Component {

  state = {
    loading: false
  }

  handleValidSubmit = model => {
    this.setState({ loading: true })
    const api = new Api()
    api.submitEmail(this.props.survey.uuid, model.email)
      .then(response => { this.props.onComplete(response) })
      .catch(response => console.log("Fail!", response))
  }

  render() {
    return (
      <div className={classes.form}>
        <Form onValidSubmit={this.handleValidSubmit}>
          <Input
            name="email"
            value=""
            validations={{
              isEmail: true,
              isPresent: true
            }}
            placeholder="you@email.com" />

          <Button text="Submit" loading={this.state.loading} />
        </Form>
      </div>
    )
  }

}
