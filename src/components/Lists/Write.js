import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { listState } from "../../Store/list";
import styles from "../../styles/Write.module.css";

export default function Wirte(listData) {
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
    like: false,
    lookup: 0,
  });

  const setList = useSetRecoilState(listState);

  const navigate = useNavigate();

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
          lookup: 0,
          like: false,
        },
        ...copy,
      ];
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      id: listData.length + 1,
      [name]: value,
    });
  };

  console.log(inputData);

  return (
    <container className={styles.container}>
      <form className={styles.form}>
        <header className={styles.header}>
          <input
            className={styles.titleInput}
            type="text"
            name="title"
            value={inputData.title}
            placeholder="제목을 입력해주세요"
            onChange={onChange}
          ></input>
          <writer className={styles.writer}>💗 작성자 </writer>
          <input
            className={styles.writerInput}
            type="text"
            name="writer"
            value={inputData.writer}
            onChange={onChange}
          ></input>
          <span className={styles.span} value={today} onChange={onChange}>
            💗 작성일자 : {today}
          </span>
          <textarea
            className={styles.textarea}
            type="text"
            name="content"
            value={inputData.content}
            placeholder="내용을 입력해주세요."
            onChange={onChange}
          />
        </header>
        <button
          className={styles.button}
          onClick={() => {
            writeHandler();
            navigate("/Board");
          }}
        >
          작성 완료
        </button>
        <button
          className={styles.button}
          onClick={() => {
            alert("초기화하시겠습니까?");
          }}
        >
          초기화
        </button>
      </form>
    </container>
  );
}
