import { useEffect, useState } from "react";
import FetchApi from "../api/http/fetchApi";

const useFetchApi = (url, method = "GET") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchApi.getData(url).then((data) => {
      setData(data);
    });
  }, [url, method]);

  return [data];
};

export default useFetchApi;
