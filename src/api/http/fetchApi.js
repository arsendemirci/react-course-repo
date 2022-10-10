class FetchApi {
  constructor() {
    this.headers = {
      "Content-Type": "application/json",
    };
    this.baseUrl = process.env.REACT_APP_BASE_URL;
  }
  async postData(url, data) {
    console.log("postData", data);
    const response = await fetch(this.baseUrl + url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: this.headers,
    });
    return response;
  }
  async getResponse(url) {
    const response = await fetch(this.baseUrl + url);
    return response;
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

export default new FetchApi();
