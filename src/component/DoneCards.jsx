import React from "react";
import { ArticleBox, TodoBoxWrap } from "../globalcss";
import { Link } from "react-router-dom";
import Cards from "./Cards";

function DoneCards({ todo }) {
  return (
    <section>
      <h2>Done..!🎉</h2>
      <TodoBoxWrap>
        {todo.map((item) => {
          if (item.isDone === true)
            return (
              <ArticleBox key={item.id}>
                <Link to={`/detail/${item.id}`}>상세페이지</Link>
                <Cards item={item} />
              </ArticleBox>
            );
        })}
      </TodoBoxWrap>
    </section>
  );
}

export default DoneCards;
