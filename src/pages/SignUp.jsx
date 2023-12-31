import styled from "styled-components";
import { Container, Form } from "../style/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupApi } from "../apis/api";
import { useInput } from "../utils/useInput";
import Button from "../component/common/Button";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const emailValidation = (email) => email.includes("@");
  const passwordValidation = (password) => password.length >= 8;

  const emailInput = useInput("", emailValidation);
  const passwordInput = useInput("", passwordValidation);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signupApi(emailInput.value, passwordInput.value);
      navigate("/signin");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <Wrap>
      <h1>회원가입</h1>
      <Form onSubmit={handleSignUp}>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          data-testid="email-input"
          value={emailInput.value}
          placeholder="@를 포함하여 이메일을 입력해 주세요"
          onChange={(e) => emailInput.handleChange(e.target.value)}
        />
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          data-testid="password-input"
          value={passwordInput.value}
          placeholder="8자 이상 입력해 주세요"
          onChange={(e) => passwordInput.handleChange(e.target.value)}
        />
        {error && <span>{`회원가입 에러 :${error}`}</span>}
        <Button
          type="submit"
          data-testid="signup-button"
          disabled={!emailInput.isValid || !passwordInput.isValid}
        >
          회원가입
        </Button>
      </Form>
    </Wrap>
  );
};

export default SignUp;

const Wrap = styled(Container)`
  h1 {
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
  }
`;
