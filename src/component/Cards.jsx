import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, moveTodo, updateTodo } from "../redux/modules/todos";

function Cards({ item }) {
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState(item.title);
  const [editContent, setEditContent] = useState(item.content);
  const [edit, setEdit] = useState(false);
  return (
    <div>
      {!edit ? (
        <div>
          <h3>{item.title}</h3>
          <h4>{item.content}</h4>
          <div>
            <button
              onClick={() => {
                dispatch(deleteTodo(item));
              }}
            >
              삭제하기
            </button>
            <button
              onClick={() => {
                dispatch(moveTodo(item));
              }}
            >
              {item.isDone ? "취소" : "완료"}
            </button>
            <button
              onClick={() => {
                setEdit(!edit);
                dispatch(updateTodo(item.id, editTitle, editContent));
              }}
            >
              수정하기
            </button>
          </div>
        </div>
      ) : (
        <div>
          제목 :
          <input
            type="text"
            value={editTitle}
            onChange={(e) => {
              setEditTitle(e.target.value);
            }}
          />
          내용 :
          <input
            type="text"
            value={editContent}
            onChange={(e) => {
              setEditContent(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setEdit(!edit);
              dispatch(updateTodo(item.id, editTitle, editContent));
            }}
          >
            수정완료
          </button>
        </div>
      )}
    </div>
  );
}

export default Cards;
