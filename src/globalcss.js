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
  white-space: nowrap;
  overflow: hidden;
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

export const TestWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const DetailBox = styled.div`
  border: 1px solid skyblue;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  white-space: nowrap;
  overflow: hidden;
`;

export const StInput = styled.input`
  width: 100px;
  height: 30px;
  &:hover {
    background-color: skyblue;
    color: white;
  }
  border-radius: 10px;
  border: 0px;
`;

export const TodoBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Section = styled.section`
  padding: 30px;
`;
