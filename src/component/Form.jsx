import React, { useId } from "react";
import { useState } from "react";
import { submitTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";
import { StForm, StInput } from "../globalcss";
import { useInput } from "../hooks/useInput";

function Form() {
  const [todo, setTodo, handler] = useInput({
    title: "",
    content: "",
  });
  const dispatch = useDispatch();

  return (
    <StForm
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(submitTodo({ title: todo.title, content: todo.content }));
        setTodo({ title: "", content: "" });
      }}
    >
      <div>
        제목 : &nbsp;
        <input
          required
          type="text"
          value={todo.title}
          onChange={handler}
          name="title"
          maxLength={10}
          placeholder={"최대 10글자(입력해야)"}
        />
        &nbsp; 내용 : &nbsp;
        <input
          required
          type="text"
          value={todo.content}
          onChange={handler}
          name="content"
          maxLength={20}
          placeholder={"최대 20글자(추가돼요)"}
        />
      </div>
      <StInput
        type="submit"
        value="추가하기"
        disabled={!todo.title || !todo.content}
      />
    </StForm>
  );
}

export default Form;
