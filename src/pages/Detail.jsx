import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { TestWrapper, DetailBox } from "../globalcss";

function Detail() {
  const todo = useSelector((state) => state.todos);
  const param = useParams();
  const detailTodo = todo.find((item) => {
    return item.id === Number(param.id);
  });
  console.log(param);
  return (
    <TestWrapper>
      <DetailBox>
        {" "}
        <Link to="/">이전으로</Link>
        <div> ID:{param.id}</div>
        <div>{detailTodo.title}</div>
        <div>{detailTodo.content}</div>
      </DetailBox>
    </TestWrapper>
  );
}

export default Detail;
