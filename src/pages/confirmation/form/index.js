import React from "react"
import { Form } from "formsy-react"
import Input from "components/input"
import Button from "components/button"

import classes from "./style.scss"

export default class ConfirmationForm extends React.Component {

  render() {
    return (
      <div className={classes.form}>
        <Form>
          <Input
            name="email"
            value=""
            placeholder="you@email.com" />

          <Button text="Submit" />
        </Form>
      </div>
    )
  }

}
