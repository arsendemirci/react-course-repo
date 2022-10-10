import { useState, useCallback } from "react";
import { fetchApi } from "@http";

const useFetchApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (config, applyData) => {
    console.log("config", config);
    const requestConfig = {
      url: config.url,
      method: config.method || "GET",
      body: config.body || null,
    };
    setIsLoading(true);
    setError(null);
    try {
      let response;
      if (requestConfig.method === "GET") {
        response = await fetchApi.getResponse(requestConfig.url);
      } else if (requestConfig.method === "POST") {
        response = await fetchApi.postData(requestConfig.url, requestConfig.body);
      }
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const fetchedData = await response.json();
      applyData(fetchedData);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useFetchApi;
