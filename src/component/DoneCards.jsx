import React from "react";
import { ArticleBox, TodoBoxWrap } from "../globalcss";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import { Section } from "../globalcss";

function DoneCards({ todo }) {
  return (
    <Section>
      <h2>Done..!π</h2>
      <TodoBoxWrap>
        {todo.map((item) => {
          if (item.isDone === true)
            return (
              <ArticleBox key={item.id}>
                <Link to={`/detail/${item.id}`}>μμΈνμ΄μ§</Link>
                <Cards item={item} />
              </ArticleBox>
            );
        })}
      </TodoBoxWrap>
    </Section>
  );
}

export default DoneCards;
