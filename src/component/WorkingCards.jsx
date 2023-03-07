import React from "react";
import { ArticleBox, TodoBoxWrap, Section } from "../globalcss";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../component/Cards";

function WorkingCards({ todo }) {
  const navigate = useNavigate();
  return (
    <Section>
      <h2>Working...🔥</h2>
      <TodoBoxWrap>
        {todo.map((item) => {
          if (item.isDone === false)
            return (
              <ArticleBox key={item.id}>
                <Link to={`/detail/${item.id}`}>상세페이지</Link>
                {/* <button
                  onClick={() => {
                    navigate(`/detail/${item.id}`);
                  }}
                >
                  상세페이지
                </button> */}
                <Cards item={item} />
              </ArticleBox>
            );
        })}
      </TodoBoxWrap>
    </Section>
  );
}

export default WorkingCards;
