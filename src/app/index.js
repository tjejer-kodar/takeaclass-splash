import React from "react"
import Survey from "pages/survey"
import Confirmation from "pages/confirmation"
import Done from "pages/done"

import classes from "./style.scss"

const Footer = () =>
  <footer className={classes.footer}>
    <div className={classes.container}>
      <p>
        <span className={classes.highlight}>Wtf is this?</span>
        This is the new grand masterplan by the creators
        of <a href="http://tjejerkodar.se">Tjejer Kodar</a>.
        We promise, this will be bigger than you think. Soon to be released.
      </p>

      <p>Be the first to follow us everywhere. <a href="https://instagram.com/takeaclass.io">@takeaclass.io</a></p>
    </div>
  </footer>

export default class App extends React.Component {
  state = {
    // stage: "survey",
    stage: "done",
    survey: null
  }

  handleCompletedSurvey = response => {
    this.setState({
      stage: "confirmation",
      survey: response.survey
    })
  }

  handleCompletedConfirmation = response => {
    this.setState({
      stage: "done",
      survey: response.survey
    })
  }

  renderStage() {
    switch (this.state.stage) {
      case "confirmation":
        return (<Confirmation
          survey={this.state.survey}
          onComplete={this.handleCompletedConfirmation} />)
      case "done":
        return <Done />
      default:
        return <Survey onComplete={this.handleCompletedSurvey} />
    }
  }

  render() {
    return (
      <div className={classes.app}>
        <div className={classes.stage}>
          <div className={classes.container}>
            {this.renderStage()}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
