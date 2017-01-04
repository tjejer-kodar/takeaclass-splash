import React from "react"
import Survey from "pages/survey"
import Confirmation from "pages/confirmation"

import classes from "./style.scss"

export default class App extends React.Component {
  state = {
    // stage: "survey",
    stage: "confirmation",
    lastResponse: null
  }

  handleCompletedSurvey = response => {
    this.setState({
      stage: "confirmation",
      lastResponse: response
    })
  }

  handleCompletedConfirmation = response => {
    debugger
  }

  renderStage() {
    switch (this.state.stage) {
      case "confirmation":
        return <Confirmation onComplete={this.handleCompletedConfirmation} />
      default:
        return <Survey onComplete={this.handleCompletedSurvey} />
    }
  }

  render() {
    return (
      <div className={classes.app}>
        {this.renderStage()}
      </div>
    )
  }
}
