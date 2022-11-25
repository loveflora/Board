import React from "react";
import styles from "../styles/SignUp.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [inputEmailData, setInputEmailData] = useState("");
  const [inputPW, setInputPW] = useState("");
  const [inputPWConfirm, setInputPWConfirm] = useState("");
  const [inputName, setInputName] = useState("");

  const navigate = useNavigate();

  const emptyValue = () => {
    if (!inputEmailData) {
      alert("이메일을 입력해주세요");
      return false;
    } else if (!inputPW) {
      alert("비밀번호를 입력해주세요");
      return false;
    } else if (!inputPWConfirm) {
      alert("비밀번호를 확인해주세요");
      return false;
    } else if (!inputName) {
      alert("성함을 입력해주세요");
      return false;
    } else alert("회원가입이 완료되었습니다");
    navigate("/");
  };

  return (
    <container className={styles.container}>
      <form className={styles.form}>
        <div className={styles.div}>
          <p className={styles.p}>WELCOME 🤝</p>
        </div>
        <input
          className={styles.input}
          value={inputEmailData}
          onChange={(e) => setInputEmailData(e.target.value)}
          placeholder="이메일을 입력해주세요"
        />
        <input
          className={styles.input}
          value={inputPW}
          type="password"
          onChange={(e) => setInputPW(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
        />
        <input
          className={styles.input}
          value={inputPWConfirm}
          type="password"
          onChange={(e) => setInputPWConfirm(e.target.value)}
          placeholder="비밀번호 확인"
        />
        <input
          className={styles.input}
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="성함을 입력해주세요"
        />
        <button className={styles.button} type="button" onClick={emptyValue}>
          Sign up
        </button>
      </form>
    </container>
  );
}
