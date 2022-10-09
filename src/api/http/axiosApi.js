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
  async getData(url) {
    const response = await this.http.get(`${this.baseUrl}${url}`);
    if (response.statusText === "OK" && response.data) {
      return response.data;
    } else {
      return [];
    }
  }
}
export default new AxiosApi();
