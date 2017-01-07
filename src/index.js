import "whatwg-fetch"
import React from "react"
import ReactDOM from "react-dom"
import Formsy from "formsy-react"

import App from "app"

import "./style/all.scss"

Formsy.addValidationRule("isPresent", (values, value) => (
  value !== null && value !== "" && value !== undefined
))

ReactDOM.render(<App />, document.getElementById("site"))
