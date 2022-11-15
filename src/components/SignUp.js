import App from "../App";
import React from "react";
import styles from "../styles/SignUp.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPW, setInputPW] = useState("");
  const [inputPWConfirm, setInputPWConfirm] = useState("");
  const [inputName, setInputName] = useState("");

  const navigate = useNavigate();

  const emptyValue = () => {
    if (!inputEmail) {
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
    } else return true;
  };

  return (
    <container className={styles.container}>
      <form className={styles.form}>
        <input
          className={styles.input}
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
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
        <button
          className={styles.button}
          onClick={() => {
            if (emptyValue()) {
              alert("회원가입이 완료되었습니다");
              navigate("/");
            } else {
            }
          }}
        >
          Sign up
        </button>
      </form>
    </container>
  );
}
