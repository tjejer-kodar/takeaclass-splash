import React from "react"
import { HOC as hoc } from "formsy-react"

import classes from "./style.scss"

class Input extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hasValue: this.props.getValue() !== ""
    }
  }

  valueChanged = e => {
    this.props.setValue(e.target.value)
    this.setState({
      hasValue: !!e.target.value
    })
  }

  render() {
    return (
      <input
        className={classes.input}
        type="text"
        value={this.props.getValue()}
        onBlur={this.props.onBlur}
        onChange={this.valueChanged} />
    )
  }

}

export default hoc(Input)
