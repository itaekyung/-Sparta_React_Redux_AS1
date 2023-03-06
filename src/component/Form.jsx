import React from "react";
import { useState } from "react";
import { submitTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";
import { StForm } from "../globalcss";
import styled from "styled-components";

function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  //하나씩만 입력되는 이유
  return (
    <StForm
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(submitTodo({ title, content }));
        setTitle("");
        setContent("");
      }}
    >
      <div>
        제목 :{" "}
        <input
          required
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />{" "}
        내용 :{" "}
        <input
          required
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <StInput type="submit" value="추가하기" />
    </StForm>
  );
}

const StInput = styled.input`
  width: 100px;
  height: 30px;
  &:hover {
    background-color: brown;
    color: white;
  }
`;

export default Form;
