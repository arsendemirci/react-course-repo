import axios from "axios";

class AxiosApi {
  constructor() {
    this.baseUrl = process.env.REACT_APP_BASE_URL;
    this.http = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    });
  }
  postData(url, data) {
    return this.http.post(`${this.baseUrl}${url}`, data);
  }
  getData(url) {
    return this.http.get(`${this.baseUrl}${url}`);
  }
}
