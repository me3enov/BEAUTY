export default class Api {
  constructor(config) {
    this.HEADERS = config.HEADERS;
    this.URL = config.URL;
    this.DATA_URL = config.DATA_URL;
    this.CAT_FOOD = config.CAT_FOOD;
    this.NYMUSHKA = config.NYMUSHKA;
    this.ERROR_TEXT = config.ERROR_TEXT;
  }

  // get user info
  getFoodItems() {
    return fetch(`${this.URL}${this.DATA_URL}${this.CAT_FOOD}${this.NYMUSHKA}`, {
      headers: this.HEADERS,
    })
      .then(this.checkServerResponse);
  }

  // check response from server
  checkServerResponse(res) {
    if (!res.ok) {
      return Promise.reject(new Error(`${this.ERROR_TEXT} ${res.status}`));
    }
    return res.json();
  }
}
