import React from "react";
import { useState, useEffect } from "react";
import baseUrl from "./../../../assets/baseUrl";
import BoardPagination from "./BoardPagination";
import TopBar from "./TopBar";
import axios from "axios";

const RequestAppr = () => {
  const [data, setData] = useState([]);
  const menuType = "결재할 문서";
  const user = localStorage.getItem("user");
  const userInfo = JSON.parse(user);
  const getUrl = baseUrl + "/approval/list";

  useEffect(() => {
    axios({
      method: "get",
      url: getUrl,
    }).then((response) => {
      setData(
        response.data.filter(
          (data) => data.apprYn === "Wait" && data.apNo === userInfo[0].userNo
        )
      );
    });
  }, [getUrl, menuType]);
  return (
    <div style={{width: "70%"}}>
      <TopBar menuType={menuType} />
      <BoardPagination menuType={menuType} data={data} />
    </div>
  );
};

export default RequestAppr;
