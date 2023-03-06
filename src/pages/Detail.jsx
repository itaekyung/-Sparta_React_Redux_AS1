import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const todo = useSelector((state) => state.todos);
  const param = useParams();
  const detailTodo = todo.find((item) => {
    return item.id === Number(param.id);
  });
  console.log(param);
  return (
    <div>
      <div>ID:{param.id}</div>
      <Link to="/">이전으로</Link>
      <div>{detailTodo.title}</div>
      <div>{detailTodo.content}</div>
    </div>
  );
}

export default Detail;
