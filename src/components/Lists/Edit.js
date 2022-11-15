import React from "react";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { listState } from "../../store/list";
import styles from "../../styles/Write.module.css";

export default function Edit() {
  const list = useRecoilValue(listState);
  const setList = useSetRecoilState(listState);
  const navigate = useNavigate();

  const { id } = useParams();

  const findData = list.find((v) => {
    return v.id == id;
  });

  console.log(findData.inputData);

  //   const handleUpdate = () => {
  //     const onChange = (e) => {
  //       const { name, value } = e.target;

  //       setList((listState) => {
  //         const copy = [...listState];
  //         return [
  //           {
  //         [name]: value

  //       }
  //     ]
  //   }{ ...findData.inputData, });
  // };

  // handleUpdate = (id, data) => {
  //   const { users } = this.state;
  //   this.setState({
  //     users: users.map((user) => (user.id === id ? { ...user, ...data } : user))
  //   });
  // };

  return (
    <container className={styles.container}>
      <form className={styles.form}>
        <header className={styles.header}>
          <input className={styles.titleInput} name="title" type="text"></input>
          <input
            className={styles.writerInput}
            name="writer"
            type="text"
            value={findData.writer}
            // onChange={onChange}
          ></input>
          <span> 작성일자 : </span>
        </header>
        <textarea
          className={styles.textarea}
          name="content"
          type="text"
        ></textarea>
      </form>
      <button
        className={styles.button}
        onClick={() => {
          navigate("/Board");
        }}
      >
        수정완료
      </button>
    </container>
  );
}
