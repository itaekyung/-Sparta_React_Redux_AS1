import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "../component/Nav";
import { TestWrapper, DetailBox } from "../globalcss";

function Detail() {
  const todo = useSelector((state) => state.todos);
  const param = useParams();
  const detailTodo = todo.find((item) => {
    return item.id === Number(param.id);
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (detailTodo === undefined) {
      alert("아직 DB에 저장되어 있지 않아요 ㅈㅅㅈㅅ");
      navigate("/");
    }
  }, []);
  console.log(param);
  return (
    <TestWrapper>
      <DetailBox>
        {" "}
        <Link to="/">이전으로</Link>
        <div> ID:{param.id}</div>
        <div>{detailTodo?.title}</div>
        <div>{detailTodo?.content}</div>
      </DetailBox>
    </TestWrapper>
  );
}

export default Detail;
