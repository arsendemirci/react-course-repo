class Api {
  constructor() {
    this.headers = {
      "Content-Type": "application/json",
    };
    this.baseUrl =
      "https://react-http-5b874-default-rtdb.europe-west1.firebasedatabase.app/";
  }
  postData(url, data) {
    fetch(this.baseUrl + url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: this.headers,
    });
  }
  async getData(url) {
    try {
      const response = await fetch(this.baseUrl + url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      return await response.json();
    } catch (error) {
      return [];
    }
  }
}
const api = new Api();
Object.freeze(api);

export default api;
