import App from "../App";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/Login.module.css";

export default function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPW, setInputPW] = useState("");

  const navigate = useNavigate();

  const emptyValue = () => {
    if (!inputEmail) {
      alert("이메일을 입력해주세요");
      return false;
    } else if (!inputPW) {
      alert("비밀번호를 입력해주세요");
      return false;
    } else {
      navigate("/Board");
    }
  };

  return (
    <container className={styles.container}>
      <form>
        <div className={styles.div}>
          <p className={styles.p}>👋 HI, THERE ? </p>
        </div>
        <input
          className={styles.input}
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          placeholder="이메일을 입력해주세요"
        />
        <input
          className={styles.input}
          value={inputPW}
          onChange={(e) => setInputPW(e.target.value)}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <loginButton
          className={styles.button}
          onClick={() => {
            emptyValue();
          }}
        >
          Login
        </loginButton>
        <signUpButton
          className={styles.button}
          onClick={() => {
            navigate("/SignUp");
          }}
        >
          Sign Up
        </signUpButton>
      </form>
    </container>
  );
}
