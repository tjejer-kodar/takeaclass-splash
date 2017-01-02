import React from "react"
import Survey from "survey"

import classes from "./style.scss"

export default class App extends React.Component {
  state = {
    stage: "survey",
    lastResponse: null
  }

  handleCompletedSurvey = response => {
    this.setState({
      stage: "confirmation",
      lastResponse: response
    })
  }

  renderStage() {
    switch (this.state.stage) {
      case "confirmation":
        return <div>Confirmation</div>
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
