import React from "react";
import { useSelector } from "react-redux";
import { Wrap, WrapBox } from "../globalcss";
import Nav from "../component/Nav";
import Form from "../component/Form";
import WorkingCards from "../component/WorkingCards";
import DoneCards from "../component/DoneCards";

function Home() {
  const todo = useSelector((state) => state.todos);
  return (
    <Wrap>
      <WrapBox>
        <Nav />
        <Form />
        <WorkingCards todo={todo} />
        <DoneCards todo={todo} />
      </WrapBox>
    </Wrap>
  );
}

export default Home;
