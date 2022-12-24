import React, { useEffect, useState } from "react";
import baseUrl from "./../../../assets/baseUrl";
import classes from "../styles/BlModi.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SaveButton from "./SaveButton";

const BlModi = () => {
  let { no } = useParams();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const userInfo = JSON.parse(user);

  //const [detail, setDetail] = useState([]);
  const [tit, setTit] = useState("");
  const [content, setContnet] = useState("");

  const getUrl = baseUrl + "/businesslog/" + no;
  const patchUrl = baseUrl + "/businesslog/" + userInfo[0].userNo + "/" + no;

  useEffect(() => {
    axios({
      method: "get",
      url: getUrl,
    }).then((response) => {
      // setDetail(response.data);
      setTit(response.data.blTit);
      setContnet(response.data.blContent);
    });
  }, [no, getUrl]);

  const onTitChange = (e) => {
    setTit(e.target.value);
  };

  const onContentChange = (e) => {
    setContnet(e.target.value);
  };

  const onSubmit = (e) => {
		e.preventDefault();

    console.log(tit, content);
    axios({
      method: "patch",
      url: patchUrl,
      data: {
        blTit: tit,
        blContent: content,
      },
    }).then(() => {
      alert("수정이 완료되었습니다.");
      navigate("/businesslog");
    });
  };

  return (
    <div className={classes.container}>
      <h2>업무일지 수정</h2>
      <form onSubmit={onSubmit}>
        <table className={classes.table}>
          <tbody>
            <tr>
              <td className={classes.type}>제목</td>
              <td>
                <input
                  className={classes.input}
                  type="text"
                  onChange={onTitChange}
                  value={tit}
                />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={classes.type}>내용</td>
              <td>
                <textarea
                  className={`${classes.writearea} ${classes.input}`}
                  type="text"
                  onChange={onContentChange}
                  value={content}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={classes.btnContainer}>
          <button className={classes.SaveButton}>저장</button>
        </div>
      </form>
    </div>
  );
};

export default BlModi;
