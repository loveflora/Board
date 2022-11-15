import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";

import { listState } from "../../store/list";
import styles from "../../styles/Write.module.css";

import unLikeIcon from "../../Icons/001.png";
import likeIcon from "../../Icons/002.png";

export default function Write() {
  const setList = useSetRecoilState(listState);
  const list = useRecoilValue(listState);

  const navigate = useNavigate();

  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const today = year + "-" + month + "-" + day;

  const [inputData, setInputData] = useState({
    id: "",
    title: "",
    writer: "",
    created: today,
    content: "",
    lookUp: 0,
    like: false,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, id: list.length + 1, [name]: value });
  };

  const init = () => {
    if (window.confirm("초기화하시겠습니까?")) {
      setInputData((prevState) => ({
        ...prevState,
        title: "",
        writer: "",
        content: "",
      }));
    } else {
      return;
    }
  };

  // 추가
  const writeHandler = () => {
    setList((listState) => {
      const id = listState.length + 1;
      const copy = [...listState];
      return [
        {
          id: id,
          title: inputData.title,
          writer: inputData.writer,
          content: inputData.content,
          created: inputData.created,
          lookUp: 0,
          like: false,
        },
        ...copy,
      ];
    });
  };

  console.log(inputData);

  return (
    <container className={styles.container}>
      <form className={styles.main}>
        <header className={styles.header}></header>
        <input
          className={styles.titleInput}
          type="text"
          name="title"
          value={inputData.title}
          placeholder="제목을 입력해주세요"
          onChange={onChange}
        ></input>
        <span className={styles.span}>작성자 : </span>
        <input
          className={styles.writerInput}
          type="text"
          name="writer"
          value={inputData.writer}
          onChange={onChange}
        ></input>
        <span className={styles.span}>작성일자 : {today} </span>
        <textarea
          className={styles.textarea}
          name="content"
          placeholder="내용을 작성해주세요"
          value={inputData.content}
          onChange={onChange}
        ></textarea>
      </form>
      <button
        className={styles.button}
        onClick={() => {
          writeHandler();
          navigate("/Board");
        }}
      >
        작성완료
      </button>
      <button className={styles.button} onClick={init}>
        초기화
      </button>
    </container>
  );
}
