// import React from "react";
// import { useState } from "react";
// import { submitTodo } from "../redux/modules/todos";
// import { useDispatch } from "react-redux";
// import { StForm, StInput } from "../globalcss";

// function Form() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const dispatch = useDispatch();
//   return (
//     <StForm
//       onSubmit={(e) => {
//         e.preventDefault();
//         dispatch(submitTodo({ title, content }));
//         setTitle("");
//         setContent("");
//       }}
//     >
//       <div>
//         제목 :{" "}
//         <input
//           required
//           type="text"
//           value={title}
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//         />{" "}
//         내용 :{" "}
//         <input
//           required
//           type="text"
//           value={content}
//           onChange={(e) => {
//             setContent(e.target.value);
//           }}
//         />
//       </div>
//       <StInput type="submit" value="추가하기" />
//     </StForm>
//   );
// }

// export default Form;

import React from "react";
import { useState } from "react";
import { submitTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";
import { StForm, StInput } from "../globalcss";

function Form() {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });

  const dispatch = useDispatch();

  return (
    <StForm
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          submitTodo({
            title: todo.title,
            content: todo.content,
          })
        );
        setTodo({
          title: "",
          content: "",
        });
      }}
    >
      <div>
        제목 :{" "}
        <input
          required
          type="text"
          value={todo.title}
          onChange={(e) => {
            setTodo({
              ...todo,
              title: e.target.value,
            });
          }}
        />{" "}
        내용 :{" "}
        <input
          required
          type="text"
          value={todo.content}
          onChange={(e) => {
            setTodo({
              ...todo,
              content: e.target.value,
            });
          }}
        />
      </div>
      <StInput type="submit" value="추가하기" />
    </StForm>
  );
}

export default Form;
