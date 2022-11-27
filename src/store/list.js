import { atom, useRecoilValue, selector } from "recoil";

export const listState = atom({
  key: "listState",
  default: [
    {
      id: "1",
      title: "제목1",
      writer: "작성자1",
      created: "2022-11-24",
      content: "내용1",
      like: false,
      lookup: 0,
    },
  ],
});
