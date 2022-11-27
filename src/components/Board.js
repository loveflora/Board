import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRecoilState } from "recoil";
import { listState } from "../Store/list";
import styles from "../styles/Board.module.css";
import unLikeIcon from "../Icons/001.png";
import likeIcon from "../Icons/002.png";

export default function Board() {
  const navigate = useNavigate();
  const [list, setList] = useRecoilState(listState);
  // const params = useParams();
  // const id = params.id;

  const toggleHandler = () => {
    setList((prevState) => {
      const copy = [...prevState];
      return copy.map((item) => {
        return {
          ...item,
          like: !item.like,
        };
      });
    });
  };

  return (
    <container className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.h1}>📋 BOARD LIST</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일자</th>
              <th>조회수</th>
              <th>좋아요</th>
            </tr>
          </thead>
          <tbody>
            {list.map((data, id) => {
              return (
                <tr
                  onClick={() => {
                    navigate(`/Board/Detail/${data.id}`);
                  }}
                >
                  {/* 행클릭하면 이동 */}
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.writer}</td>
                  <td>{data.created}</td>
                  <td>{data.lookup}</td>
                  <td>
                    {data.like ? (
                      <img
                        className={styles.img}
                        src={likeIcon}
                        alt="isLike"
                        width="25"
                        height="25"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleHandler();
                        }}
                      />
                    ) : (
                      <img
                        className={styles.img}
                        src={unLikeIcon}
                        alt="isLike"
                        width="25"
                        height="25"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleHandler();
                        }}
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
      <h5 className={styles.h5}> MADE BY. SAYWHAT</h5>
    </container>
  );
}
