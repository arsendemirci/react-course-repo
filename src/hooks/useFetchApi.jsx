import { useEffect, useState } from "react";
import { fetchApi } from "@http";

const useFetchApi = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi.getData(url).then((data) => {
      setData(data);
    });
  }, [url]);

  // const post = useCallback(async () => {
  //   if (method === "POST" && payload) {
  //     fetchApi.postData(url, payload);
  //   }
  // }, [url, method]);

  return [data];
};

export default useFetchApi;
