import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Board from "./components/Board";
import Write from "./components/Lists/Write";
import Detail from "./components/Lists/Detail";
import Edit from "./components/Lists/Edit";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/Board/Detail/:id" element={<Detail />} />
          <Route path="/Board/Write" element={<Write />} />
          <Route path="/Board/Detail/:id/Edit" element={<Edit />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
