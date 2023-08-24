import styled from "styled-components";
import { Container } from "../style/styles";

const Home = () => {
  return (
    <Wrap>
      <h1>환영합니다 😉</h1>
      <span>투두리스트를 작성하고</span>
      <span>편하게 일정을 관리해 보세요</span>
    </Wrap>
  );
};

export default Home;

const Wrap = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  h1 {
    font-size: 22px;
    margin-bottom: 20px;
  }

  span {
    font-size: 18px;
    margin-top: 3px;
  }
`;
