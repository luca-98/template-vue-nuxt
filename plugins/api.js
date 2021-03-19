export default function ({ $axios }, inject) {
  const api = new API($axios);
  inject('api', api)
}

class API {
  constructor(axios) {
    this.axios = axios
    this.baseUrl = process.env.apiBaseUrl
  }

}
