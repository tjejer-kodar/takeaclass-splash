import "whatwg-fetch"
import React from "react"
import ReactDOM from "react-dom"
import Formsy from "formsy-react"
import Raven from "raven-js"

import App from "app"

import "./style/all.scss"

if (window.host !== undefined) {
  Raven.config("https://9515837d73e94b2e9f4dcad3d7b6e443@sentry.io/128809").install()
}

Formsy.addValidationRule("isPresent", (values, value) => (
  value !== null && value !== "" && value !== undefined
))

ReactDOM.render(<App />, document.getElementById("site"))
