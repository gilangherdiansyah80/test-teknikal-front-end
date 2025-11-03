import { useState, useEffect } from "react";
import FetchService from "../services/FetchService";

const UseFetch = () => {
  const [dataList, setDataList] = useState([]);
  const [dataDetail, setDetail] = useState([]);

  const fetchList = async () => {
    try {
      const result = await FetchService.getAllData();
      setDataList(result.result);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDetail = async () => {
    try {
      const result = await FetchService.getAllData();
      setDetail(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDetail();
    fetchList;
  }, []);

  return { dataList, dataDetail };
};

export default UseFetch;
