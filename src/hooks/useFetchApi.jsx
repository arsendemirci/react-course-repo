import { useEffect, useState } from "react";
import { fetchApi } from "@http";

const useFetchApi = (url, method = "GET") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi.getData(url).then((data) => {
      setData(data);
    });
  }, [url, method]);

  return [data];
};

export default useFetchApi;
