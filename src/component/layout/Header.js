import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Contain>
      <Nav>
        <StyledLink to="/">홈</StyledLink>
        <StyledLink to="/signin">로그인</StyledLink>
        <StyledLink to="/signup">회원가입</StyledLink>
        <StyledLink to="/todo">Todo</StyledLink>
      </Nav>
    </Contain>
  );
};

export default Header;

const Contain = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  width: 800px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  color: white;

  &:hover {
    color: orange;
  }

  &:active {
    color: coral;
  }
`;
