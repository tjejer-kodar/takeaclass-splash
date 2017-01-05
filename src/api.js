export default class Api {

  submitSurvey(message) {
    return this.callApi("https://checkout.tjejerkodar.se/surveys", { message }, "POST")
  }

  submitEmail(surveyUuid, email) {
    const url = `https://checkout.tjejerkodar.se/surveys/${surveyUuid}`
    return this.callApi(url, { email }, "PUT")
  }

  callApi(url, body, method) {
    return fetch(url, {
      method,
      headers: this.defaultHeaders(),
      body: JSON.stringify(body)
    })
    .then(this.isOk)
    .then(response => response.json())
  }

  defaultHeaders() {
    return {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }

  isOk(response) {
    if (response.ok) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error("Error"), response)
    }
  }

}
