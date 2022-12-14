import React from "react";

import { useParams, useNavigate } from "react-router-dom";

import styles from "../../styles/Detail.module.css";
import { listState } from "../../Store/list";
import { useRecoilState } from "recoil";
import unLikeIcon from "../../Icons/001.png";
import likeIcon from "../../Icons/002.png";

export default function Detail() {
  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();
  const [listData, setListData] = useRecoilState(listState);

  const deleteHandler = () => {
    setListData((prevState) => {
      const nextState = [...prevState].filter((v) => v.id.toString() !== id);
      // params λ μ λΆ string
      console.log(nextState);
      return nextState;
    });
  };

  const toggleHandler = () => {
    setListData((prevState) => {
      const copy = [...prevState];
      return copy.map((item) => {
        if (item.id.toString() === id) {
          return {
            ...item,
            like: !item.like,
          };
        }
        return item;
      });
    });
  };

  const findItem = listData.find((item) => {
    return item.id == id;
  });

  return (
    <container className={styles.container}>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.div}>
            <h1 className={styles.h1}>Take a Looook</h1>
          </div>
          <span className={styles.no}>π· No. {findItem.id}</span>
          <span className={styles.title}>π· μ λͺ© : {findItem.title}</span>
          <br />
          <br />
          <span className={styles.text}>π· μμ±μ : {findItem.writer}</span>
          <span className={styles.text}>π· μμ±μΌμ : {findItem.created}</span>
          <span className={styles.like}>
            π· μ’μμ :
            {findItem.like ? (
              <img
                className={styles.img}
                src={likeIcon}
                alt="like"
                width="25"
                height="25"
                onClick={toggleHandler}
              />
            ) : (
              <img
                className={styles.img}
                src={unLikeIcon}
                alt="unLike"
                width="25"
                height="25"
                onClick={toggleHandler}
              />
            )}
          </span>
        </header>
        <textarea className={styles.textarea} readonly="readonly">
          {findItem.content}
        </textarea>
        <div>
          <editButton
            className={styles.button}
            onClick={() => navigate(`/Board/Detail/${findItem.id}/Edit`)}
          >
            μμ νκΈ°
          </editButton>
          <deleteButton
            className={styles.button}
            onClick={() => {
              if (window.confirm("μ­μ νμκ² μ΅λκΉ?")) {
                deleteHandler();
                navigate("/Board");
              } else return;
            }}
          >
            μ­μ νκΈ°
          </deleteButton>
        </div>
      </main>
    </container>
  );
}
