import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { listState } from "../store/list";
import styles from "../styles/Board.module.css";
import unLikeIcon from "../Icons/001.png";
import likeIcon from "../Icons/002.png";

export default function Board() {
  const navigate = useNavigate();
  const list = useRecoilValue(listState);

  return (
    <container className={styles.container}>
      <main className={styles.main}>
        <table className={styles.table}>
          <thead>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일자</th>
            <th>조회수</th>
            <th>좋아요</th>
          </thead>
          <tbody>
            {list.map((v, i) => {
              return (
                <tr
                  onClick={() => {
                    navigate(`/Board/Detail/${v.id}`);
                  }}
                >
                  <td>{v.id}</td>
                  <td>{v.title}</td>
                  <td>{v.writer}</td>
                  <td>{v.created}</td>
                  <td>{v.lookUp}</td>
                  <td>
                    {v.like ? (
                      <img
                        className={styles.img}
                        src={likeIcon}
                        alt="like"
                        width="25"
                        height="25"
                      />
                    ) : (
                      <img
                        className={styles.img}
                        src={unLikeIcon}
                        alt="unlike"
                        width="25"
                        height="25"
                      />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
      <button
        className={styles.button}
        onClick={() => navigate("/Board/Write")}
      >
        작성하기
      </button>
    </container>
  );
}
