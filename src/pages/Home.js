import styled from "styled-components";

const Home = () => {
  return (
    <Contain>
      <h1>환영합니다 😉</h1>
      <span>투두리스트를 작성하고</span>
      <span>편하게 일정을 관리해 보세요</span>
    </Contain>
  );
};

export default Home;

const Contain = styled.div`
  width: 320px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  color: #1f485e;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  span {
    font-size: 20px;
    margin-top: 3px;
  }
`;
