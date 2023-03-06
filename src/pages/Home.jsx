import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Wrap, WrapBox, ArticleBox } from "../globalcss";
import Nav from "../component/Nav";
import Form from "../component/Form";

import Cards from "../component/Cards";

function Home() {
  const todo = useSelector((state) => state.todos);
  return (
    <Wrap>
      <WrapBox>
        <Nav />
        <Form />
        <section>
          <h2>Working...🔥</h2>
          <div className="wrap-cards">
            {todo.map((item) => {
              if (item.isDone === false)
                return (
                  <ArticleBox key={item.id}>
                    <Link to={`/detail/${item.id}`}>상세페이지</Link>
                    <Cards item={item} />
                  </ArticleBox>
                );
            })}
          </div>
        </section>
        <section>
          <h2>Done..!🎉</h2>
          <div className="wrap-cards">
            {todo.map((item) => {
              if (item.isDone === true)
                return (
                  <ArticleBox key={item.id}>
                    <Link to={`/detail/${item.id}`}>상세페이지</Link>
                    <Cards item={item} />
                  </ArticleBox>
                );
            })}
          </div>
        </section>
      </WrapBox>
    </Wrap>
  );
}

export default Home;
