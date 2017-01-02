export default class Api {

  apiPost(url, body) {
    return fetch(url, {
      method: "POST",
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
