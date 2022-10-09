class FetchApi {
  constructor() {
    this.headers = {
      "Content-Type": "application/json",
    };
    this.baseUrl = process.env.REACT_APP_BASE_URL;
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
const FetchApi = new FetchApi();
Object.freeze(FetchApi);

export default FetchApi;
