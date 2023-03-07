import { useState } from "react";

export const useInput = (initial) => {
  const [todo, setTodo] = useState(initial);
  const handler = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value }); //콜백함수를 주고 구조분해할당 해주기
  };
  return [todo, setTodo, handler];
};
