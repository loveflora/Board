import React from "react";

import { useParams, useNavigate } from "react-router-dom";

import styles from "../../styles/Detail.module.css";
import { listState } from "../../store/list";
import { useRecoilState } from "recoil";
import unLikeIcon from "../../Icons/001.png";
import likeIcon from "../../Icons/002.png";

export default function Detail() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [list, setListData] = useRecoilState(listState);

  const toggleHandler = () => {
    setListData((prevState) => {
      const copy = [...prevState];
      return copy.map((v) => {
        if (v.id.toString() === id) {
          return {
            ...v,
            like: !v.like,
          };
        }
        return v;
      });
    });
  };

  const findData = list.find((v) => {
    return v.id == id;
  });

  return (
    <container className={styles.container}>
      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.text}>글 번호 : {findData.id}</span>
          <span className={styles.text}>제목 : {findData.title}</span>
          <br />
          <span className={styles.text}>작성자 : {findData.writer}</span>
          <span className={styles.text}>작성일자 : {findData.created} </span>
          <span className={styles.text}>
            좋아요 :
            {findData.like ? (
              <img
                className={styles.like}
                src={likeIcon}
                alt="like"
                width="20"
                height="20"
                onClick={toggleHandler}
              />
            ) : (
              <img
                className={styles.like}
                src={unLikeIcon}
                alt="unLike"
                width="20"
                height="20"
                onClick={toggleHandler}
              />
            )}
          </span>
        </header>
        <textarea
          className={styles.textarea}
          value={findData.content}
          readOnly="readOnly"
        ></textarea>
      </main>
      <button
        className={styles.button}
        onClick={() => navigate(`/Board/Detail/${findData.id}/Edit`)}
      >
        수정하기
      </button>
      <button className={styles.button}>삭제하기</button>
    </container>
  );
}
