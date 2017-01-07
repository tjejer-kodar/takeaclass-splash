import React from "react"
import { Form } from "formsy-react"
import Api from "api"
import Input from "components/input"
import Button from "components/button"

import classes from "./style.scss"

export default class ConfirmationForm extends React.Component {

  handleValidSubmit = model => {
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
              isEmail: true
            }}
            validationErrors={{
              isEmail: "You need to enter an email address!"
            }}
            placeholder="you@email.com" />

          <Button text="Submit" />
        </Form>
      </div>
    )
  }

}
