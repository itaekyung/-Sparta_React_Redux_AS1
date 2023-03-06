import styled from "styled-components";

export const StNav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid black;
  align-items: center;
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapBox = styled.div`
  border: 1px solid black;
  max-width: 1200px;
  width: 1200px;
  min-height: 800px;
`;
export const ArticleBox = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 4px solid skyblue;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  padding: 20px;
  margin-right: 40px;
  margin-bottom: 10px;
`;

export const StForm = styled.form`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 50px;
  align-items: center;
  border-radius: 10px;
  background-color: wheat;
  height: 100px;
`;
